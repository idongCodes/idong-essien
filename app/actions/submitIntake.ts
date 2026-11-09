"use server";

import { headers } from "next/headers";

export async function submitIntakeForm(formData: FormData) {
  try {
    // --- Anti-spam checks (run before anything is emailed) ---

    // 1. Honeypot: the form hides a "websiteUrl" field from humans.
    //    Any submission with it filled in came from a bot.
    //    Return fake success so bots don't learn and adapt.
    const honeypot = formData.get("websiteUrl") as string;
    if (honeypot) {
      return { success: true };
    }

    // 2. Time trap: a human needs far longer than 3 seconds to
    //    complete this form. Instant submissions are bots.
    const startedAt = Number(formData.get("formStartedAt"));
    if (startedAt && Date.now() - startedAt < 3000) {
      return { success: true };
    }

    // 3. Cloudflare Turnstile: canonical siteverify, active only when
    //    TURNSTILE_SECRET (or TURNSTILE_SECRET_KEY) is set in Vercel.
    //    Until then, checks 1-2 above still apply.
    const turnstileSecret = process.env.TURNSTILE_SECRET ?? process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const token = formData.get("cf-turnstile-response");

      if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
        return { success: false, error: "Verification failed. Please try again." };
      }

      // Hostnames allowed to solve the widget. TURNSTILE_HOSTNAMES in the
      // environment (comma-separated) overrides these production defaults.
      // localhost is deliberately not included (production backend).
      const expectedHostnames = new Set(
        (process.env.TURNSTILE_HOSTNAMES ?? "essien.dev,www.essien.dev")
          .split(",")
          .map((h) => h.trim())
          .filter(Boolean)
      );

      const headerStore = await headers();
      const clientIp = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim();

      let result: { success?: boolean; action?: string; hostname?: string };
      try {
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          signal: AbortSignal.timeout(10_000),
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: token,
            ...(clientIp ? { remoteip: clientIp } : {}),
          }),
        });
        if (!verifyRes.ok) throw new Error(`siteverify ${verifyRes.status}`);
        result = await verifyRes.json();
      } catch {
        return { success: false, error: "Verification failed. Please try again." };
      }

      if (
        result.success !== true ||
        result.action !== "intake" ||
        !result.hostname ||
        !expectedHostnames.has(result.hostname)
      ) {
        return { success: false, error: "Verification failed. Please try again." };
      }
    }

    const rawData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      website: formData.get("website") as string,
      projectType: formData.get("projectType") as string,
      description: formData.get("description") as string,
      features: formData.get("features") as string,
      audience: formData.get("audience") as string,
      success: formData.get("success") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      inspiration: formData.get("inspiration") as string,
      assets: formData.get("assets") as string,
      support: formData.get("support") as string,
    };

    console.log("Received Intake Form:", rawData);

    // 1. Format & Send Email (Using Resend API)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Acme <onboarding@resend.dev>", // Update this to a verified domain if needed
          to: ["i.d.essien@gmail.com"],
          subject: `New Client Lead: ${rawData.fullName} - ${rawData.projectType}`,
          html: `
            <h2>New Intake Form Submission</h2>
            <p><strong>Name:</strong> ${rawData.fullName}</p>
            <p><strong>Email:</strong> ${rawData.email}</p>
            <p><strong>Company:</strong> ${rawData.company}</p>
            <p><strong>Website:</strong> ${rawData.website}</p>
            <hr />
            <h3>Project Details</h3>
            <p><strong>Type:</strong> ${rawData.projectType}</p>
            <p><strong>Description:</strong> ${rawData.description}</p>
            <p><strong>Features:</strong> ${rawData.features}</p>
            <p><strong>Assets:</strong> ${rawData.assets}</p>
            <p><strong>Budget:</strong> ${rawData.budget}</p>
            <p><strong>Timeline:</strong> ${rawData.timeline}</p>
            <p><strong>Ongoing Support:</strong> ${rawData.support}</p>
          `
        })
      }).catch(e => console.error("Resend email failed", e));
    }

    return { success: true };
  } catch (error) {
    console.error("Intake submission error:", error);
    return { success: false, error: "Failed to process form." };
  }
}
