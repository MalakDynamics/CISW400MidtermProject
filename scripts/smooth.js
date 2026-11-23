(function () {
    "use strict"
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // ==========================================================================
    // Background function
    // ==========================================================================

    // blueprint pattern has one extra 100px tile to move through and we will
    // keep rotating through that 100px to give a parallax effect.

    const PERCENT_BACKGROUND_MOVES = 0.2;
    const TILE = 100;       // tricks pattern to loop through one tile over and over

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        effects: true,
        smoothTouch: 0.1,
        onUpdate: function (el) {
            gsap.set("#grid-bg", { y: -(el.scrollTop() * PERCENT_BACKGROUND_MOVES % TILE) });
        }
    });

    // ==========================================================================
    // H2 Pin Function
    // ==========================================================================
    const H2_Y_POSITION = 33;

    gsap.utils.toArray(".step-container").forEach(function(section) {
        const heading = section.querySelector("h2");


        ScrollTrigger.create({
            trigger: section,
            pin: heading,
            pinSpacing: false,
            start: `top ${H2_Y_POSITION}%`,
            end: function() { return `bottom ${H2_Y_POSITION}%+=${heading.offsetHeight}`;},
            invalidateOnRefresh: true,
            markers: true
        });

        gsap.from(heading.children, {
            x: function() {
                if (section.classList.contains("alt")) return 100;
                return -100;
            },
            autoAlpha: 0,
            duration: 2,
            ease: "expo.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }

        })

        const cards = section.querySelectorAll(".bp-card");

        cards.forEach(function(card){
            gsap.from(card, {
                x: function() {
                    if (section.classList.contains("alt")) return -100;
                    return 100;
                },
                autoAlpha: 0,
                duration: 2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }

            })
        })
    });


})();
    // ==========================================================================
    // Animated card reveal - Inspiration code
    // ==========================================================================
//     function animateFrom(elem, direction) {
//         direction = direction || 1;
//         var x = 0,
//             y = direction * 100;
//         if(elem.classList.contains("gs_reveal_fromLeft")) {
//             x = -100;
//             y = 0;
//         } else if (elem.classList.contains("gs_reveal_fromRight")) {
//             x = 100;
//             y = 0;
//         }
//         elem.style.transform = "translate(" + x + "px, " + y + "px)";
//         elem.style.opacity = "0";
//         gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//             duration: 2, 
//             x: 0,
//             y: 0, 
//             autoAlpha: 1, 
//             ease: "expo", 
//             overwrite: "auto"
//         });
//     }

//     function hide(elem) {
//         gsap.set(elem, {autoAlpha: 0});
//         }

//         document.addEventListener("DOMContentLoaded", function() {
//         gsap.registerPlugin(ScrollTrigger);
        
//         gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
//             hide(elem); // assure that the element is hidden when scrolled into view
            
//             ScrollTrigger.create({
//             trigger: elem,
//             // markers: true,
//             onEnter: function() { animateFrom(elem) }, 
//             onEnterBack: function() { animateFrom(elem, -1) },
//             onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//             });
//         });
//     });
// })()
