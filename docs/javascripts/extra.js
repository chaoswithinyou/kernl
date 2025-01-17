// ----- ----- ----- ----- -----
// gsap scrollTrigger management
gsap.registerPlugin("scrollTrigger");

var slideUpElements = gsap.utils.toArray(".slide-up");

slideUpElements.forEach(function (element) {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            toggleActions: "restart none none reset"
            // markers: true
        },
        y: 48,
        duration: 0.48
    });
})