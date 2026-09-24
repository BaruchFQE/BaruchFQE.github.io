# FQE Website Color Palette

Core theme colors used across the site.

| Token | Hex | RGB | HSL | Usage |
| --- | --- | --- | --- | --- |
| Primary dark | `#05140a` | `rgb(5, 20, 10)` | `hsl(150, 40%, 5%)` | Main section background |
| Secondary dark | `#0a1f12` | `rgb(10, 31, 18)` | `hsl(150, 30%, 8%)` | Panels, modals, elevated surfaces |
| Primary light | `#f0faf4` | `rgb(240, 250, 244)` | `hsl(140, 50%, 96%)` | Primary text on dark backgrounds |
| Secondary light | `#a3b8aa` | `rgb(163, 184, 170)` | `hsl(140, 13%, 68%)` | Body copy, subdued labels |
| Accent green | `#4ade80` | `rgb(74, 222, 128)` | `hsl(142, 70%, 58%)` | CTAs, links, active states, highlights |
| PixelBlast green | `#0a4f12` | `rgb(10, 79, 18)` | `hsl(127, 78%, 17%)` | Animated PixelBlast section background |
| Logo light | `#f3f4f6` | `rgb(243, 244, 246)` | `hsl(220, 14%, 96%)` | Monochrome alumni logo wordmarks |

## CSS Variables

Defined in `src/index.css`:

```css
--background: 150 40% 5%;
--foreground: 140 20% 97%;
--card: 150 35% 8%;
--primary: 142 70% 45%;
--secondary: 150 30% 12%;
--muted: 150 25% 15%;
--accent: 142 70% 50%;
--border: 150 20% 18%;
```

## Utility Classes

```css
.bg-primary-dark {
  background-color: #05140a;
}

.bg-secondary-dark {
  background-color: #0a1f12;
}

.text-primary-light {
  color: #f0faf4;
}

.text-secondary-light {
  color: #a3b8aa;
}

.text-accent-green {
  color: #4ade80;
}
```

