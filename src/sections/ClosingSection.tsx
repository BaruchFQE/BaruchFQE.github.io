import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function ClosingSection() {
  return (
    <section className="bg-primary-dark py-[8vh]">
      {/* Closing Word */}
      <div className="text-center py-[6vh]">
        <h2
          className="headline-lg text-primary-light"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          STAY CURIOUS. STAY QUANT.
        </h2>
      </div>

      {/* Contact Block */}
      <div className="flex flex-col items-center pb-[6vh]">
        <a
          href="mailto:baruchfqe@gmail.com"
          className="micro-label text-accent-green mb-4 hover:underline"
        >
          baruchfqe@gmail.com
        </a>
        <p className="body-text text-secondary-light mb-6" style={{ fontSize: '0.9rem' }}>
          Baruch's Premier Quantitative Club
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-10">
          <a
            href="https://github.com/BaruchFinancialQuantsEngineers-FQE/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FQE GitHub"
            className="text-secondary-light hover:text-accent-green transition-colors"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/company/fqe-baruch/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FQE LinkedIn"
            className="text-secondary-light hover:text-accent-green transition-colors"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.instagram.com/baruchfqe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FQE Instagram"
            className="text-secondary-light hover:text-accent-green transition-colors"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:baruchfqe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email FQE"
            className="text-secondary-light hover:text-accent-green transition-colors"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-6 mb-6">
          <a href="#" className="micro-label text-secondary-light/60 hover:text-secondary-light transition-colors">
            Privacy
          </a>
          <a href="#" className="micro-label text-secondary-light/60 hover:text-secondary-light transition-colors">
            Terms
          </a>
          <a href="#" className="micro-label text-secondary-light/60 hover:text-secondary-light transition-colors">
            Code of Conduct
          </a>
        </div>

        {/* Closer */}
        <p className="micro-label text-secondary-light/40 text-center">
          FQE. Built by Students.
          <a href="#/alpha-cheese" className="ml-1 text-secondary-light/20 hover:text-accent-green transition-colors" aria-label="Alpha Cheese easter egg">
            alpha cheese
          </a>
        </p>
      </div>
    </section>
  );
}
