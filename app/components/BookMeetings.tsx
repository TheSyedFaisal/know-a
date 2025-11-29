"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { InlineWidget } from "react-calendly";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BookMeetings = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, widgetRef.current], {
        opacity: 0,
        y: 40,
      });

      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.to(widgetRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: widgetRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pt-20 pb-4   bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto h-screen flex flex-col">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-4 flex-shrink-0">
          <h2 className="text-[20px] sm:text-[28px] lg:text-[36px] font-medium leading-[110%] mb-2">
            Book a Meeting
          </h2>
          <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[140%] text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation to discuss your AI automation needs and how
            we can help you to transform your business.
          </p>
        </div>

        {/* Calendly Widget */}
        <div ref={widgetRef} className="flex-1 min-h-0 relative">
          <style jsx global>{`
            .calendly-inline-widget iframe {
              border: 3px solid transparent;
              border-radius: 12px;
            }
            .calendly-inline-widget {
              filter: drop-shadow(0 0 20px rgba(82, 30, 214, 0.3));
            }
          `}</style>
          <InlineWidget
            url="https://calendly.com/adilfazal03/30-minute-meeting"
            styles={{
              height: "100%",
              width: "100%",
              minHeight: "500px",
              background: "#000000",
            }}
            pageSettings={{
              backgroundColor: "000000",
              textColor: "ffffff",
              primaryColor: "7E56E2",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              hideGdprBanner: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookMeetings;
