import { useState } from 'react';
import { X } from 'lucide-react';
import LogoLoop, { type LogoLoopItem } from '@/components/LogoLoop.jsx';
import MainSectionBackground from '@/components/MainSectionBackground';

const companyLogos: LogoLoopItem[] = [
  { alt: 'American Express', src: '/logo_americanexpress.png' },
  { alt: 'Bank of America', src: '/logo_bankofamerica.svg.png' },
  { alt: 'Bloomberg', src: '/logo_bloomberg.svg.png' },
  { alt: 'BNY Mellon', src: '/logo_bnymellon.svg.png' },
  { alt: 'Cargill', src: '/logo_cargill.svg.png' },
  { alt: 'Chimera', src: '/logo_chimera.svg.svg' },
  { alt: 'Citi', src: '/logo_citi.png' },
  { alt: 'Credit Agricole CIB', src: '/logo_creditagricolecib.svg.png' },
  { alt: 'Deloitte', src: '/logo_deloitte.svg.png' },
  { alt: 'Deutsche Bank', src: '/logo_deutschebank.svg.png' },
  { alt: 'EY', src: '/logo_ey.svg.png' },
  { alt: 'Fidelity', src: '/logo_fidelity.svg.svg' },
  { alt: 'FTI Consulting', src: '/logo_fticonsulting.png.png' },
  { alt: 'Goldman Sachs', src: '/logo_goldman.svg.svg' },
  { alt: 'Intel', src: '/logo_intel.svg.svg' },
  { alt: 'JPMorgan Chase', src: '/logo_jpmorganchase.svg.png' },
  { alt: 'Marex Solutions', src: '/logo_marexsolutions.svg' },
  { alt: 'Meta', src: '/logo_meta.svg.svg' },
  { alt: 'MUFG', src: '/logo_mufg.png' },
  { alt: 'PwC', src: '/logo_pwc.svg' },
  {
    ariaLabel: 'Raymond James',
    node: <span className="alumni-logo-wordmark alumni-logo-wordmark--compact">R. JAMES</span>,
  },
  { alt: 'State Street', src: '/logo_statestreet.png' },
  { alt: 'The Depository Trust & Clearing Corporation (DTCC)', src: '/logo_dtcc.png' },
  { alt: 'VanEck', src: '/logo_vaneck.png' },
  {
    ariaLabel: 'Wells Fargo',
    node: <span className="alumni-logo-wordmark alumni-logo-wordmark--stacked">WELLS<br />FARGO</span>,
  },
  {
    ariaLabel: 'Wolfe Research',
    node: <span className="alumni-logo-wordmark">WOLFE</span>,
  },
];

const alumniStories = [
  {
    name: 'William V',
    role: 'Systematic Trading @Investment Bank',
    testimonial:
      "FQE prepares students for the 'real' Wall Street. By focusing on low-latency execution and model back-testing, members enter internships with a technical maturity that sets them apart from typical undergraduates.",
  },
  {
    name: 'Dzara M',
    role: 'Senior Developer @Financial Data Provider',
    testimonial:
      "The FQE community is filled with like-minded students who are genuinely passionate about math and coding. It's the best place on campus to find a study partner for stochastic calculus or a teammate for a trading competition.",
  },
  {
    name: 'Jun T',
    role: 'Commodities Trading @Financial Services Provider',
    testimonial:
      'By working on innovative projects like Unscented Kalman Filters for volatility surfaces or Sentiment Analysis, students gain hands-on technical experience that makes them competitive candidates for quantitative roles.',
  },
  {
    name: 'David M',
    role: 'Quant Research @Investment Bank',
    testimonial:
      'I went from being having a traditional financial math background with an interest in coding to a competitive MFE candidate because the club pushed me to apply what I learn around Linear Algebra and C++ - the gatekeeper skills for any top program.',
  },
  {
    name: 'Zhi L',
    role: 'Quant Trader @Hedge Fund',
    testimonial:
      'By working on innovative projects like Unscented Kalman Filters for volatility surfaces or Sentiment Analysis, students gain hands-on technical experience that makes them competitive candidates for quantitative roles and prepare me for graduate school applications.',
  },
];

export default function AlumniSection() {
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);

  return (
    <section
      id="alumni"
      className="min-h-screen bg-primary-dark relative overflow-hidden flex items-center py-[10vh]"
    >
      <MainSectionBackground />
      <div className="relative z-10 w-full px-[6vw]">
        {/* Header */}
        <div className="mb-12">
          <span className="micro-label text-secondary-light mb-4 block">
            Alumni
          </span>
          <h2 className="headline-lg text-primary-light" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Where Alumni Are
          </h2>
          <p className="body-text text-secondary-light mt-4 max-w-xl">
            Our alumni build quantitative strategies, trading systems, and data technology at leading financial and technology firms.
          </p>
        </div>

        {/* Placement Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="hover-panel border border-white/10 p-6">
            <span className="micro-label text-accent-green mb-2 block">ALPHA & PORTFOLIO STRATEGIES</span>
            <p className="body-text text-secondary-light text-sm">
              Systematic funds and asset management firms
            </p>
          </div>
          <div className="hover-panel border border-white/10 p-6">
            <span className="micro-label text-accent-green mb-2 block">DERIVATIVES & MARKET STRUCTURE</span>
            <p className="body-text text-secondary-light text-sm">
              Quant research, trading, and market making
            </p>
          </div>
          <div className="hover-panel border border-white/10 p-6">
            <span className="micro-label text-accent-green mb-2 block">DATA, ML & INFRASTRUCTURE</span>
            <p className="body-text text-secondary-light text-sm">
              Quant engineering and financial systems
            </p>
          </div>
        </div>









        {/* Logo Carousel */}
        <div className="alumni-logo-loop relative overflow-hidden py-6">
          <LogoLoop
            logos={companyLogos}
            speed={76}
            gap={68}
            logoHeight={58}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#06140B"
            ariaLabel="Companies where FQE alumni work"
            renderItem={(company) => {
              if ('node' in company) {
                return (
                  <div className="alumni-logo-item" title={company.ariaLabel ?? company.title}>
                    {company.node}
                  </div>
                );
              }

              return (
                <div className="alumni-logo-item" title={company.alt}>
                  <img
                    src={company.src}
                    alt={company.alt}
                  />
                </div>
              );
            }}
          />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setIsStoriesOpen(true)}
            className="text-link inline-flex items-center gap-2"
          >
            <span>Read Alumni Stories</span>
          </button>
        </div>
      </div>

      {isStoriesOpen && (
        <div className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-secondary-dark max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="headline-lg text-primary-light" style={{ fontSize: '1.5rem' }}>
                Alumni Stories
              </h3>
              <button
                onClick={() => setIsStoriesOpen(false)}
                className="text-secondary-light hover:text-accent-green transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {alumniStories.map((story, index) => (
                <div
                  key={`${story.name}-${story.role}`}
                  className={`mb-8 pb-8 ${index !== alumniStories.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <p className="micro-label text-accent-green mb-3">
                    {story.name} - {story.role}
                  </p>
                  <p className="body-text text-secondary-light mb-4">
                    {story.testimonial}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsStoriesOpen(false)}
                className="cta-button"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
