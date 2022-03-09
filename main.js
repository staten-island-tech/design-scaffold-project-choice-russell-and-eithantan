import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".sodas", delay: 0.2 });

tl.from(".parent", { opacity: 0, duration: 0.5 });
tl.from("#swoosh", { opacity: 0, duration: 0.5, ease: "ease-out" });
