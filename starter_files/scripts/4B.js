(function(){
    "use strict"
    // ==========================================================
    // Challenge 04-B: animate each section of the challenge page
    // (REMINDER: uses the plugin registered in 4A)
    // ==========================================================

    // Register the ScrollTrigger plugin here


    // This loop runs once for every h2 on the page.
    gsap.utils.toArray("h2").forEach(function (header) {
        const headerParts = header.children;   // the three elements inside this h2 we want to animate

        // Make headerParts fly in from the left and fade in, one after another,
        // when the header scrolls 80% of the way up the screen.
        // Make it reverse when you scroll back up past it.

    });








    

    // ==========================================================
    // Bonus challenge: make each card fly in from the right
    // ==========================================================

    // gsap.utils.toArray(".fly-right").forEach(function (card) {
    //
    // });

})()
