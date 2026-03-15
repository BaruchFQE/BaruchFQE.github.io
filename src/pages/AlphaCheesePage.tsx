import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

const cheeseTiles = [
  { id: 1, className: 'rotate-[-3deg] scale-100', caption: 'alpha signal' },
  { id: 2, className: 'rotate-[2deg] scale-95', caption: 'risk on' },
  { id: 3, className: 'rotate-[-1deg] scale-105', caption: 'cheese factor' },
  { id: 4, className: 'rotate-[4deg] scale-100', caption: 'latency: 0ms' },
  { id: 5, className: 'rotate-[-4deg] scale-95', caption: 'sigma approved' },
  { id: 6, className: 'rotate-[1deg] scale-105', caption: 'edge detected' },
  { id: 7, className: 'rotate-[-2deg] scale-100', caption: 'stonks only' },
  { id: 8, className: 'rotate-[3deg] scale-95', caption: 'market neutral?' },
  { id: 9, className: 'rotate-[-5deg] scale-100', caption: 'quant vibes' },
  { id: 10, className: 'rotate-[5deg] scale-100', caption: 'buy the dip' },
  { id: 11, className: 'rotate-[-2deg] scale-95', caption: 'backtest cooked' },
  { id: 12, className: 'rotate-[1deg] scale-105', caption: 'max sharpe' },
];

const floatingCheesePhotos = [
  'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240',
  'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240',
  'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240',
  'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240',
];

const memeQuotes = [
  'If it is yellow, it is probably alpha.',
  'Cheese is temporary. Edge is eternal.',
  'Risk parity, but make it dairy.',
  'I came for finance. I stayed for cheddar.',
  'No beta, only brie.',
];

const alphaCarouselPhrases = [
  'alpha cheese generated +420 bps',
  'latency lowered to 0.0001 parmesan-seconds',
  'portfolio rebalanced into pure gouda',
  'cheddar momentum breakout confirmed',
  'quant stack upgraded with dairy acceleration',
  'mean reversion but for mozzarella',
  'volatility absorbed by provolone hedge',
  'signal strength: extra sharp',
];

const betaCarouselPhrases = [
  'sell beta buy cheddar',
  'risk-free rate replaced with brie yield',
  'drawdown avoided via camembert overlay',
  'factor model says: overweight cheese',
  'options desk now trading swiss spreads',
  'liquidity powered by fondue flow',
  'market regime: aggressively cheesy',
  'this is definitely peer reviewed',
];

