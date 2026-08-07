export default function TicketVisual() {
  return (
    <div
      className="animate-ticket pointer-events-none relative mx-auto mt-10 w-full max-w-sm md:absolute md:inset-y-0 md:right-8 md:left-auto md:mt-0 md:flex md:max-w-none md:w-[min(40vw,380px)] md:items-center md:justify-end lg:right-12"
      aria-hidden
    >
      <div className="relative w-full rotate-[-3deg]">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elevated shadow-[0_24px_60px_rgba(21,32,25,0.12)]">
          <div className="absolute inset-y-0 left-[26%] w-px border-l border-dashed border-line" />
          <div className="absolute top-1/2 left-[26%] size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bg" />
          <div className="absolute -top-2.5 left-[26%] size-5 -translate-x-1/2 rounded-full bg-bg" />
          <div className="absolute -bottom-2.5 left-[26%] size-5 -translate-x-1/2 rounded-full bg-bg" />

          <div className="grid grid-cols-[26%_1fr]">
            <div className="flex flex-col items-center justify-between bg-accent-soft py-6">
              <span className="font-display text-3xl tracking-widest text-accent [writing-mode:vertical-rl] rotate-180">
                SPORTY
              </span>
              <span className="text-[0.65rem] font-medium tracking-[0.2em] text-fg-muted [writing-mode:vertical-rl] rotate-180">
                ADMIT ONE
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 p-5 pl-7 sm:p-6 sm:pl-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ember uppercase">
                  Welcome gift
                </p>
                <p className="mt-1 font-display text-5xl leading-none tracking-wide text-accent sm:text-6xl">
                  $20
                </p>
                <p className="mt-2 text-sm leading-snug text-fg-muted">
                  toward your next ticket
                </p>
              </div>

              <div className="space-y-2 border-t border-line pt-4">
                <div className="flex justify-between text-xs font-medium text-fg-muted">
                  <span>Waitlist</span>
                  <span>First 1,000</span>
                </div>
                <div className="h-2 overflow-hidden rounded-md bg-accent-soft">
                  <div className="h-full w-1/5 rounded-md bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
