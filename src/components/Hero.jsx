import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarVisual from "./CarVisual";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  ["58%", "INCREASE IN PICK-UP POINT USE"],
  ["27%", "INCREASE IN PICK-UP POINT USE"],
  ["23%", "DECREASE IN CUSTOMER CALLS"],
  ["40%", "DECREASE IN CUSTOMER CALLS"]
];

export default function Hero() {
  const section = useRef(null);
  const car = useRef(null);
  const headline = useRef(null);
  const statsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const chars = headline.current.querySelectorAll(".hero-char");

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro
        .fromTo(
          ".top-line",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.9 }
        )
        .fromTo(
          chars,
          { yPercent: 115, opacity: 0, rotateX: -75 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.035
          },
          "-=.35"
        )
        .fromTo(
          ".hero-copy",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          "-=.45"
        )
        .fromTo(
          statsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.12 },
          "-=.25"
        )
        .fromTo(
          car.current,
          { xPercent: 75, scale: 0.72, opacity: 0 },
          { xPercent: 0, scale: 1, opacity: 1, duration: 1.1, ease: "expo.out" },
          "-=1"
        );

      // Core requirement: the visual is controlled by scroll progress.
      // Numeric scrub adds interpolation so it catches up smoothly.
      gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      })
        .to(car.current, {
          x: "-72vw",
          y: 70,
          rotate: -7,
          scale: 0.72,
          force3D: true,
          ease: "none"
        }, 0)
        .to(".hero-title-block", {
          y: -85,
          opacity: 0.72,
          ease: "none"
        }, 0)
        .to(".hero-orbit", {
          rotate: 115,
          scale: 1.18,
          ease: "none"
        }, 0)
        .to(".hero-grid", {
          yPercent: 15,
          ease: "none"
        }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="top"
      className="relative min-h-[190vh] overflow-hidden bg-zinc-950"
    >
      <div className="hero-grid pointer-events-none absolute -inset-[15%] opacity-20 [transform:perspective(900px)_rotateX(63deg)_translateY(25%)] [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]" />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_74%_38%,rgba(215,255,67,.10),transparent_24%),radial-gradient(circle_at_15%_78%,rgba(120,90,255,.10),transparent_25%)]" />

      <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-[6vw] py-7 font-mono text-[10px] tracking-[.16em]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#d7ff43] shadow-[0_0_18px_rgba(215,255,67,.8)]" />
          ITZFIZZ<span className="text-[7px] text-zinc-500">®</span>
        </div>
        <div className="flex items-center gap-8 text-zinc-500">
          <span className="hidden md:inline">WEB DEVELOPMENT</span>
          <span className="text-stone-100">MENU <i className="ml-2 inline-block h-px w-5 bg-current align-middle" /></span>
        </div>
      </nav>

      <div className="sticky top-0 flex h-screen min-h-[680px] items-center px-[6vw] pb-28 pt-24">
        <div className="hero-title-block relative z-10 w-full md:w-[68%]">
          <p className="top-line mb-6 h-px w-20 bg-[#d7ff43]" />
          <p className="mb-6 font-mono text-[10px] tracking-[.22em] text-zinc-500">
            DIGITAL EXPERIENCES / 2026
          </p>

          <h1
            ref={headline}
            className="max-w-[1000px] text-[clamp(3.3rem,10vw,10rem)] font-extrabold uppercase leading-[.82] tracking-[-.065em] [perspective:800px]"
          >
            {"WELCOME ITZFIZZ".split("").map((char, index) => (
              <span key={index} className="inline-block overflow-hidden align-bottom">
                <span className="hero-char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero-copy mt-9 max-w-[430px] opacity-0">
            <p className="text-sm leading-7 text-zinc-500">
              We turn ambitious ideas into fast, expressive and conversion-ready
              digital experiences.
            </p>
            <div className="mt-7 font-mono text-[9px] tracking-[.18em] text-zinc-300">
              <span className="mr-2 text-[#d7ff43]">↓</span> SCROLL TO EXPLORE
            </div>
          </div>
        </div>

        <div className="hero-orbit pointer-events-none absolute right-[-10vw] top-1/2 z-[5] w-[72vw] max-w-[850px] -translate-y-1/2 opacity-95 md:right-[-4vw] md:w-[62vw]">
          <div className="absolute inset-[12%] rounded-full border border-[#d7ff43]/25 [transform:rotate(25deg)_scaleX(.55)]" />
          <div className="absolute inset-[8%] rounded-full border border-white/10 [transform:rotate(-38deg)_scaleY(.55)]" />
          <div className="absolute inset-[20%] rounded-full bg-[#d7ff43]/10 blur-3xl" />
          <div ref={car} className="relative will-change-transform">
            <CarVisual />
          </div>
          <span className="absolute right-[8%] top-[14%] font-mono text-[9px] tracking-[.18em] text-[#d7ff43]">
            CREATE
          </span>
          <span className="absolute bottom-[15%] left-[5%] font-mono text-[9px] tracking-[.18em] text-zinc-600">
            MOVE / 01
          </span>
        </div>
      </div>

      <div className="absolute bottom-14 left-[6vw] right-[6vw] z-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-5 md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div
            key={label + index}
            ref={(el) => (statsRef.current[index] = el)}
            className="opacity-0"
          >
            <strong className="block text-3xl font-semibold tracking-[-.05em] md:text-5xl">
              {value}
            </strong>
            <span className="mt-2 block max-w-[170px] font-mono text-[8px] leading-4 tracking-[.14em] text-zinc-600">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-14 right-[2.5vw] z-10 hidden h-28 w-px bg-white/10 md:block">
        <span className="block h-9 w-px bg-[#d7ff43]" />
      </div>
    </section>
  );
}