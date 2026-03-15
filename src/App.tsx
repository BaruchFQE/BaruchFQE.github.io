import { useEffect, useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ContentSection from './sections/ContentSection';
import ProjectsSection from './sections/ProjectsSection';
import AlumniSection from './sections/AlumniSection';
import LeadershipSection from './sections/BoardSection';
import ContactSection from './sections/ContactSection';
import ClosingSection from './sections/ClosingSection';
import CalendarSection from './sections/CalendarSection';
import TradingCompetitionPage from './pages/TradingCompetitionPage';
import AppliedMathCompetitionPage from './pages/AppliedMathCompetitionPage';
import NotFoundPage from './pages/NotFoundPage';
import { ArrowRight, ArrowUp, BarChart3, BrainCircuit, Sparkles, Trophy } from 'lucide-react';

const TRADING_COMP_HASH = '#/trading-competition';
const APPLIED_MATH_COMP_HASH = '#/applied-math-competition';
const LEGACY_COMP_HASH = '#/competitions';
const LIVE_SCOREBOARD_HASH = '#/live-scoreboard';
// Optional .env override for the "Open Google Calendar" link in the calendar section:
// VITE_GOOGLE_CALENDAR_MANAGE_URL=https://calendar.google.com
const GOOGLE_CALENDAR_MANAGE_URL = import.meta.env.VITE_GOOGLE_CALENDAR_MANAGE_URL || 'https://calendar.google.com';
// Optional .env override for iframe embed URL:
// VITE_GOOGLE_CALENDAR_EMBED_URL=https://calendar.google.com/calendar/embed?...&mode=MONTH
const GOOGLE_CALENDAR_EMBED_URL =
  import.meta.env.VITE_GOOGLE_CALENDAR_EMBED_URL
  || 'https://calendar.google.com/calendar/embed?height=720&wkst=1&ctz=America%2FNew_York&bgcolor=%23103322&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=MONTH&src=YmFydWNoZnFlQGdtYWlsLmNvbQ&color=%23039BE5';

type CompetitionView = 'main' | 'trading' | 'applied' | 'not-found';

function getCompetitionView(hash: string): CompetitionView {
  if (hash === TRADING_COMP_HASH || hash === LEGACY_COMP_HASH) return 'trading';
  if (hash === APPLIED_MATH_COMP_HASH) return 'applied';
  if (hash.startsWith('#/') && hash !== '#/') return 'not-found';
  return 'main';
}

function App() {
  const [competitionView, setCompetitionView] = useState<CompetitionView>(
    () => getCompetitionView(window.location.hash)
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCompetitionView(getCompetitionView(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (competitionView !== 'main') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [competitionView]);

  useEffect(() => {
    if (competitionView !== 'main') return;

    const hash = window.location.hash;
    if (!hash || hash.startsWith('#/')) return;

    const targetId = hash.slice(1);
    if (!targetId) return;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };

    scrollToTarget();
    const rafId = window.requestAnimationFrame(scrollToTarget);
    const timeoutId = window.setTimeout(scrollToTarget, 60);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, [competitionView]);

  useEffect(() => {
    if (!isCalendarOpen || competitionView !== 'main') return;
    const section = document.getElementById('calendar');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isCalendarOpen, competitionView]);

  useEffect(() => {
    if (competitionView !== 'main') return;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 560);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [competitionView]);

  if (competitionView === 'trading') {
    return <TradingCompetitionPage />;
  }

  if (competitionView === 'applied') {
    return <AppliedMathCompetitionPage />;
  }

  if (competitionView === 'not-found') {
    return <NotFoundPage />;
  }

  const handleToggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const calendarButtonText = isCalendarOpen ? 'Hide the Calendar' : 'See the Calendar';
  const competitionCards = [
    {
      label: 'Trading',
      title: 'FQE Trading Competition',
      description: 'Build and iterate on live strategies with milestone-based execution across two trading days.',
      highlights: ['Team based (up to 3 students)', 'Coding assessment + live sessions', 'Performance and risk evaluated'],
      href: TRADING_COMP_HASH,
      cta: 'Explore Trading Track',
      Icon: BarChart3,
      status: 'Open',
    },
    {
      label: 'Applied Math',
      title: 'FQE Applied Math Competition',
      description: 'Solve rigorous quantitative problems under time constraints with clean logic and analytical depth.',
      highlights: ['Individual and team rigor', 'Math-first problem solving', 'Structured competition format'],
      href: APPLIED_MATH_COMP_HASH,
      cta: 'Explore Applied Math Track',
      Icon: BrainCircuit,
      status: 'Open',
    },
    {
      label: 'Coming Soon',
      title: 'Trading Competition Live Score Board',
      description: 'A real-time standings view for competition day performance, rankings, and key metrics.',
      highlights: ['Live updates', 'Transparent rankings', 'Post-round snapshots'],
      href: LIVE_SCOREBOARD_HASH,
      cta: 'Live Score Board',
      Icon: Trophy,
      status: 'Soon',
    },
  ];

  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <HeroSection />

        {/* About */}
        <ContentSection
          id="about"
          layout="right-photo"
          microLabel="About"
          headline=" FQE @ Baruch"
          body="Financial Quants and Engineers (FQE) develops technical depth and professional readiness at the intersection of quantitative finance and technology. Members work across data science, risk analysis, quantitative modeling, and algorithmic trading through workshops, technical discussions, and practical projects. Our goal is to help Baruch undergraduates build the skills, portfolio, and network needed for competitive quant pathways."
          imageSrc="/about_whiteboard.jpg"
          imageAlt="Student writing on whiteboard"
          items={[
            { label: 'Workshops', description: 'Applied sessions in computer science, math, hackathons, and computer architecture.' },
            { label: 'Projects', description: 'End-to-end research, backtests, and real world applications.' },
            { label: 'Mentorship', description: 'Direct access to alumni, faculty, and industry leaders shaping the future of finance.' },
          ]}
        />

        {/* Projects */}
        <ProjectsSection />

        {/* Competition */}
        <section
          id="competition"
          className="min-h-screen bg-primary-dark relative flex items-center py-[10vh]"
        >
          <div className="w-full px-[6vw]">
            <div className="max-w-5xl relative z-10">
              <span className="micro-label text-secondary-light mb-4 block">
                Competition
              </span>
              <h2 className="headline-lg text-primary-light mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Compete with Precision
              </h2>
              <p className="body-text text-secondary-light max-w-3xl mb-8">
                FQE runs two active competition tracks for Baruch undergraduates, with a live scoreboard experience in progress.
                Each track emphasizes rigor, speed, and disciplined technical execution.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <span className="micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2">Undergraduate Focus</span>
                <span className="micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2">Technical Screening</span>
                <span className="micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2">Live Performance Metrics</span>
                <span className="micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2">Team-Based Format</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {competitionCards.map(({ label, title, description, highlights, href, cta, Icon, status }) => (
                  <div key={title} className="competition-card border border-white/10 bg-secondary-dark/40 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="micro-label text-accent-green">{label}</span>
                        <div className="flex items-center gap-2">
                          <span className={`micro-label px-2 py-1 border ${status === 'Open' ? 'text-emerald-300 border-emerald-300/40' : 'text-amber-300 border-amber-300/40'}`}>
                            {status}
                          </span>
                          <Icon size={18} className="text-accent-green" />
                        </div>
                      </div>
                      <h3 className="font-display text-primary-light text-xl font-semibold mb-3">{title}</h3>
                      <p className="body-text text-secondary-light text-sm mb-5">{description}</p>
                      <ul className="space-y-2 mb-6">
                        {highlights.map((item) => (
                          <li key={item} className="body-text text-secondary-light text-sm flex items-start gap-2">
                            <Sparkles size={14} className="text-accent-green mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={href} className="cta-button w-fit">
                      <span>{cta}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Alumni */}
        <AlumniSection />

        {/* Leadership */}
        <LeadershipSection />

        {/* Events */}
        <ContentSection
          id="events"
          layout="right-photo"
          microLabel="Events"
          headline="FQE Activities"
          body="Ongoing technical programming, collaborative research projects, and curated industry engagements."
          imageSrc="/events_group.jpg"
          imageAlt="Group collaboration"
          items={[
            { label: 'Workshops', description: 'Hackathons, resume reviews, LeetCode sessions, and more.' },
            { label: 'Alumni & Networking', description: 'In-person bank visits, guest speakers, and industry connections.' },
            { label: 'Team Bonding', description: 'Poker nights and social events that strengthen collaboration.' },
            { label: 'Education Events', description: 'Math primers and technical learning sessions.' },
          ]}
          ctaText={calendarButtonText}
          ctaOnClick={handleToggleCalendar}
        />

        {isCalendarOpen && (
          <CalendarSection
            manageUrl={GOOGLE_CALENDAR_MANAGE_URL}
            embedUrl={GOOGLE_CALENDAR_EMBED_URL}
          />
        )}

        {/* Contact */}
        <ContactSection />

        {/* Closing */}
        <ClosingSection />
      </main>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-5 bottom-5 z-[250] inline-flex items-center justify-center w-11 h-11 border border-accent-green/60 bg-primary-dark/90 text-accent-green hover:bg-accent-green/10 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}

export default App;
