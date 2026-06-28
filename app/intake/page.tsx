import IntakeForm from "@/components/IntakeForm";

export const metadata = {
  title: "Client Intake | Idong Essien",
  description: "Submit a project request to work with me on bespoke websites, PWAs, or internal software.",
  openGraph: {
    title: "Start a Project | Idong Essien",
    description: "Ready to build something great? Fill out the intake form to get started.",
    url: "https://essien.dev/intake",
  },
};

export default function IntakePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-zinc-950/80 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 relative overflow-hidden backdrop-blur-sm">
        <IntakeForm />
      </div>
    </main>
  );
}
