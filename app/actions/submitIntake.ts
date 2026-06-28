"use server";

export async function submitIntakeForm(formData: FormData) {
  try {
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

    // 1. Send Discord Notification
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhookUrl) {
      const discordMessage = {
        content: "<@660597284676829216> You have a new lead! 🚀",
        embeds: [{
          title: "New Project Intake Request",
          color: 0x87CEEB, // sky-blue
          fields: [
            { name: "Name", value: rawData.fullName || "N/A", inline: true },
            { name: "Email", value: rawData.email || "N/A", inline: true },
            { name: "Budget", value: rawData.budget || "N/A", inline: true },
            { name: "Project Type", value: rawData.projectType || "N/A" },
            { name: "Description", value: rawData.description ? rawData.description.substring(0, 1000) : "N/A" },
            { name: "Timeline", value: rawData.timeline || "N/A" },
          ],
          timestamp: new Date().toISOString(),
        }]
      };

      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordMessage),
      }).catch(e => console.error("Discord webhook failed", e));
    }

    // 2. Format & Send Email (Using Resend API)
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
          to: ["idessien+essiendev@gmail.com"],
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

    // 3. Google Sheets Webhook (Make.com / Zapier)
    // NOTE: Connecting directly to Google API requires a service account JSON file. 
    // Using a webhook is much faster and more secure for Next.js applications.
    const googleSheetsWebhook = process.env.SHEETS_WEBHOOK_URL;
    if (googleSheetsWebhook) {
      await fetch(googleSheetsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rawData),
      }).catch(e => console.error("Sheets webhook failed", e));
    }

    return { success: true };
  } catch (error) {
    console.error("Intake submission error:", error);
    return { success: false, error: "Failed to process form." };
  }
}
