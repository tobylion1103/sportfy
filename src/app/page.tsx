import TicketVisual from "@/components/TicketVisual";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-bg">
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
          <p className="animate-fade-up-delay-1 max-w-lg font-display text-[clamp(1.35rem,3.5vw,2rem)] leading-tight tracking-wide text-fg">
            #1 Ticket Marketplace with{" "}
            <span className="text-accent">Zero</span> fees
          </p>

          <h1 className="animate-fade-up-delay-2 mt-6 font-display leading-none tracking-wide text-fg">
            <span className="block text-[clamp(1rem,2.4vw,1.25rem)] tracking-[0.28em] text-ember uppercase">
              Your welcome gift
            </span>
            <span className="mt-3 flex flex-nowrap items-center gap-x-3 sm:gap-x-4">
              <span className="shrink-0 text-[clamp(4rem,12vw,7rem)] leading-none text-accent">
                $20
              </span>
              <span className="text-[clamp(1.35rem,3.5vw,2.35rem)] leading-[1.1] text-fg">
                toward your next
                <br />
                 ticket
              </span>
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">
            Sporty is giving a $20 gift toward your next ticket purchase to the
            first 1,000 to join our waitlist.
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
