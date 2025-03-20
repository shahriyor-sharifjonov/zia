import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import * as functions from "./modules/functions.js";
import SmoothScroll from "smoothscroll-for-websites";

gsap.registerPlugin(ScrollTrigger);


functions.isWebp();

SmoothScroll({
    animationTime: 600,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

ScrollTrigger.matchMedia({
    "all": function() {
        gsap.utils.toArray(".intro").forEach(el => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "bottom 80%",
                    end: "bottom 20%",
                    markers: false,
                    scrub: 1,
                }
            });
            tl.add('start')
                tl.fromTo(el.querySelector(".intro__title"), 
                    { y: 0, opacity: 1 }, 
                    { y: -60, opacity: 1 }, 'start'
                );
                tl.fromTo(el.querySelector(".intro__bot"), 
                    { y: 0, opacity: 1 }, 
                    { y: -20, opacity: 1 }, 'start'
                );
        });
        gsap.utils.toArray(".render").forEach(el => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    markers: false,
                    scrub: 1,
                }
            })
            tl.add('start')
                .fromTo(".render__img", {
                    y: 0,
                }, {y: -60}, 'start')
        })
    },
    "(min-width: 1400px)": function() {
    },
    "(min-width: 576px)": function() {
    },
    "(max-width: 992px)": function() {
    },
    "(max-width: 576px)": function() {
    },
})