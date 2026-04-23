# Design Brief: Krishna Plastic

## Tone & Differentiation
Modern Indian retail confidence. Vibrant, energetic, locally trustworthy. Bold primary blues and yellows with professional discipline. Every element serves the local market context.

## Color Palette
| Purpose | OKLCH | Intent |
| --- | --- | --- |
| Primary | 0.52 0.28 255 | Trust, action, reliability |
| Secondary | 0.85 0.18 90 | Energy, warmth, approachability |
| Accent | 0.52 0.24 15 | Urgency, CTAs, highlights |
| Background | 0.99 0.01 90 | Clean white with warmth |
| Foreground | 0.15 0.02 240 | Dark text, high contrast |
| Muted | 0.82 0.02 240 | Secondary information |
| Card | 1.0 0.01 90 | Elevated surfaces |

## Typography
| Role | Font | Use |
| --- | --- | --- |
| Display | Plus Jakarta Sans | Headlines, hero, product categories |
| Body | Space Grotesk | Paragraph text, labels, UI text |
| Mono | JetBrains Mono | Code, technical content |

## Elevation & Depth
- **Cards**: 4px shadow (0 4px 12px rgba(0,0,0,0.08)) — light lift
- **Modals**: 12px shadow (0 12px 24px rgba(0,0,0,0.12)) — elevated presence
- **Hover**: Scale 102%, shadow-lg — interactive feedback

## Structural Zones
| Zone | Background | Treatment | Purpose |
| --- | --- | --- | --- |
| Header | Primary blue gradient | Border-bottom, sticky | Navigation, sticky CTA |
| Hero | Gradient (blue to yellow) | Full-width banner | Product hero, CTAs |
| Content | Muted/50 alternating | Card-based grid | Product categories, features |
| Footer | Neutral dark | Border-top | Business info, contact |

## Spacing & Rhythm
- Base unit: 1rem (16px)
- Card padding: 1.5rem (24px)
- Section gap: 3rem (48px)
- Border radius: 1rem (16px) for cards, generous warmth

## Component Patterns
- **Buttons**: Primary (blue), Secondary (yellow), Accent (red) — consistent height 44px, rounded-lg, smooth transitions
- **Cards**: Rounded-lg, card-shadow, hover:scale-102 with transition-smooth
- **Section titles**: Plus Jakarta Sans, display size, primary blue

## Motion & Animation
- **Transitions**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all interactive elements
- **Scroll animations**: Fade-in, slide-up (0.4s) on section entry
- **Button feedback**: Hover opacity-90, active scale-95

## Constraints
- Mobile-first responsive (sm: 640px, md: 768px, lg: 1024px)
- Lighthouse: Fast-loading (optimize images, lazy load below-fold)
- Light mode only (warm, approachable context)
- No dark mode (business context prefers trust/clarity over system preference)

## Signature Detail
Sticky call-to-action header with primary blue background and prominent "Call Now" button in red accent — visible on every scroll position to maximize conversion.
