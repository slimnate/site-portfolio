# Tooltip Blur Issue History

## Context
- Component: `src/lib/components/SkillIcon.svelte`
- Goal: Replace native image `title` tooltip with custom themed tooltip + animated reveal.
- Current chosen animation: tilt/unfold only (all multi-animation prop plumbing removed).

## Current Status
- Tooltip system is working functionally (hover + focus show, custom styling, caret, animation).
- Blur issue persists in some cases, but is now mostly acceptable after increasing tooltip text size.
- User decision: pause further work for now and move on.

## Symptom Summary
- Tooltip text sharpness varies by browser zoom level.
- Different tooltip labels can look different at the same zoom (some crisp, some slightly blurry).
- Most noticeable at lower zoom levels; looks mostly fine at `100%+` after text size increase.

## What Was Implemented (Kept)
- Custom tooltip replaces native browser tooltip.
- Wrapper method applied:
  - Motion on `.skill-tooltip-motion`
  - Static visual/text layer on inner `.skill-tooltip`
- Single animation path retained:
  - `skill-tooltip-motion-anim-tilt-unfold`
  - `@keyframes tooltip-tilt-unfold-motion`
- Tooltip text size/padding increased, which improved practical readability.

## What Was Tried and Reverted
- Multi-animation variant system (`spring-pop`, `fade-float`, `blur-reveal`, `tilt-unfold`, `glow-pulse`) was added, then removed.
- Multiple caret rendering approaches were explored and tuned.
- Pixel snapping solution (devicePixelRatio center snapping via JS) was implemented, then fully removed per user request.
- Alternate centering approach that caused right-edge alignment drift was reverted.

## Working Theory
- Remaining blur is likely subpixel/compositor text rasterization behavior tied to:
  - zoom scaling,
  - fractional positioning from dynamic widths,
  - animated transforms (especially 3D/rotation during reveal).

## Practical Mitigation In Place
- Larger tooltip text metrics currently provide the best ROI and are considered acceptable for now.

## If Revisiting Later (Suggested Order)
1. Test a non-3D reveal variant just for comparison (e.g., Y-translate + opacity only) to isolate 3D contribution.
2. Reduce end-of-animation transform complexity further (no fractional overshoot near settle).
3. Optional: try deterministic pixel-snapping again, but only after final positioning logic is stable.
4. Browser matrix check (Chrome/Firefox/Safari) at `90%`, `100%`, `110%`, `125%`.

## Files Touched During This Effort
- `src/lib/components/SkillIcon.svelte`
- `src/lib/components/SkillIcon.types.ts` (temporary animation prop/type work; later cleaned up)
