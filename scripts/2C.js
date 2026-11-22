(function(){
    "use strict"

    // ==========================================================
    // Item 02-C: gsap.from() demo
    // ==========================================================
    const target = "#item-02c__gsap-target";
    const distanceSelect = document.getElementById("item-02c__distance");

    // box teleports to distanceSelect.value and comes back to where it sits in the DOM normally
    document.getElementById("item-02c__play").addEventListener("click", function () {
        gsap.from(target, { x: distanceSelect.value });
    });

    // reset put back at x: 0
    document.getElementById("item-02c__reset").addEventListener("click", function () {
        gsap.to(target, { x: 0 } );
    });

    // on change, update the code shown
    distanceSelect.addEventListener("change", function () {
        const code = document.getElementById("item-02c__code");
        code.innerHTML = `&lt;script&gt;
   gsap.from(".box", { x: ${this.value} })
&lt;/script&gt;`;
        // Prism to style the code again
        Prism.highlightElement(code);
    });
})()
