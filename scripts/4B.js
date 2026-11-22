(function(){
    "use strict"

    // =============================================================
    // Item 04-B: ScrollTrigger demo, the sandbox scrolls on its own
    // =============================================================
    gsap.registerPlugin(ScrollTrigger);

    const target = "#item-04b__gsap-target";
    const scroller = document.getElementById("item-04b__scroller");
    const modeSelect = document.getElementById("item-04b__mode");

    // the scrollTrigger settings that change with each mode
    const modes = {
        toggle: { toggleActions: "play none none reverse" },
        scrub:  { scrub: true },
        smooth: { scrub: 1 }
    };

    // the matching line shown in the code panel for each mode
    const modeCode = {
        toggle: `toggleActions: "play none none reverse"`,
        scrub:  `scrub: true`,
        smooth: `scrub: 1`
    };

    let tween;

    function buildTween(mode) {
        tween = gsap.to(target, {
            x: 200,
            rotation: 360,
            duration: 1,
            ease: "none",

            scrollTrigger: Object.assign({
                trigger: target,
                scroller: scroller,
                start: "top 80%",
                end: "top 20%",
                markers: true
            }, modes[mode])
        });
    }

    buildTween(modeSelect.value);

    // on change handler
    modeSelect.addEventListener("change", function () {
        tween.scrollTrigger.kill();
        tween.kill();
        gsap.set(target, { x: 0, rotation: 0 });
        scroller.scrollTop = 0;

        buildTween(this.value);

        const code = document.getElementById("item-04b__code");
        code.innerHTML = `&lt;script&gt;
   gsap.registerPlugin(ScrollTrigger);

   gsap.to(".box", {
      x: 200,
      rotation: 360,
      scrollTrigger: {
         trigger: ".box",
         scroller: ".sandbox",
         start: "top 80%",
         end: "top 20%",
         ${modeCode[this.value]},
         markers: true
      }
   })
&lt;/script&gt;`;
        // Prism to style the code again
        Prism.highlightElement(code);
    });
})()
