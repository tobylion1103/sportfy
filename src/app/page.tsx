import Image from "next/image";
import AnnouncementBar from "@/components/AnnouncementBar";
import TicketVisual from "@/components/TicketVisual";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-bg">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_0%_0%,rgba(31,138,59,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_20%,rgba(232,93,44,0.08),transparent_50%),linear-gradient(180deg,#f7faf6_0%,#eef5ec_45%,#f3f7f2_100%)]" />
      </div>

      <AnnouncementBar />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-2.75rem)] w-full max-w-6xl flex-col px-5 pt-6 pb-12 sm:px-8 sm:pt-8 lg:px-10">
        <header className="animate-fade-up flex items-center justify-between gap-4">
          <div className="flex items-center gap-3" aria-label="Sporty">
            <Image
              src="/logo.svg"
              alt=""
              width={56}
              height={56}
              priority
              className="size-10 shrink-0 sm:size-11"
            />
            <span className="font-display text-3xl leading-none tracking-[0.06em] text-fg sm:text-[2.15rem]">
              SPORTY
            </span>
          </div>
          <span className="text-sm font-medium text-fg-muted">Coming soon</span>
        </header>

        <div className="relative flex flex-1 flex-col py-10 md:py-14 lg:justify-center">
          <section className="relative z-10 max-w-xl lg:max-w-2xl">
            <p className="animate-fade-up-delay-1 text-lg font-semibold tracking-wide text-accent sm:text-xl">
              Ticket marketplace
            </p>

            <h1 className="animate-fade-up-delay-1 mt-3 text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.12] tracking-tight text-fg">
              Buy and sell tickets with{" "}
              <span className="text-accent">zero fees</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">
              Sporty is launching soon. Join the waitlist and the first 1,000
              people get a <span className="font-medium text-fg">$20 gift</span>{" "}
              toward their next ticket.
            </p>

            <div className="animate-fade-up-delay-3 mt-8">
              <WaitlistForm />
            </div>
          </section>

          <TicketVisual />
        </div>

        <footer className="relative z-10 flex items-center justify-between border-t border-line pt-5 text-sm text-fg-muted">
          <span>© {new Date().getFullYear()} Sporty</span>
          <span>sporty.us</span>
        </footer>
      </div>
    </main>
  );
}
