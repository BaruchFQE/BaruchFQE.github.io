import PixelBlast from '@/components/PixelBlast.jsx';

export default function MainSectionBackground() {
  return (
    <div className="main-section-background" aria-hidden="true">
      <PixelBlast
        variant="diamond"
        pixelSize={2}
        color="#0a4f12"
        patternScale={2}
        patternDensity={1}
        enableRipples
        rippleSpeed={0.25}
        rippleThickness={0.1}
        rippleIntensityScale={1}
        speed={0.7}
        transparent
        edgeFade={0.5}
      />
    </div>
  );
}
