import { useEffect, useState, type MouseEvent } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Competitions', href: '#competition' },
  { label: 'Alumni', href: '#alumni' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isPinnedStandard, setIsPinnedStandard] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updatePastHero = () => {
      const heroSection = document.getElementById('canvas-section');
      if (!heroSection) {
        setIsPastHero(window.scrollY > window.innerHeight * 0.75);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      setIsPastHero(window.scrollY > heroBottom - 90);
    };

    updatePastHero();
    window.addEventListener('scroll', updatePastHero, { passive: true });
    window.addEventListener('resize', updatePastHero);

    return () => {
      window.removeEventListener('scroll', updatePastHero);
      window.removeEventListener('resize', updatePastHero);
    };
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace('#', ''));
    let ticking = false;

    const updateActiveFromScroll = () => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      if (!sections.length) return;

      // Use a line in the upper-middle viewport so section handoff feels natural.
      const targetY = window.innerHeight * 0.35;
      let bestId = sections[0].id;
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const containsTarget = rect.top <= targetY && rect.bottom >= targetY;
        const distance = containsTarget ? 0 : Math.abs(rect.top - targetY);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = section.id;
        }
      });

      setActiveLink(`#${bestId}`);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };

    updateActiveFromScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Above the hero, always use normal nav and clear manual toggle state.
    if (!isPastHero) {
      setIsPinnedStandard(false);
    }
  }, [isPastHero]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  const isCompactNav = isPastHero && !isMobileMenuOpen && !isPinnedStandard;
  const shouldShowDesktopLinks = !isCompactNav;
  const navSizeClass = isCompactNav
    ? 'w-auto px-2.5 py-2'
    : 'w-[calc(100vw-2.5rem)] px-2.5 py-2 md:w-[min(96vw,1200px)] md:px-2';

  return (
    <>
      <nav
        className={`fixed top-5 left-5 z-[220] border nav-shell transition-all duration-300 ${navSizeClass} ${
          isScrolled
            ? 'bg-primary-dark/95 border-white/25 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.45)]'
            : 'bg-primary-dark/78 border-white/15 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-3 justify-between">
          <a
            href="#"
            className={`inline-flex items-center gap-3 hover:text-accent-green transition-colors ${isCompactNav ? 'px-2 py-2' : 'px-3 py-2'}`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-display font-bold text-primary-light tracking-tight text-xl">FQE</span>
            <span className={`micro-label text-accent-green ${isCompactNav ? 'hidden' : 'hidden lg:inline'}`}>Financial Quants & Engineers</span>
          </a>

          <div className={`hidden md:flex items-center gap-2 transition-opacity duration-200 ${shouldShowDesktopLinks ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none w-0 overflow-hidden'}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link nav-link-pill ${activeLink === link.href ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {isPastHero && (
            <button
              type="button"
              onClick={() => setIsPinnedStandard((prev) => !prev)}
              className="hidden md:inline-flex items-center justify-center p-2 text-primary-light hover:text-accent-green transition-colors"
              aria-label={isCompactNav ? 'Expand navigation' : 'Collapse navigation'}
              title={isCompactNav ? 'Expand navigation' : 'Collapse navigation'}
            >
              {isCompactNav ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          )}

          <button
            className="md:hidden p-2.5 text-primary-light border border-white/20 bg-primary-dark/80 backdrop-blur-md hover:border-accent-green/50 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[150] bg-primary-dark/85 backdrop-blur-md md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`ml-auto h-full w-[84vw] max-w-[360px] border-l border-white/15 bg-secondary-dark/95 p-8 pt-24 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <span className="micro-label text-accent-green mb-6 block">Navigation</span>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-display text-xl font-bold px-3 py-2 border transition-colors ${
                  activeLink === link.href
                    ? 'text-accent-green border-accent-green/45 bg-accent-green/10'
                    : 'text-primary-light border-white/10 hover:text-accent-green hover:border-accent-green/35'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="micro-label text-secondary-light mt-6">FQE. Built by Students.</p>
        </div>
      </div>
    </>
  );
}
