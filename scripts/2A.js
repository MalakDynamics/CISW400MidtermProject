// ==========================================================
// Item 02-A: gsap.to() practice
// ==========================================================

(function(){
    "use strict"
    const target = "#item-02__gsap-target";
    const distanceSelect = document.getElementById("item-02__distance");

    // send the box to x: distanceSelect.value
    document.getElementById("item-02__play").addEventListener("click", function () {
        gsap.to(target, { x: distanceSelect.value });
    });

    // send the box back to the start
    document.getElementById("item-02__reset").addEventListener("click", function () {
        gsap.to(target, { x: 0 });
    });

    // on change,  update the code shown
    distanceSelect.addEventListener("change", function () {
        const code = document.getElementById("item-02__code");
        code.innerHTML = `&lt;script&gt;
   gsap.to(".box", { x: ${this.value} })
&lt;/script&gt;`;
        // Prism to style the code again
        Prism.highlightElement(code);
    })

})()
