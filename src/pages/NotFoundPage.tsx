import { useEffect, useRef } from 'react';
import { ArrowLeft, Home } from 'lucide-react';

type FloatingConstant = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  symbol: string;
};

const irrationalConstants = ['π', 'e', 'φ', '√2', '√3', '√5', '√7', 'ln2', 'γ', 'ζ(3)', 'τ'];

export default function NotFoundPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let animationId = 0;
    let constants: FloatingConstant[] = [];

    const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

    const createConstant = (): FloatingConstant => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      vx: randomBetween(-0.09, 0.09),
      vy: randomBetween(-0.07, 0.07),
      size: randomBetween(13, 28),
      alpha: randomBetween(0.15, 0.45),
      symbol: irrationalConstants[Math.floor(Math.random() * irrationalConstants.length)],
    });

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const density = Math.max(30, Math.floor((width * height) / 32000));
      constants = Array.from({ length: density }, createConstant);
    };

    const step = () => {
      ctx.fillStyle = 'rgba(5, 20, 10, 0.32)';
      ctx.fillRect(0, 0, width, height);

      for (const constant of constants) {
        constant.x += constant.vx;
        constant.y += constant.vy;

        if (constant.x < -40) constant.x = width + 40;
        if (constant.x > width + 40) constant.x = -40;
        if (constant.y < -40) constant.y = height + 40;
        if (constant.y > height + 40) constant.y = -40;

        const pulse = (Math.sin((constant.x + constant.y) * 0.01 + performance.now() * 0.0008) + 1) / 2;
        const alpha = Math.min(0.55, constant.alpha + pulse * 0.15);

        ctx.font = `${constant.size}px "IBM Plex Mono", monospace`;
        ctx.fillStyle = `rgba(163, 184, 170, ${alpha})`;
        ctx.fillText(constant.symbol, constant.x, constant.y);
      }

      animationId = window.requestAnimationFrame(step);
    };

    setup();
    step();

    const handleResize = () => setup();
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-primary-dark overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 z-10 pointer-events-none" aria-hidden="true" />
      <div className="grain-overlay" />
      <div className="vignette" />

      <div className="fixed top-6 left-6 z-[200]">
        <a href="#" className="font-display text-xl font-bold text-primary-light tracking-tight hover:text-accent-green transition-colors">
          FQE
        </a>
      </div>

      <div className="fixed top-6 right-6 z-[200]">
        <a href="#" className="text-link inline-flex items-center gap-2">
          <ArrowLeft size={14} />
          <span>Back to Main Site</span>
        </a>
      </div>

      <main className="relative z-20 min-h-screen flex items-center justify-center px-[6vw]">
        <div className="text-center max-w-2xl border border-white/10 bg-primary-dark/55 backdrop-blur-[2px] p-8 md:p-12">
          <span className="micro-label text-secondary-light mb-4 block">Lost in Space</span>
          <h1 className="headline-xl text-primary-light mb-6" style={{ fontSize: 'clamp(2.6rem, 8.2vw, 6.6rem)', lineHeight: 0.95 }}>
            ERROR 404
          </h1>
          <p className="body-text text-secondary-light mb-8">
            This page drifted beyond the rational plane. Navigate back to home and continue exploring FQE.
          </p>
          <a href="#" className="cta-button w-fit mx-auto">
            <Home size={16} />
            <span>Return Home</span>
          </a>
        </div>
      </main>
    </div>
  );
}
