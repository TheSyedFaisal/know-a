"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Portfolio = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const portfolioItemsPart1 = [
    { image: "/portfolio-Image3.png", link: "https://www.dvcanada.com/" },
    { image: "/portfolio-Image12.png", link: "https://avanti-wines.co.uk/" },
    { image: "/portfolio-Image4.png", link: "#" },
    { image: "/portfolio-Image5.png", link: "https://jenerg.com/" },
    { image: "/portfolio-Image6.png", link: "https://starfiresnowboards.com.au/" },
    { image: "/portfolio-Image8.png", link: "https://theyogadepartment.com" },
  ];

  const portfolioItemsPart2 = [
    { image: "/portfolio-Image13.png", link: "https://wortax.io/" },
    { image: "/portfolio-Image10.png", link: "#" },
    { image: "/portfolio-Image11.png", link: "https://www.dvcanada.com/" },
    { image: "/portfolio-Image14.png", link: "https://schoolonscreen.co.uk/" },
    { image: "/portfolio-Image15.png", link: "https://avanti-assets.co.uk/" },
    { image: "/portfolio-Image16.jpeg", link: "https://stixor.com/" },
  ];

  useEffect(() => {
    const row1 = row1Ref.current!;
    const row2 = row2Ref.current!;

    // Wait until all images are fully loaded
    const waitForImages = () => {
      const imgs = document.querySelectorAll("img");
      return Promise.all(
        Array.from(imgs).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => (img.onload = resolve));
        })
      );
    };

    waitForImages().then(() => {
      startAnimation(row1, row2);
    });

    const startAnimation = (r1: HTMLDivElement, r2: HTMLDivElement) => {
      const clone1 = r1.cloneNode(true) as HTMLDivElement;
      const clone2 = r2.cloneNode(true) as HTMLDivElement;

      clone1.style.visibility = "hidden";
      clone2.style.visibility = "hidden";

      r1.parentNode?.appendChild(clone1);
      r2.parentNode?.appendChild(clone2);

      const width1 = r1.scrollWidth;
      const width2 = r2.scrollWidth;

      // Make clone visible after layout settles
      gsap.set([clone1, clone2], { visibility: "visible" });

      // Row 1 Animation
      gsap.to([r1, clone1], {
        x: `-=${width1}`,
        duration: 20,
        repeat: -1,
        ease: "none",
        force3D: true,
        modifiers: {
          x: (x) => `${parseFloat(x) % width1}px`,
        },
      });

      // Row 2 Reverse Animation
      gsap.to([r2, clone2], {
        x: `+=${width2}`,
        duration: 20,
        repeat: -1,
        ease: "none",
        force3D: true,
        modifiers: {
          x: (x) => `${parseFloat(x) % -width2}px`,
        },
      });

      gsap.set([r1, clone1], { x: 0 });
      gsap.set([r2, clone2], { x: -width2 });
    };
  }, []);

  return (
    <div className="bg-black text-white py-20 px-6 overflow-hidden">
      <h2 className="text-center text-5xl font-bold mb-10">
        Our Latest Web Creations
      </h2>

      {/* Row 1 */}
      <div className="overflow-hidden w-full whitespace-nowrap">
        <div
          ref={row1Ref}
          className="inline-flex gap-4 mx-2"
          style={{ willChange: "transform" }}
        >
          {portfolioItemsPart1.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <div className="w-[200px] sm:w-[300px] md:w-[340px]  
                h-[200px] sm:h-[300px] md:h-[340px] bg-white rounded-xl p-1.5 md:p-3 flex-shrink-0">
                <Image
                  src={item.image}
                  alt="Portfolio Item"
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden w-full mt-5 md:mt-10 whitespace-nowrap">
        <div
          ref={row2Ref}
          className="inline-flex gap-4 mx-2"
          style={{ willChange: "transform" }}
        >
          {portfolioItemsPart2.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <div className="w-[200px] sm:w-[300px] md:w-[340px]  
                h-[200px] sm:h-[300px] md:h-[340px] bg-white rounded-xl p-1.5 md:p-3 flex-shrink-0">
                <Image
                  src={item.image}
                  alt="Portfolio Item"
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
