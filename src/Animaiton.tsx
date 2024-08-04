import { gsap } from "gsap";

export const animateMe = () => {
  gsap
    .timeline()
    .to(".request", {
      y: 200,
      duration: 2,
      // rotation: 360,
      scale: 1,
    })
    .to(".response", {
      y: 200,
      duration: 2,
      // rotation: 360,
      scale: 1,
    });
};
