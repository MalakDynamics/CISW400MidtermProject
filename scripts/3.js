(function(){
    "use strict"

    // =============================================================
    // Item 03: stagger demo, one tween drives all five small boxes
    // =============================================================
    const targets = ".item-03__gsap-target";
    const staggerSelect = document.getElementById("item-03__stagger");

    document.getElementById("item-03__play").addEventListener("click", function () {
        gsap.to(targets, { y: -30, stagger: Number(staggerSelect.value) });
    });

    // bring all five boxes back down together
    document.getElementById("item-03__reset").addEventListener("click", function () {
        gsap.to(targets, { y: 0 });
    });

    // on change, just update the code shown; the next Play reads the new value
    staggerSelect.addEventListener("change", function () {
        const code = document.getElementById("item-03__code");
        code.innerHTML = `&lt;script&gt;
   gsap.to(".box", { y: -30, stagger: ${this.value} })
&lt;/script&gt;`;
        // Prism to style the code again
        Prism.highlightElement(code);
        });
})();