export default function AlphaCheesePage() {
  const [rainbowMode, setRainbowMode] = useState(false);
  const [shakeMode, setShakeMode] = useState(false);
  const [mintedCheese, setMintedCheese] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [sigmaValue, setSigmaValue] = useState(() => 100 + Math.floor(Math.random() * 300));
  const [jumpScareActive, setJumpScareActive] = useState(false);
  const chaosStats = useMemo(
    () => ({
      alpha: (420 + Math.floor(Math.random() * 580)).toString(),
      sharpe: (10 + Math.floor(Math.random() * 90)).toString(),
    }),
    []
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSigmaValue((prev) => prev + 25 + Math.floor(Math.random() * 140) + (mintedCheese % 11));
    }, 120);

    return () => window.clearInterval(interval);
  }, [mintedCheese]);

  useEffect(() => {
    if (!jumpScareActive) return;
    const timeout = window.setTimeout(() => setJumpScareActive(false), 1050);
    return () => window.clearTimeout(timeout);
  }, [jumpScareActive]);

  return (
    <div className={`min-h-screen bg-primary-dark relative ${rainbowMode ? 'rainbow-mode' : ''} ${shakeMode ? 'shake-mode' : ''}`}>
      <style>{`
        @keyframes alphaPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(74,222,128,0.3), 0 0 24px rgba(74,222,128,0.2); }
          50% { text-shadow: 0 0 22px rgba(74,222,128,0.65), 0 0 36px rgba(74,222,128,0.35); }
        }
        @keyframes jumpZoom {
          0% { transform: scale(0.65); }
          35% { transform: scale(1.25); }
          70% { transform: scale(2.15); }
          100% { transform: scale(3.1); }
        }
        @keyframes alphaFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes alphaMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes alphaMarqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes cheeseRain {
          0% { transform: translateY(-12vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.75; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .alpha-pulse { animation: alphaPulse 1.6s ease-in-out infinite; }
        .alpha-float { animation: alphaFloat 2.2s ease-in-out infinite; }
        .alpha-marquee-track {
          display: flex;
          width: max-content;
          animation: alphaMarquee 18s linear infinite;
        }
        .alpha-marquee-track-rev {
          display: flex;
          width: max-content;
          animation: alphaMarqueeReverse 14s linear infinite;
        }
        @keyframes cheeseSpin {
          0% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(180deg) translateY(-10px); }
          100% { transform: rotate(360deg) translateY(0px); }
        }
        @keyframes rainbowShift {
          0% { filter: hue-rotate(0deg) saturate(1); }
          100% { filter: hue-rotate(360deg) saturate(1.35); }
        }
        @keyframes wobble {
          0%,100% { transform: rotate(0deg) translateX(0); }
          25% { transform: rotate(1deg) translateX(2px); }
          50% { transform: rotate(-1deg) translateX(-2px); }
          75% { transform: rotate(1deg) translateX(1px); }
        }
        .cheese-float {
          position: absolute;
          width: 70px;
          height: 70px;
          opacity: 0.17;
          pointer-events: none;
          animation: cheeseSpin 8s linear infinite;
        }
        .wobble-card:hover {
          animation: wobble 350ms ease-in-out 1;
        }
        .rainbow-mode {
          animation: rainbowShift 2.5s linear infinite;
        }
        .shake-mode {
          animation: wobble 180ms linear infinite;
        }
        .cheese-rain {
          position: fixed;
          top: -10vh;
          z-index: 40;
          pointer-events: none;
          animation: cheeseRain linear infinite;
          font-size: 1.2rem;
          opacity: 0.7;
        }
      `}</style>
      <div className="grain-overlay" />
      {jumpScareActive && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
          style={{ background: 'rgba(255,255,255,0.96)', animation: 'rainbowShift 90ms linear infinite' }}
        >
          <div className="text-center">
            <img
              src="/alpha_cheese.png"
              alt="ALPHA CHEESE JUMPSCARE"
              className="w-[min(90vw,560px)] h-auto object-contain"
              style={{ animation: 'jumpZoom 950ms cubic-bezier(0.1, 0.85, 0.2, 1) forwards, alphaPulse 90ms linear infinite' }}
            />
            <p className="headline-lg text-primary-dark mt-3" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.2rem)' }}>
              JUMPSCARE: ALPHA CHEESE
            </p>
          </div>
        </div>
      )}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="cheese-rain"
          style={{
            left: `${(i * 13) % 100}%`,
            animationDuration: `${5 + (i % 7)}s`,
            animationDelay: `${(i % 9) * 0.6}s`,
          }}
        >
          🧀
        </span>
      ))}
      <img src={floatingCheesePhotos[0]} alt="" className="cheese-float top-24 left-[8vw] rounded-full object-cover" />
      <img src={floatingCheesePhotos[1]} alt="" className="cheese-float top-[28vh] right-[10vw] rounded-full object-cover" style={{ animationDuration: '10s' }} />
      <img src={floatingCheesePhotos[2]} alt="" className="cheese-float bottom-[22vh] left-[16vw] rounded-full object-cover" style={{ animationDuration: '12s' }} />
      <img src={floatingCheesePhotos[3]} alt="" className="cheese-float bottom-[10vh] right-[14vw] rounded-full object-cover" style={{ animationDuration: '9s' }} />

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

      <main className="py-[12vh]">
        <section className="w-full px-[6vw]">
          <div className="text-center mb-10 alpha-float">
            <span className="micro-label text-accent-green mb-4 inline-flex items-center gap-2">
              <Sparkles size={14} />
              Easter Egg Found
            </span>
            <h1 className="headline-lg text-primary-light mb-3 alpha-pulse" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5.2rem)' }}>
              ALPHA CHEESE
            </h1>
            <p className="body-text text-secondary-light max-w-2xl mx-auto">
              Congratulations. You found the forbidden quant artifact that backtests at 10,000x speed.
            </p>
            <p className="micro-label text-accent-green mt-4">
              {memeQuotes[quoteIndex]}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setRainbowMode((prev) => !prev)}
                className="text-link inline-flex items-center gap-2 border border-white/15 px-4 py-2 hover:border-accent-green/40"
              >
                <span>{rainbowMode ? 'Disable Rainbow Quant Mode' : 'Enable Rainbow Quant Mode'}</span>
              </button>
              <button
                type="button"
                onClick={() => setShakeMode((prev) => !prev)}
                className="text-link inline-flex items-center gap-2 border border-white/15 px-4 py-2 hover:border-accent-green/40"
              >
                <span>{shakeMode ? 'Disable Volatility Mode' : 'Enable Volatility Mode'}</span>
              </button>
              <button
                type="button"
                onClick={() => setQuoteIndex((prev) => (prev + 1) % memeQuotes.length)}
                className="text-link inline-flex items-center gap-2 border border-white/15 px-4 py-2 hover:border-accent-green/40"
              >
                <span>Generate New Cheese Quote</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="photo-frame bg-secondary-dark/45 p-4 text-center">
              <span className="micro-label text-accent-green block mb-1">Alpha Generated</span>
              <p className="headline-lg text-primary-light" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>{Number(chaosStats.alpha) + mintedCheese}%</p>
            </div>
            <div className="photo-frame bg-secondary-dark/45 p-4 text-center">
              <span className="micro-label text-accent-green block mb-1">Sigma Consumed</span>
              <p className="headline-lg text-primary-light" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>{sigmaValue.toLocaleString()}</p>
            </div>
            <div className="photo-frame bg-secondary-dark/45 p-4 text-center">
              <span className="micro-label text-accent-green block mb-1">Cheese Minted</span>
              <p className="headline-lg text-primary-light" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>{mintedCheese}</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <button
              type="button"
              onClick={() => setMintedCheese((prev) => prev + 1)}
              className="cta-button"
            >
              <span>MINT MORE CHEESE (+1 ALPHA)</span>
            </button>
          </div>

          <div className="overflow-hidden border border-accent-green/25 bg-secondary-dark/50 px-4 py-3 mb-8">
            <div className="alpha-marquee-track gap-8">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="micro-label text-accent-green whitespace-nowrap">
                  {alphaCarouselPhrases[i % alphaCarouselPhrases.length]}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-white/15 bg-primary-dark/70 px-4 py-3 mb-8">
            <div className="alpha-marquee-track-rev gap-8">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="micro-label text-secondary-light whitespace-nowrap">
                  {betaCarouselPhrases[i % betaCarouselPhrases.length]}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cheeseTiles.map((tile) => (
              <div
                key={tile.id}
                className={`photo-frame wobble-card bg-secondary-dark/40 p-3 transition-transform duration-300 hover:scale-105 cursor-pointer ${tile.className}`}
                onClick={() => setJumpScareActive(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setJumpScareActive(true);
                  }
                }}
              >
                <img
                  src="/alpha_cheese.png"
                  alt="Alpha Cheese"
                  className="w-full h-[180px] md:h-[240px] object-cover"
                />
                <p className="micro-label text-accent-green mt-3 text-center">{tile.caption}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="micro-label text-secondary-light">
              this page is not investment advice (unless cheese breaks resistance)
            </p>
            <p className="micro-label text-accent-green mt-2">
              current fake sharpe: {chaosStats.sharpe}.{(mintedCheese % 10).toString()}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
