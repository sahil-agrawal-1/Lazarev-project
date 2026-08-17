let Nav = document.querySelector(".nav");

Nav.addEventListener("mouseenter", function(){
const tl = gsap.timeline();

    tl.to(".nav-bottom",{
        height: "26vh",
    }).to(".nav-menu h5", {
        display: "block",
    }).to(".nav-menu h5 span", {
        y: 0,
        // duration: 0.2,
        stagger: {
            amount: 0.3
        }
    })
})

Nav.addEventListener("mouseleave", function(){
    const tl = gsap.timeline();

    tl.to(".nav-menu h5 span", {
        y: 20,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-menu h5", {
        display: "none",
        duration: 0.1,
    })
    tl.to(".nav-bottom",{
        height: "0vh",
        duration: 0.2,
    })
})