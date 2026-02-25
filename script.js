let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom 50%", 
    scrub: 2,
  },
});

tl.to(".layer", {
    x: "100%",
    duration: 2,
  })

  .from(".card",
    {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
    },
    "-=1",
  );
