import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    const ids = navLinks.map((link) => link.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveLink(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5],
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Logo */}
      <div className="fixed top-6 left-6 z-[200]">
        <a
          href="#"
          className="font-display text-xl font-bold text-primary-light tracking-tight hover:text-accent-green transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          FQE
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-6 right-6 z-[200] hidden md:flex items-center gap-8 px-5 py-3 border transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-dark/90 border-white/20 backdrop-blur-md'
            : 'bg-primary-dark/65 border-white/10 backdrop-blur-sm'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`nav-link ${activeLink === link.href ? 'is-active' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 right-6 z-[200] md:hidden p-2 text-primary-light"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[150] bg-primary-dark/95 backdrop-blur-sm md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-display text-2xl font-bold transition-colors ${
                activeLink === link.href ? 'text-accent-green' : 'text-primary-light hover:text-accent-green'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
