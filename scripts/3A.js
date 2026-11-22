(function(){
    "use strict"

    // ==============================================================
    // Item 03-A: stagger demo, one tween drives all five small boxes
    // ==============================================================
    const targets = ".item-03a__gsap-target";
    const staggerSelect = document.getElementById("item-03a__stagger");

    document.getElementById("item-03a__play").addEventListener("click", function () {
        gsap.to(targets, { y: -30, stagger: Number(staggerSelect.value) });
    });

    // bring all five boxes back down together
    document.getElementById("item-03a__reset").addEventListener("click", function () {
        gsap.to(targets, { y: 0 });
    });

    // on change, just update the code shown; the next Play reads the new value
    staggerSelect.addEventListener("change", function () {
        const code = document.getElementById("item-03a__code");
        code.innerHTML = `&lt;script&gt;
   gsap.to(".box", { y: -30, stagger: ${this.value} })
&lt;/script&gt;`;
        // Prism to style the code again
        Prism.highlightElement(code);
        });
})();
