---
name: Kindred Solutions
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c5d7'
  surface-tint: '#1051dd'
  primary: '#0048ce'
  on-primary: '#ffffff'
  primary-container: '#2d62ed'
  on-primary-container: '#eff0ff'
  inverse-primary: '#b5c4ff'
  secondary: '#006e2c'
  on-secondary: '#ffffff'
  secondary-container: '#86f898'
  on-secondary-container: '#00722f'
  tertiary: '#8f3c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b54f00'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#003cae'
  secondary-fixed: '#89fa9b'
  secondary-fixed-dim: '#6ddd81'
  on-secondary-fixed: '#002108'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The brand personality of this design system is rooted in empathy, collective intelligence, and reliable support. It is designed to foster a sense of belonging and safety, ensuring users feel empowered to share problems and collaborate on solutions. The target audience ranges from local community organizers to individuals seeking peer-to-peer advice.

The visual style employs a refined **Modern/Minimalist** approach with a human touch. It prioritizes clarity and openness through generous whitespace and soft transitions. By avoiding sharp edges and aggressive contrasts, the design system evokes an emotional response of calm confidence and accessibility, positioning the platform as a helpful neighbor rather than a rigid institution.

## Colors
The palette is centered on a "Warm Trust" philosophy. The primary blue is saturated yet soft, avoiding the coldness of traditional corporate blues. The secondary green represents growth and resolution, utilized primarily for success states and community progress indicators. A tertiary warm amber is used sparingly to highlight urgent needs or human-centric calls to action.

Neutral tones are shifted toward warm grays (slates) to maintain a cozy, approachable atmosphere. Backgrounds should primarily use off-whites and very light tints of the primary blue to reduce eye strain and define content areas without harsh borders.

## Typography
This design system utilizes a dual-font strategy to balance character with readability. **Plus Jakarta Sans** is used for headlines and UI labels; its soft, geometric curves reinforce the modern and friendly aesthetic. For long-form content and community discussions, **Be Vietnam Pro** is employed for its exceptional legibility and warm, contemporary feel.

Hierarchy is established through distinct weight jumps rather than extreme size differences. Line heights are intentionally generous to ensure that community-driven text—which can vary in quality and length—remains easy to scan and digest.

## Layout & Spacing
The layout philosophy relies on a **Fixed-Fluid Hybrid Grid**. On desktop, content is contained within a 1280px maximum width to ensure line lengths remain readable. The system uses a 12-column grid with 24px gutters.

Spacing follows a strict 4px-base linear scale. For internal component padding, use `md` (16px) or `lg` (24px) to maintain the "airy" feel of the design system. Vertical rhythm between sections should lean towards the larger end of the scale (`xxl`) to clearly separate different community topics and problem threads.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. Instead of traditional drop shadows, this design system uses soft, multi-layered blurs with a slight tint of the primary blue (#2D62ED) at 5-10% opacity. This creates a "lifted" effect that feels natural and light.

- **Level 0 (Base):** Flat, used for the main background.
- **Level 1 (Cards):** Low elevation with a subtle 4px blur, used for secondary content or feed items.
- **Level 2 (Active/Hover):** Medium elevation with an 8px blur, used for interactive elements and focused cards.
- **Level 3 (Modals):** High elevation with a 24px blur and a soft backdrop dimming to focus the user's attention on specific problem-solving tasks.

## Shapes
The shape language is consistently **Rounded**, which is essential for maintaining an approachable and safe atmosphere. Standard components like buttons and input fields use a 0.5rem (8px) radius. Larger containers, such as cards and modals, utilize "rounded-lg" (16px) or "rounded-xl" (24px) to emphasize the soft, modern aesthetic.

Avoid sharp 90-degree corners entirely. Icons should also follow this rule, utilizing rounded caps and joins to match the surrounding UI components.

## Components
- **Buttons:** Feature a subtle vertical gradient (top-to-bottom) of the primary color to create a tactile, pressable feel. Use large padding (12px 24px) and bold labels.
- **Cards:** The primary vehicle for community problems. They should use a white background, Level 1 elevation, and 16px of internal padding. Borders should be 1px solid with a very light neutral tint.
- **Chips:** Highly rounded (pill-shaped) with light background tints of the secondary green for "Solved" or "In Progress" status. 
- **Input Fields:** Use a 2px border on focus in the primary blue. Labels should always be visible above the field in **Plus Jakarta Sans**.
- **Progress Bars:** Soft, thick bars with rounded ends to visualize community goals or problem-solving milestones.
- **Community Avatars:** Always circular to reinforce the "human" element of the platform.
- **Voting/Reaction Toggles:** Large hit targets with soft background transitions on hover, using the primary blue for active states.