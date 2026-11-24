# Blueprint Design System

A small design system built on the **Engineering Blueprint** background pattern, plus a GSAP playground for showing off animations and teaching users.

---

## Visual Direction

- White text on blueprint blue
- Thin type that looks like typed engineering-plan text
- Text goes inside cards, because the grid pattern makes text hard to read when it sits directly on the background
- ~~I might remove the thick lines since it's currently quite a bold pattern, or play around with darkened/thinner whites.~~ Colors muted.

---

## Typography

- Pick fonts (check licenses: Google Fonts is easiest)
- Decide whether accent and annotation can share one font
 - Define a type scale (sizes, line heights, weights)

---

## Components

### Card
- [x] Base card: light white outline (`border`)
- [x] Slightly shaded background so the card stands out from the pattern (prbly semi-transparent fill, e.g. `rgba()`)
- [x] Nested card variant (card inside a card) for grouping content
- [x] Check text contrast inside cards

### Form Controls
- [x] Button (default / hover / focus / active / ~~disabled~~ states)
- [x] Checkbox
- [x] Radio
- [x] Select
- [x] Textarea
- [x] Text input
- [x] Every control paired with a `<label>` that is also styled

---

## GSAP Playground

**Idea:** a page of demos where each one animates a `div` with GSAP.

Each demo has:
1. **Live demo:** the animation running on the page
2. **Code panel:** the code that runs it, shown underneath
3. **Controls:** form inputs (using the components above) that change the animation live, like duration, easing, distance and rotation

Demo ideas:
- [x] Move / translate
- [x] Rotate / scale
- [x] Fade / stagger multiple divs
- [ ] ~~Timeline (chained animations)~~ Too complex fo 15-30 minute lesson

### jQuery + GSAP
- ~~jQuery handles DOM selection and events (button clicks, input changes)~~ Disappointingly not achieved. Was hoping to rewrite but ran out of time. This was hard!
- GSAP handles the animation itself

---

## Open Questions

- [x] Stick with BEM for CSS?
- **Answer:** Yes.....badly so far but yes 
- [x] Build a custom CSS Root?
- **Answer:** Yes...at root of system.

## Sources/ Inspiration: 
[CSS3 Patterns Gallery (Lea Verou)](https://projects.verou.me/css3patterns/), "Blueprint grid"
[Reveal animations based on scroll direction - ScrollTrigger](https://codepen.io/GreenSock/pen/pojzxwZ), "GSAP Inspiration Animation"
[GSAP Documentation](https://gsap.com/docs/v3/), "GSAP Documentation"
[Prism.js Documentation](https://prismjs.com/docs/), "Prism.js Documentation"