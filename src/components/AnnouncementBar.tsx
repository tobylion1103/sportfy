const ANNOUNCEMENTS = [
  "Zero fees on every ticket",
  "First 1,000 joiners get a $20 gift",
  "Sporty - ticket marketplace for fans",
  "Coming soon to sporty.us",
];

export default function AnnouncementBar() {
  const line = ANNOUNCEMENTS.join("   |   ");
  const track = `${line}   |   ${line}   |   `;

  return (
    <div className="relative z-20 border-b border-line bg-accent text-white">
      <div className="overflow-hidden py-2.5">
        <div className="animate-marquee flex w-max whitespace-nowrap text-sm font-medium tracking-wide sm:text-[0.95rem]">
          <span className="px-4">{track}</span>
          <span className="px-4" aria-hidden>
            {track}
          </span>
        </div>
      </div>
    </div>
  );
}
