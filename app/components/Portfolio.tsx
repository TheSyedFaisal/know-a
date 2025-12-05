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

    // Wait for all images to load
    const waitForImages = () =>
      Promise.all(
        [...document.querySelectorAll("img")].map(
          (img) =>
            img.complete ||
            new Promise((resolve) => {
              img.onload = resolve;
            })
        )
      );

    waitForImages().then(() => {
      const itemsWidth1 = row1.scrollWidth;
      const itemsWidth2 = row2.scrollWidth;

      gsap.set([row1, row2], { x: 0 });

      // SUPER STABLE WRAP METHOD (NO CLONES NEEDED)
      gsap.to(row1, {
        x: -itemsWidth1,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.wrap(-itemsWidth1, 0),
        },
      });

      gsap.to(row2, {
        x: itemsWidth2,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.wrap(0, itemsWidth2),
        },
      });
    });
  }, []);

  return (
    <div className="bg-black text-white py-20 px-6 overflow-hidden">
      <h2 className="text-center text-5xl font-bold mb-10">
        Our Latest Web Creations
      </h2>

      {/* Row 1 */}
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div
          ref={row1Ref}
          className="inline-flex gap-4 mx-2"
          style={{ willChange: "transform" }}
        >
          {[...portfolioItemsPart1, ...portfolioItemsPart1].map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <div className="w-[200px] sm:w-[300px] md:w-[340px] 
                h-[200px] sm:h-[300px] md:h-[340px] bg-white rounded-xl p-1.5 md:p-3 flex-shrink-0">
                <Image
                  src={item.image}
                  alt="Portfolio item"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden whitespace-nowrap w-full mt-5 md:mt-10">
        <div
          ref={row2Ref}
          className="inline-flex gap-4 mx-2"
          style={{ willChange: "transform" }}
        >
          {[...portfolioItemsPart2, ...portfolioItemsPart2].map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <div className="w-[200px] sm:w-[300px] md:w-[340px] 
                h-[200px] sm:h-[300px] md:h-[340px] bg-white rounded-xl p-1.5 md:p-3 flex-shrink-0">
                <Image
                  src={item.image}
                  alt="Portfolio item"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-xl"
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
