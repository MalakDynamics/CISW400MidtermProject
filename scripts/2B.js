(function(){
    "use strict"

    // ==========================================================
    // Item 02-B: gsap.to() with rotation, same play/reset pattern as 02-A
    // ==========================================================
    const target = "#item-02b__gsap-target";
    const distanceSelect = document.getElementById("item-02b__distance");
    const rotationSelect = document.getElementById("item-02b__rotation");

    document.getElementById("item-02b__play").addEventListener("click", function () {
        gsap.to(target, { x: distanceSelect.value, rotation: rotationSelect.value });
    });

    // same reset as 02-A, with rotation added
    document.getElementById("item-02b__reset").addEventListener("click", function () {
        gsap.to(target, { x: 0, rotation: 0 });
    });

    // helper function since 2 items listening this time
    function updateItem02bCode() {
        const code = document.getElementById("item-02b__code");
        code.innerHTML = `&lt;script&gt;
   gsap.to(".box", { x: ${distanceSelect.value}, rotation: ${rotationSelect.value} })
&lt;/script&gt;`;
        // Prism to style the code again
        Prism.highlightElement(code);
    }

    distanceSelect.addEventListener("change", updateItem02bCode);
    rotationSelect.addEventListener("change", updateItem02bCode);
})()
