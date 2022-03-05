import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isTouchscreen } from ".";
import Parallax from "../lib/parallax";

/**
 * Start animation in section 1
 * @param callback A callback function when animation is complete
 */
export function startAnimS1(callback: Function | null) {
    setTimeout(() => {
        if (!isTouchscreen()) {
            new Parallax(document.getElementById("social-container"), { scalarX: 100, scalarY: 10 });
            new Parallax(document.getElementById("name-container"));
        }
    
        const tl = gsap.timeline();
    
        gsap.set(".mouse", {
            opacity: 0
        });
        
        tl.from(".app-bar-title", {
            duration: 0.75,
            x: -100,
            opacity: 0,
            ease: "power3.out"
        });
    
        tl.from(".name", {
            duration: 1,
            x: -300,
            autoAlpha: 0,
            ease: "power3.out",
            onComplete() {
                if (typeof callback === "function") {
                    document.documentElement.style.overflowY = "scroll";

                    gsap.to(".mouse", {
                        duration: 2,
                        opacity: 1
                    });

                    callback();
                }
                
                tl.kill();
            }
        });
    
        tl.fromTo(".name", { opacity: 1 }, {
            duration: 1,
            scale: 0.25,
            opacity: 0,
            scrollTrigger: {
                trigger: ".name",
                scrub: true,
                start: "bottom center",
                end: "bottom top"
            }
        });
    
        const tl2 = gsap.timeline();
    
        tl2.from(".social-container", {
            duration: 1,
            xPercent: -200,
            scale: 0,
            stagger: 0.5,
            alpha: 0
        });
    
        tl2.fromTo(".social-container", { opacity: 1 }, {
            duration: 1,
            xPercent: -100,
            stagger: 0.5,
            opacity: 0,
            rotate: 360,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".social-container",
                scrub: true,
                start: "top 60%",
                end: "bottom 10%"
            }
        });
    
        gsap.to(".main-title", {
            duration: 2,
            scale: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: ".main-title",
                scrub: true,
                start: "bottom center",
                end: "bottom top"
            }
        });
    
        // ----------- TOPBAR ----------- // 
    
        const topBarAnim = gsap.from(".top-bar", {
            yPercent: -100,
            duration: 0.2,
            paused: true,
            ease: "power3.out"
        }).progress(1);
        
        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
              self.direction == -1 ? topBarAnim.play() : topBarAnim.reverse()
            }
        });
    }, 0);
}