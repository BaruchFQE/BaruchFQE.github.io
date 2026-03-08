import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  addDays,
  addMonths,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';

type CalendarSectionProps = {
  manageUrl: string;
  icsUrl: string;
};

type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  url: string;
};

const MONTH_OPTIONS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function unfoldIcsLines(text: string): string[] {
  const rawLines = text.split(/\r?\n/);
  const lines: string[] = [];

  for (const line of rawLines) {
    if ((line.startsWith(' ') || line.startsWith('\t')) && lines.length > 0) {
      lines[lines.length - 1] += line.slice(1);
    } else {
      lines.push(line);
    }
  }

  return lines;
}

function decodeIcsText(value: string): string {
  return value
    .replace(/\\n/gi, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\')
    .trim();
}

function parseIcsDate(value: string): Date | null {
  const compact = value.trim();

  if (/^\d{8}$/.test(compact)) {
    const year = Number(compact.slice(0, 4));
    const month = Number(compact.slice(4, 6)) - 1;
    const day = Number(compact.slice(6, 8));
    return new Date(year, month, day);
  }

  if (/^\d{8}T\d{6}Z$/.test(compact)) {
    const year = Number(compact.slice(0, 4));
    const month = Number(compact.slice(4, 6)) - 1;
    const day = Number(compact.slice(6, 8));
    const hour = Number(compact.slice(9, 11));
    const minute = Number(compact.slice(11, 13));
    const second = Number(compact.slice(13, 15));
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }

  if (/^\d{8}T\d{6}$/.test(compact)) {
    const year = Number(compact.slice(0, 4));
    const month = Number(compact.slice(4, 6)) - 1;
    const day = Number(compact.slice(6, 8));
    const hour = Number(compact.slice(9, 11));
    const minute = Number(compact.slice(11, 13));
    const second = Number(compact.slice(13, 15));
    return new Date(year, month, day, hour, minute, second);
  }

  const parsed = new Date(compact);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function parseIcsEvents(icsText: string, fallbackUrl: string): CalendarEvent[] {
  const lines = unfoldIcsLines(icsText);
  const events: CalendarEvent[] = [];
  let inEvent = false;
  let block: string[] = [];

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      inEvent = true;
      block = [];
      continue;
    }

    if (line === 'END:VEVENT') {
      if (block.length > 0) {
        let id = '';
        let title = '';
        let startRaw = '';
        let eventUrl = '';

        for (const entry of block) {
          const separatorIndex = entry.indexOf(':');
          if (separatorIndex === -1) continue;

          const key = entry.slice(0, separatorIndex);
          const value = entry.slice(separatorIndex + 1);

          if (key.startsWith('UID')) id = decodeIcsText(value);
          if (key.startsWith('SUMMARY')) title = decodeIcsText(value);
          if (key.startsWith('DTSTART')) startRaw = value.trim();
          if (key.startsWith('URL')) eventUrl = decodeIcsText(value);
        }

        const start = parseIcsDate(startRaw);
        if (id && title && start) {
          events.push({
            id,
            title,
            start,
            url: eventUrl || fallbackUrl,
          });
        }
      }

      inEvent = false;
      block = [];
      continue;
    }

    if (inEvent) block.push(line);
  }

  return events;
}

export default function CalendarSection({ manageUrl, icsUrl }: CalendarSectionProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(() => startOfMonth(new Date()));
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  useEffect(() => {
    let isCancelled = false;

    fetch(icsUrl)
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error('Failed to fetch calendar feed'))))
      .then((icsText) => {
        if (isCancelled) return;
        setEvents(parseIcsEvents(icsText, manageUrl));
      })
      .catch(() => {
        if (!isCancelled) setEvents([]);
      });

    return () => {
      isCancelled = true;
    };
  }, [icsUrl, manageUrl]);

  const days = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const dates: Date[] = [];
    let cursor = gridStart;
    while (cursor <= gridEnd) {
      dates.push(cursor);
      cursor = addDays(cursor, 1);
    }
    return dates;
  }, [currentMonth]);

  const eventsByDay = useMemo(() => {
    const byDay = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const key = format(event.start, 'yyyy-MM-dd');
      const existing = byDay.get(key) || [];
      existing.push(event);
      byDay.set(key, existing);
    }
    return byDay;
  }, [events]);

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

        <div className="border border-white/15 bg-primary-dark/35 p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <button type="button" onClick={() => setCurrentMonth((prev) => subMonths(prev, 1))} className="text-link inline-flex items-center gap-2">
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>
            <div className="flex items-center gap-2">
              <label htmlFor="calendar-month" className="sr-only">Select month</label>
              <select
                id="calendar-month"
                value={currentMonth.getMonth()}
                onChange={(e) => setCurrentMonth((prev) => startOfMonth(setMonth(prev, Number(e.target.value))))}
                className="bg-secondary-dark border border-white/20 px-3 py-2 text-primary-light text-sm font-mono"
              >
                {MONTH_OPTIONS.map((monthName, idx) => (
                  <option key={monthName} value={idx}>
                    {monthName}
                  </option>
                ))}
              </select>

              <label htmlFor="calendar-year" className="sr-only">Select year</label>
              <select
                id="calendar-year"
                value={currentMonth.getFullYear()}
                onChange={(e) => setCurrentMonth((prev) => startOfMonth(setYear(prev, Number(e.target.value))))}
                className="bg-secondary-dark border border-white/20 px-3 py-2 text-primary-light text-sm font-mono"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button type="button" onClick={() => setCurrentMonth((prev) => addMonths(prev, 1))} className="text-link inline-flex items-center gap-2">
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-7 border border-white/10">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="border-b border-white/10 p-2 text-center micro-label text-accent-green">
                {day}
              </div>
            ))}

            {days.map((day) => {
              const key = format(day, 'yyyy-MM-dd');
              const dayEvents = eventsByDay.get(key) || [];
              const isCurrentDay = isToday(day);

              return (
                <div
                  key={key}
                  className={`min-h-[110px] border-b border-r border-white/10 p-2 transition-shadow ${isSameMonth(day, currentMonth) ? 'bg-transparent' : 'bg-black/10'} ${isCurrentDay ? 'border border-accent-green/70 shadow-[0_0_12px_rgba(74,222,128,0.35)]' : ''}`}
                >
                  <div className={`micro-label mb-2 ${isCurrentDay ? 'text-accent-green' : 'text-secondary-light'}`}>
                    {format(day, 'd')}
                  </div>
                  <div className="space-y-1">
                    {dayEvents.slice(0, 2).map((event) => (
                      <a
                        key={event.id}
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[11px] leading-tight text-primary-light hover:text-accent-green transition-colors"
                      >
                        {event.title}
                      </a>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="block text-[11px] text-secondary-light">+{dayEvents.length - 2} more</span>
                    )}
                    {dayEvents.length === 0 && isSameDay(day, new Date()) && (
                      <span className="block text-[11px] text-secondary-light">Today</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
