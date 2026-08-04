import TicketVisual from "@/components/TicketVisual";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden grain">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_10%,rgba(184,255,60,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_85%_75%,rgba(255,107,44,0.14),transparent_50%),linear-gradient(180deg,#0b0f0c_0%,#080a09_55%,#050605_100%)]" />
        <div className="animate-light absolute -top-24 left-[8%] h-[42vh] w-[42vh] rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute right-[5%] bottom-[10%] h-[36vh] w-[36vh] rounded-full bg-ember/20 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(242,245,240,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(242,245,240,0.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 40% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-6 pt-8 pb-16 sm:px-10 lg:px-12">
        <header className="animate-fade-up flex items-center justify-between">
          <p className="font-display text-4xl leading-none tracking-[0.08em] text-fg sm:text-5xl">
            SPORTY
          </p>
          <span className="hidden text-xs tracking-[0.25em] text-fg-muted uppercase sm:inline">
            Ticket Resale · Coming Soon
          </span>
        </header>

        <section className="relative flex flex-1 flex-col justify-center py-16 md:max-w-xl lg:max-w-2xl md:py-20">
          <p className="animate-fade-up-delay-1 font-display text-lg tracking-[0.28em] text-accent uppercase sm:text-xl">
            Whitelist open
          </p>

          <h1 className="animate-fade-up-delay-2 mt-4 max-w-[16ch] font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-wide text-fg">
            $20 toward your next ticket
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">
            Sporty is giving $20 towards your next ticket purchase to the first
            1,000 to join our whitelist.
          </p>

          <div className="animate-fade-up-delay-3 mt-10">
            <WaitlistForm />
          </div>
        </section>

        <footer className="relative z-10 flex items-center justify-between border-t border-line pt-6 text-xs tracking-wide text-fg-muted">
          <span>© {new Date().getFullYear()} Sporty</span>
          <span>sporty.us</span>
        </footer>
      </div>

      <TicketVisual />
    </main>
  );
}
