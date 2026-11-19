# Blueprint Design System

A small design system built on the **Engineering Blueprint** background pattern, plus a GSAP + jQuery playground for showing off animations and teaching users.

> Planning notes for now. These will become real issues once the repo is more set up.

**Pattern source:** [CSS3 Patterns Gallery (Lea Verou)](https://projects.verou.me/css3patterns/), "Blueprint grid"
Likely to change but this inspired the design I have in my head.

---

## Visual Direction

- White text on blueprint blue
- Thin type that looks like typed engineering-plan text
- Text goes inside cards, because the grid pattern makes text hard to read when it sits directly on the background
- I might remove the thick lines since it's currently quite a bold pattern, or play around with darkened/thinner whites.

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
- [ ] Nested card variant (card inside a card) for grouping content
- [x] Check text contrast inside cards

### Form Controls
- [ ] Button (default / hover / focus / active / disabled states)
- [x] Checkbox
- [x] Radio
- [ ] Select
- [ ] Textarea
- [x] Text input
- [ ] Every control paired with a `<label>` that is also styled

---

## GSAP Playground

**Idea:** a page of demos where each one animates a `div` with GSAP.

Each demo has:
1. **Live demo:** the animation running on the page
2. **Code panel:** the code that runs it, shown underneath
3. **Controls:** form inputs (using the components above) that change the animation live, like duration, easing, distance and rotation
4. **Class Elements:** Uses the slideshow feature we learned in class, leverage intersection observors

Demo ideas:
- [ ] Move / translate
- [ ] Rotate / scale
- [ ] Fade / stagger multiple divs
- [ ] Timeline (chained animations)

### jQuery + GSAP
- jQuery handles DOM selection and events (button clicks, input changes)
- GSAP handles the animation itself

---

## Open Questions

- [x] Stick with BEM for CSS?
-- *answer:* Yes.....badly so far but yes 
- [x] Build a custom CSS Root?
-- *answer:* Yes...at root of system.
- [ ] How many examples?
- [ ] All examples on one page or do we want the intersection overvor on another (or do we want the intersection observer to control the page and show how it's done at the end?)
