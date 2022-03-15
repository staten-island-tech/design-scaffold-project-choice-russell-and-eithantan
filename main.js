import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".sodas", delay: 0.2 });

tl.from(".parent", { opacity: 0, duration: 0.5 });
tl.from("#swoosh", { opacity: 0, duration: 0.5, ease: "ease-out" });

gsap.from("h1", {
  opacity: 0,
  y: 200,
  duration: 5,
});

gsap.utils.toArray("h1").forEach((h1) => {
  let hover = gsap.to(h1, {
    scale: 1.12,
    color: "blue",
    duration: 1.5,
    paused: true,
    ease: "power1.inOut",
  });
  h1.addEventListener("mouseenter", () => hover.play());
  h1.addEventListener("mouseleave", () => hover.reverse());
});

gsap.fromTo("#circles", 0.2, {
  colorMatrixFilter: { brightness: 30, contrast: 1.5, colorize: 0x90e600 },
  glowFilter: {
    blurX: 12,
    blurY: 12,
    color: 0x90e600,
    strength: 1.3,
    alpha: 1,
  },
});

gsap.fromTo("#circles feGaussianBlur", 1, {
  attr: { stdDeviation: 0 },
  repeat: -1,
  yoyo: true,
});
