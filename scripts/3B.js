(function(){
    "use strict"

    // ===============================================================
    // Item 03-B: ease demo, box 1 is always "none" to compare against
    // ===============================================================
    const target1 = "#item-03b__gsap-target-1";
    const target2 = "#item-03b__gsap-target-2";
    const easeSelect = document.getElementById("item-03b__ease");

    // fromTo so both boxes run the full distance every click
    document.getElementById("item-03b__play").addEventListener("click", function () {
        gsap.fromTo(target1, { x: 0 }, { x: 200, duration: 1, ease: "none" });
        gsap.fromTo(target2, { x: 0 }, { x: 200, duration: 1, ease: easeSelect.value });
    });

    // reset by kill and reposition
    document.getElementById("item-03b__reset").addEventListener("click", function () {
        gsap.killTweensOf(target1);
        gsap.killTweensOf(target2);

        gsap.set(target1, { x: 0 });
        gsap.set(target2, { x: 0 });
    });

    // on change, just update the code shown; the next Play reads the new value
    easeSelect.addEventListener("change", function () {
        const code = document.getElementById("item-03b__code");
        code.innerHTML = `&lt;script&gt;
   gsap.to(".box__1", { x: 200, duration: 1, ease: "none" })
   gsap.to(".box__2", { x: 200, duration: 1, ease: "${this.value}" })
&lt;/script&gt;`;
        // Prism to style the code again
        Prism.highlightElement(code);
    });
})()
