"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar";
import Robot from "../Robot";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const strategicBadgeRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          headingRef.current,
          subtextRef.current,
          leftButtonRef.current,
          rightButtonRef.current,
          bannerRef.current,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(headingRef.current, { y: -50 });
      gsap.set(subtextRef.current, { y: 50 });
      gsap.set(leftButtonRef.current, { x: -100 });
      gsap.set(rightButtonRef.current, { x: 100 });
      gsap.set(bannerRef.current, { y: 100 });

      const animationDelay = 0.5;

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: animationDelay,
      });

      gsap.to(subtextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: animationDelay,
      });

      gsap.to(leftButtonRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: animationDelay,
      });

      gsap.to(rightButtonRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: animationDelay,
      });

      gsap.to(bannerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: animationDelay,
        onComplete: () => {
          if (sliderRef.current) {
            gsap.to(sliderRef.current, {
              x: "-100%",
              duration: 15,
              ease: "none",
              repeat: -1,
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative  bg-black text-white overflow-hidden px-4 sm:px-6 lg:px-12 pt-30"
    >
      <Navbar />

      <div className="absolute top-20 left-0 w-full h-full bg-gradient-to-b from-[#250278] to-[#021964] z-0"></div>

      <video
        src="https://framerusercontent.com/assets/1g8IkhtJmlWcC4zEYWKUmeGWzI.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute top-20 left-0 w-full h-full object-cover opacity-100 z-90 mix-blend-overlay"
      />

      {/* Strategic Badge */}
      <div
        ref={strategicBadgeRef}
        className=" absolute w-max top-36 md:top-48 left-1/2 transform -translate-x-1/2 z-100 bg-gradient-to-r from-white/20 to-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 text-xs sm:text-sm md:text-base"
      >
        <span className="flex items-center gap-2 ">
          <Image
            src="/about.svg"
            alt="Our Desk"
            height={28}
            width={28}
            priority
            className="object-contain"
          />
          Your strategic partner from start to scale
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-100 flex flex-col pt-[50px] md:pt-[100px] items-center justify-center md:min-h-screen  ">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-center font-bold leading-tight mb-4 text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[64px] max-w-6xl"
        >
          Building and scaling AI <br /> solutions is a journey
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="text-center text-gray-300 mb-8 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur. Quam viverra sed urna cursus
          hendrerit nibh ipsum. Volutpat nunc malesuada placerat varius nam sed
          morbi.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link href="/book-meetings">
            <button
              ref={leftButtonRef}
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-[16px] font-medium text-base sm:text-lg hover:bg-gray-200 transition-all duration-300 min-w-[180px]"
            >
              Contact With Us
            </button>
          </Link>
          <button
            ref={rightButtonRef}
            className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[16px] font-medium text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 min-w-[180px]"
          >
            What is Know AI?
          </button>
        </div>

        {/* Brand Slider */}
        <Robot />

      </div>
    </div>
  );
};

export default HeroSection;
