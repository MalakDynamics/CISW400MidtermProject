(function(){
    "use strict"
    // ==========================================================
    // Challenge 02-D: gsap.to() vs gsap.fromTo()
    // ==========================================================

    const target1 = "#item-02d__gsap-target-1";
    const target2 = "#item-02d__gsap-target-2";

    // Play .to() button: box 1
    document.getElementById("item-02d__play-1").addEventListener("click", function () {
        // Make box 1 move 200px to the right using the .to() function
    });

    // Play .fromTo() button: box 2
    document.getElementById("item-02d__play-2").addEventListener("click", function () {
        // Make box 2 move 200px to the right using the .fromTo() function
    });

    // Reset button: both boxes
    document.getElementById("item-02d__reset").addEventListener("click", function () {
        // Move both boxes back to 0px from original position
    });
})()
