export default function TicketVisual() {
  return (
    <div
      className="animate-ticket pointer-events-none absolute inset-x-0 bottom-[-8%] z-0 flex justify-center opacity-90 sm:bottom-[-4%] md:inset-y-0 md:right-[-4%] md:left-auto md:items-center md:justify-end"
      aria-hidden
    >
      <div className="relative w-[min(78vw,340px)] rotate-[-6deg] md:w-[min(38vw,420px)]">
        <div className="relative overflow-hidden rounded-sm border border-white/15 bg-gradient-to-br from-[#1a211c] via-[#121814] to-[#0c100e] shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-y-0 left-[28%] w-px border-l border-dashed border-white/20" />
          <div className="absolute top-1/2 left-[28%] size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bg" />
          <div className="absolute -top-3 left-[28%] size-6 -translate-x-1/2 rounded-full bg-bg" />
          <div className="absolute -bottom-3 left-[28%] size-6 -translate-x-1/2 rounded-full bg-bg" />

          <div className="grid grid-cols-[28%_1fr]">
            <div className="flex flex-col items-center justify-between py-6">
              <span className="font-display text-4xl tracking-widest text-accent [writing-mode:vertical-rl] rotate-180">
                SPORTY
              </span>
              <span className="font-display text-sm tracking-[0.3em] text-fg-muted [writing-mode:vertical-rl] rotate-180">
                ADMIT ONE
              </span>
            </div>

            <div className="flex flex-col justify-between gap-8 p-6 pr-7 pl-8">
              <div>
                <p className="font-display text-sm tracking-[0.35em] text-ember uppercase">
                  Early Access
                </p>
                <p className="mt-2 font-display text-5xl leading-none tracking-wide text-fg md:text-6xl">
                  $20
                </p>
                <p className="mt-2 text-sm text-fg-muted">
                  toward your next ticket
                </p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="flex justify-between text-xs tracking-wider text-fg-muted uppercase">
                  <span>Whitelist</span>
                  <span>001 / 1000</span>
                </div>
                <div className="h-8 w-full bg-[repeating-linear-gradient(90deg,#b8ff3c_0_2px,transparent_2px_5px)] opacity-80" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -inset-8 -z-10 bg-accent/10 blur-3xl" />
      </div>
    </div>
  );
}
