import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-background text-brand-text">
      <Navigation />
      
      {/* Hero Section Placeholder */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 mt-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-brand-text to-brand-text-muted bg-clip-text text-transparent">
          Defy Gravity. <br /> Uplift Lives.
        </h1>
        <p className="text-xl md:text-2xl text-brand-text-muted max-w-2xl mb-10">
          The next-generation platform connecting communities with local NGOs for transparent, weightless impact.
        </p>
        <div className="flex gap-4">
          <button className="gradient-btn px-8 py-4 text-lg">
            Start Exploring
          </button>
          <button className="glass-card px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-medium">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
