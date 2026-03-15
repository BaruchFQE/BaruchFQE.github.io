type CalendarSectionProps = {
  manageUrl: string;
  embedUrl: string;
};

export default function CalendarSection({ manageUrl, embedUrl }: CalendarSectionProps) {
  return (
    <section id="calendar" className="bg-primary-dark py-[10vh] relative">
      <div className="w-full px-[6vw]">
        <div className="calendar-shell border border-white/15 bg-secondary-dark/35 p-2 md:p-3">
          <div className="calendar-shell-header border border-white/10 bg-primary-dark/70 px-4 py-3 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="calendar-tabs" role="tablist" aria-label="Calendar links">
              <a
                href={embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-tab calendar-tab-active"
              >
                Open Embedded View
              </a>
              <a
                href={manageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-tab"
              >
                Open Google Calendar
              </a>
            </div>
            <span className="micro-label text-secondary-light">Official FQE Schedule</span>
          </div>

          <div className="relative border border-white/10 bg-primary-dark/80">
            <iframe
              src={embedUrl}
              title="FQE Google Calendar"
              className="calendar-embed-dark w-full h-[760px] md:h-[840px] border-0"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 border border-accent-green/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
