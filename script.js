// typing animation

var typed = new Typed("#typing-text", {
    strings: [
      "a Web Developer",
      "an Open Source Contributor",
      "a CSE Student",
      "a Problem Solver",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  // GSAP Animation
  gsap.from(".hero-img", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
  });
  gsap.from(".about-img", { opacity: 0, x: -100, duration: 1 });
  gsap.from(".about-content", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.5,
  });
  gsap.from(".projects-container", { opacity: 0, y: 50, duration: 1 });
  gsap.from(".project-card", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.3,
  });
  gsap.from(".skills-container", { opacity: 0, y: 50, duration: 1 });
  gsap.from(".resume-container", { opacity: 0, y: 50, duration: 1 });
  gsap.from(".contact-container", { opacity: 0, y: 50, duration: 1 });
  gsap.from("form", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });
  gsap.from(".footer-container", { opacity: 0, y: 30, duration: 1 });