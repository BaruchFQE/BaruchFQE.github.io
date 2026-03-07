import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';

type CalendarSectionProps = {
  manageUrl: string;
};

type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  url: string;
};

type GoogleCalendarApiEvent = {
  id?: string;
  summary?: string;
  htmlLink?: string;
  start?: {
    dateTime?: string;
    date?: string;
  };
};

type GoogleCalendarApiResponse = {
  items?: GoogleCalendarApiEvent[];
};

// Set these in your .env file to enable live Google Calendar events in this custom monthly view:
// VITE_GOOGLE_CALENDAR_ID=<your_google_calendar_id>
// VITE_GOOGLE_CALENDAR_API_KEY=<your_google_api_key>
const GOOGLE_CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
const GOOGLE_CALENDAR_API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
const MONTH_OPTIONS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function CalendarSection({ manageUrl }: CalendarSectionProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(() => startOfMonth(new Date()));
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  useEffect(() => {
    if (!GOOGLE_CALENDAR_ID || !GOOGLE_CALENDAR_API_KEY) {
      return;
    }

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const timeMin = monthStart.toISOString();
    const timeMax = new Date(monthEnd.getTime() + 86400000).toISOString();

    const endpoint = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GOOGLE_CALENDAR_ID)}/events`);
    endpoint.searchParams.set('key', GOOGLE_CALENDAR_API_KEY);
    endpoint.searchParams.set('singleEvents', 'true');
    endpoint.searchParams.set('orderBy', 'startTime');
    endpoint.searchParams.set('timeMin', timeMin);
    endpoint.searchParams.set('timeMax', timeMax);
    endpoint.searchParams.set('maxResults', '250');

    let isCancelled = false;

    fetch(endpoint.toString())
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Failed to fetch calendar events'))))
      .then((data: GoogleCalendarApiResponse) => {
        if (isCancelled) return;
        const parsed: CalendarEvent[] = (data.items ?? [])
          .map((item) => {
            const rawStart = item.start?.dateTime || item.start?.date;
            if (!rawStart || !item.id || !item.summary) return null;
            return {
              id: item.id,
              title: item.summary,
              start: parseISO(rawStart),
              url: item.htmlLink || manageUrl,
            };
          })
          .filter((item): item is CalendarEvent => item !== null);
        setEvents(parsed);
      })
      .catch(() => {
        if (!isCancelled) setEvents([]);
      });

    return () => {
      isCancelled = true;
    };
  }, [currentMonth, manageUrl]);

  const days = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
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
