function navAnimation() {
  let Nav = document.querySelector(".nav");

  Nav.addEventListener("mouseenter", function () {
    const tl = gsap.timeline();

    tl.to(".nav-bottom", {
      height: "26vh",
    })
      .to(".nav-menu h5", {
        display: "block",
      })
      .to(".nav-menu h5 span", {
        y: 0,
        // duration: 0.2,
        stagger: {
          amount: 0.3,
        },
      });
  });

  Nav.addEventListener("mouseleave", function () {
    const tl = gsap.timeline();

    tl.to(".nav-menu h5 span", {
      y: 20,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-menu h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to(".nav-bottom", {
      height: "0vh",
      duration: 0.2,
    });
  });
}

function page2Animation() {
  let relem = document.querySelectorAll(".right-elem");
  let relemImg = document.querySelectorAll(".right-elem img");

  relem.forEach(function (elems) {
    elems.addEventListener("mouseenter", function (newelems) {
      gsap.to(elems.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elems.addEventListener("mouseleave", function (newelems) {
      gsap.to(elems.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elems.addEventListener("mousemove", function (dets) {
      gsap.to(elems.childNodes[3], {
        x: dets.x - elems.getBoundingClientRect().x - 10,
        y: dets.y - elems.getBoundingClientRect().y - 90,
      });
    });
  });
}

navAnimation();
page2Animation();
