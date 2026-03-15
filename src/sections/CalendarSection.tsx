import { ArrowRight } from 'lucide-react';

type CalendarSectionProps = {
  manageUrl: string;
  embedUrl: string;
};

export default function CalendarSection({ manageUrl, embedUrl }: CalendarSectionProps) {
  return (
    <section id="calendar" className="bg-[#103322] py-[8vh]">
      <div className="w-full px-[6vw]">
        <div className="max-w-4xl mb-6">
          <span className="micro-label text-primary-light mb-3 block">Calendar</span>
          <h2 className="headline-lg text-primary-light mb-4" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)' }}>
            FQE Calendar
          </h2>
          <a
            href={manageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex items-center gap-2"
          >
            <span>Open Google Calendar</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="border border-white/15 bg-primary-dark/35 p-2 md:p-4">
          <iframe
            src={embedUrl}
            title="FQE Google Calendar"
            className="calendar-embed-dark w-full h-[720px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
