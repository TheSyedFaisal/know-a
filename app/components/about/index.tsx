"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

// Declare global GSAP types
declare global {
  interface Window {
    gsap: {
      registerPlugin: (plugin: unknown) => void;
      context: (
        func: () => void,
        scope?: HTMLElement | null
      ) => { revert: () => void };
      to: (
        targets: Element[] | NodeListOf<Element>,
        vars: Record<string, unknown>
      ) => void;
    };
    ScrollTrigger: unknown;
  }
}

export default function AIAssistant() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const loadGSAP = () => {
      if (!window.gsap) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
        script.onload = () => {
          const scrollTriggerScript = document.createElement("script");
          scrollTriggerScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
          scrollTriggerScript.onload = () => {
            window.gsap.registerPlugin(window.ScrollTrigger);
            initAnimation();
          };
          document.head.appendChild(scrollTriggerScript);
        };
        document.head.appendChild(script);
      } else {
        initAnimation();
      }
    };

    const initAnimation = () => {
      if (!textRef.current || !window.gsap) return;

      const ctx = window.gsap.context(() => {
        const content = textRef.current?.textContent || "";
        const words = content.split(" ");

        if (textRef.current) {
          textRef.current.textContent = "";

          words.forEach((word, index) => {
            const span = document.createElement("span");
            span.className = "word";
            span.style.color = "#5b5a5aec";
            span.style.display = "inline-block";
            span.textContent = word;

            textRef.current?.appendChild(span);

            if (index < words.length - 1) {
              textRef.current?.appendChild(document.createTextNode(" "));
            }
          });

          const wordSpans = textRef.current.querySelectorAll(".word");

          window.gsap.to(wordSpans, {
            color: "white",
            stagger: 0.05,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          });
        }
      }, textRef.current);

      return () => ctx.revert();
    };

    loadGSAP();
  }, []);

  return (
    <main className="bg-black h-fit relative flex flex-col items-center py-10 md:py-20 lg:py-32 space-y-12">
      {/* Tag */}
      <div
        className="
          h-[36px] sm:h-[40px] 
          flex items-center justify-between 
          px-2 sm:px-3 md:px-4 
          rounded-[32px] border border-[#FFFFFF1A] 
          bg-gradient-to-r from-white/10 to-transparent 
          shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
          gap-2 sm:gap-3"
      >
        <Image
          src="/about.svg"
          alt="Our Desk"
          height={32}
          width={32}
          className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] 
            rounded-[20px] border border-white/10 
            p-[1px] sm:p-[2px] object-contain"
        />

        <span
          className="font-dmSans whitespace-nowrap 
            font-normal text-[13px] sm:text-[15px] md:text-[16px] 
            leading-[100%] text-center text-white"
        >
          About Us
        </span>
      </div>

      {/* Animated Heading */}
      <div className="w-full max-w-[1280px] px-4">
        <p
          ref={textRef}
          className="heading-md my-0 md:my-5  text-center 
            text-[18px] sm:text-[32px] md:text-[48px] lg:text-[60px] 
            leading-tight mx-auto"
        >
          We provide services to organizations which helps uncover high-impact
          AI opportunities, develop tailored automation systems, and deploy them
          for maximum business benefit
        </p>
      </div>

      {/* Button */}
      <Link href="/book-meetings">
        <button
          className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2]
          sm:mt-8 cursor-pointer
          h-[48px] sm:h-[56px] lg:h-[64px]
          w-[150px] sm:w-[200px] lg:w-[240px]
          text-white font-bold rounded-[10px] border-2 border-[#8D6AE6]
          text-[12px]  lg:text-[20px]
          transition-all duration-300 ease-in-out
          hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
        >
          Book an Appointment
        </button>
      </Link>
    </main>
  );
}
