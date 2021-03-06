import "./style.css";
const DOMSelectors = {
  cokeButton: document.querySelector(".div2"),
  fantaButton: document.querySelector(".div3"),
  rootButton: document.querySelector(".div4"),
  dewButton: document.querySelector(".div5"),
  watahButton: document.querySelector(".div6"),
  saltButton: document.querySelector(".div7"),
  pepesButton: document.querySelector(".div8"),
  upButton: document.querySelector(".div9"),
  spritzButton: document.querySelector(".div10"),
  pinkButton: document.querySelector(".div11"),
  dispenseButton: document.querySelector(".div12"),
  sodaPop: document.getElementById("sodaPop"),
};

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

// gsap.fromTo("#circles", 0.2, {
//   colorMatrixFilter: { brightness: 30, contrast: 1.5, colorize: 0x90e600 },
//   glowFilter: {
//     blurX: 12,
//     blurY: 12,
//     color: 0x90e600,
//     strength: 1.3,
//     alpha: 1,
//   },
// });

// gsap.fromTo("#circles feGaussianBlur", 1, {
//   attr: { stdDeviation: 0 },
//   repeat: -1,
//   yoyo: true,
// });



const links = {
  coke: "./html/cocoa.html",
  fanta: "./html/foontis.html",
  root: "./html/root.html",
  dew: "./html/dew.html",
  watah: "./html/watah.html",
  salt: "./html/drsalt.html",
  pepes: "./html/pepes.html",
  up: "./html/8up.html",
  spritz: "./html/spritz.html",
  pink: "./html/pink.html",
  dispense: "https://www.coca-cola.com/",
};
let link = null;
function selLink(soda) {
  link = links[soda];
}

DOMSelectors.cokeButton.addEventListener("click", () => {
  selLink("coke");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--cocoa)");

});
DOMSelectors.fantaButton.addEventListener("click", () => {
  selLink("fanta");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--foontis)");
});
DOMSelectors.rootButton.addEventListener("click", () => {
  selLink("root");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--root)");

});
DOMSelectors.dewButton.addEventListener("click", () => {
  selLink("dew");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--dew)");

});
DOMSelectors.watahButton.addEventListener("click", () => {
  selLink("watah");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--watah)");

});
DOMSelectors.saltButton.addEventListener("click", () => {
  selLink("salt");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--drsalt)");

});
DOMSelectors.pepesButton.addEventListener("click", () => {
  selLink("pepes");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--pepes)");

});
DOMSelectors.upButton.addEventListener("click", () => {
  selLink("up");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--up)");

});
DOMSelectors.spritzButton.addEventListener("click", () => {
  selLink("spritz");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--spritz)");

});
DOMSelectors.pinkButton.addEventListener("click", () => {
  selLink("pink");
  console.log(link);
  document.body.style.setProperty("--bacco", "var(--pink)");

});
DOMSelectors.dispenseButton.addEventListener("click", () => {
  DOMSelectors.sodaPop.style.animation = "";
  DOMSelectors.sodaPop.style.animation = "sodaFill 5s";
  console.log("dispenseButton")
  setTimeout(() => {
    window.open(link, "_self");
  }, 3000);

})


