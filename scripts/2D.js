(function(){
    "use strict"

    // ==========================================================
    // Item 02-D: gsap.fromTo() demo
    // ==========================================================

    // play button wired to animation, auto-play was miserable, more advanced than what demo shows but
    // willing to compromise to make it more enjoyable as a lesson.
    document.getElementById("item-02d__play-1").addEventListener("click", function () {
        gsap.to("#item-02d__gsap-target-1", { x: 200 });
    });
    document.getElementById("item-02d__play-2").addEventListener("click", function () {
        gsap.fromTo("#item-02d__gsap-target-2", { x: 0 }, { x: 200 });
    });

    // send both boxes back to the start
    document.getElementById("item-02d__reset").addEventListener("click", function () {
        gsap.to("#item-02d__gsap-target-1", { x: 0 });
        gsap.to("#item-02d__gsap-target-2", { x: 0 });
    });
})()
