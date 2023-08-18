
gsap.registerPlugin(ScrollTrigger);



const csr = document.querySelector("#cursor");

document.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x - 15 + "px";
  csr.style.top = dets.y - 15 + "px";
});


gsap.from(".nav li", {
  y: "50px",
  stagger: 0.1,
});

gsap.from("#head1, #head2", {
  y: "110px",
  duration: 1.5,
});

gsap.to("#loader2, #loder", {
  borderBottom: "none",
  delay: 1,
});

gsap.from("#para", {
  y: "50px",
  opacity: 0,
  // filter:"blur(5px)",
  duration: 1.5,
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#vid",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});

tl1.to(
  "#head1",
  {
    x: "-100px",
    filter: "blur(7px)",
  },
  "head"
);
tl1.to(
  "#head2",
  {
    x: "100px",
    filter: "blur(7px)",
  },
  "head"
);
tl1.to(
  "#para",
  {
    filter: "blur(5px)",
  },
  "head"
);
tl1.to(
  "#vid",
  {
    y: "-300px",
    scale: 2,
  },
  "head"
);

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page2-left",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 90%",
    scrub: 2,
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".twoo",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});

tl2.to(
  ".page2-head, .para2, hr ",
  {
    opacity: 1,
    y: "-100px",
    stagger: 0.1,
  },
  "anim2"
);
tl2.to(
  "#page2-right",
  {
    height: "80vh",
    opacity: 1,
    y: "-200px",
    duration: 1.5,
  },
  "anim2"
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#divide",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  },
});

tl3.to("#divide", {
  width: "100%",
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3-left2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});

tl4.to(
  ".page3-left2",
  {
    height: "80vh",
    opacity: 1,
    y: "-200px",
    duration: 1,
  },
  "anime2"
);

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3-right2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },
});

tl5.to(
  ".page3-right2",
  {
    height: "80vh",
    opacity: 1,
    y: "-200px",
    duration: 1,
  },
  "anime22"
);

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#trig",
    scroller: "body",
    // markers: true,
    start: "top 95%",
    end: "top 60%",
    scrub: 2,
  },
});

tl6.to(
  ".page3-right22",
  {
    height: "75vh",
    opacity: 1,
    y: "-600px",
    duration: 1,
  },
  "anime222"
);

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3-left22",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
});

tl7.to(
  ".page3-left22",
  {
    height: "80vh",
    opacity: 1,
    y: "-300px",
    duration: 1,
  },
  "anime222"
);

tl7.to(
  "#tt",
  {
    height: "700px",
  },
  "anime222"
);

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#divide2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});

tl8.to(
  "#divide2",
  {
    width: "100%",
    backgroundColor: "black",
  },
  "again"
);
tl8.to(
  ".main",
  {
    backgroundColor: "white",
  },
  "again"
);

tl8.to(
  ".color",
  {
    color: "black",
  },
  "again"
);
tl8.to(
  "#btn",
  {
    color: "black",
    boxShadow: "0 0 16px black",
  },
  "again"
);
tl8.to(
  "#text",
  {
    color: "black",
  },
  "again"
);


gsap.from(".foot-div, #last",{
  y:"150px",
  opacity:0,
  stagger:1,
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
})


gsap.from("#imgdown",{
  y:"150px",
  opacity:0,
  scrollTrigger: {
    trigger: "#imgdown",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
})

gsap.from("#imgup",{
  y:"150px",
  opacity:0,
  scrollTrigger: {
    trigger: "#imgup",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
})

let tryone=document.getElementById("tryone")

tryone.addEventListener("mouseenter", function(){
  csr.style.zIndex=-1
  gsap.to("#tryone",{
    scale:1.3,
    zIndex:11,
  })
})

tryone.addEventListener("mouseleave", function(){
  csr.style.zIndex=9
  gsap.to("#tryone",{
    scale:1,
    zIndex:1
  })
})



let trytwo=document.getElementById("trytwo")

trytwo.addEventListener("mouseenter", function(){
  csr.style.zIndex=-1
  gsap.to("#trytwo",{
    scale:1.3,
    zIndex:11
  })
})

trytwo.addEventListener("mouseleave", function(){
  csr.style.zIndex=9
  gsap.to("#trytwo",{
    scale:1,
    zIndex:1
  })
})


let trythree=document.getElementById("trythree")

trythree.addEventListener("mouseenter", function(){
  csr.style.zIndex=-1
  gsap.to("#trythree",{
    scale:1.3,
    zIndex:11,
  })
})

trythree.addEventListener("mouseleave", function(){
  csr.style.zIndex=9
  gsap.to("#trythree",{
    scale:1,
    zIndex:1
  })
})
let tryfour=document.getElementById("tryfour")

tryfour.addEventListener("mouseenter", function(){
  csr.style.zIndex=-1
  gsap.to("#tryfour",{
    scale:1.3,
    zIndex:11,
  })
})

tryfour.addEventListener("mouseleave", function(){
  csr.style.zIndex=9
  gsap.to("#tryfour",{
    scale:1,
    zIndex:1
  })
})



let tryfive=document.getElementById("tryfive")

tryfive.addEventListener("mouseenter", function(){
  csr.style.zIndex=-1
  gsap.to("#tryfive",{
    scale:1.3,
    zIndex:11
  })
})

tryfive.addEventListener("mouseleave", function(){
  csr.style.zIndex=9
  gsap.to("#tryfive",{
    scale:1,
    zIndex:1
  })
})


let trysix=document.getElementById("trysix")

trysix.addEventListener("mouseenter", function(){
  csr.style.zIndex=-1
  gsap.to("#trysix",{
    scale:1.3,
    zIndex:11,
  })
})

trysix.addEventListener("mouseleave", function(){
  csr.style.zIndex=9
  gsap.to("#trysix",{
    scale:1,
    zIndex:1
  })
})

