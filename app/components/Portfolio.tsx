import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Portfolio = () => {
    const portfolioItems = [
        "/portfolio-Image3.png",
        "/portfolio-Image12.png",
        "/portfolio-Image4.png",
        "/portfolio-Image5.png",
        "/portfolio-Image6.png",
        "/portfolio-Image8.png",
        "/portfolio-Image13.png",
        "/portfolio-Image10.png",
        "/portfolio-Image11.png",
        "/portfolio-Image14.png",
        "/portfolio-Image15.png",
        "/portfolio-Image16.png",
    ];

    const portfolioItemsPart1 = [
  {
    image: "/portfolio-Image3.png",
    link: "https://www.dvcanada.com/"
  },
  {
    image: "/portfolio-Image12.png",
    link: "https://avanti-wines.co.uk/"
  },
  {
    image: "/portfolio-Image4.png",
    link: "https://dummy.link/site3"
  },
  {
    image: "/portfolio-Image5.png",
    link: "https://jenerg.com/"
  },
  {
    image: "/portfolio-Image6.png",
    link: "https://starfiresnowboards.com.au/"
  },
  {
    image: "/portfolio-Image8.png",
    link: "https://theyogadepartment.com"
  }
];

const portfolioItemsPart2 = [
  {
    image: "/portfolio-Image13.png",
    link: "https://wortax.io/"
  },
  {
    image: "/portfolio-Image10.png",
    link: "https://dummy.link/site8"
  },
  {
    image: "/portfolio-Image11.png",
    link: "https://www.dvcanada.com/"
  },
  {
    image: "/portfolio-Image14.png",
    link: "https://schoolonscreen.co.uk/"
  },
  {
    image: "/portfolio-Image15.png",
    link: "https://avanti-assets.co.uk/"
  },
  {
    image: "/portfolio-Image16.jpeg",
    link: "https://stixor.com/"
  }
];


    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const row1 = row1Ref.current!;
        const row2 = row2Ref.current!;

        // Clone nodes properly (better than innerHTML)
        const cloneRow1 = row1.cloneNode(true);
        const cloneRow2 = row2.cloneNode(true);
        row1.parentNode?.appendChild(cloneRow1);
        row2.parentNode?.appendChild(cloneRow2);

        const totalWidth1 = row1.scrollWidth;
        const totalWidth2 = row2.scrollWidth;

        // ROW 1 → Left to Right (Positive direction)
        gsap.to([row1, cloneRow1], {
            x: `-=${totalWidth1}`,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % totalWidth1)
            }
        });

        // ROW 2 → Right to Left (Negative direction)
        gsap.to([row2, cloneRow2], {
            x: `+=${totalWidth2}`,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth2)
            }
        });

        // Start from seamless position
        gsap.set([row1, cloneRow1], { x: 0 });
        gsap.set([row2, cloneRow2], { x: -totalWidth2 });

    }, []);

    return (
        <div className="bg-black text-white py-20 px-6 overflow-hidden">
            <h2 className="text-center text-5xl font-bold mb-10">
                Our Latest Web Creations
            </h2>

            {/* ROW 1 - Left to Right */}
            <div className="overflow-hidden w-full whitespace-nowrap">
                <div ref={row1Ref} className="inline-flex gap-4 mx-2">
                    {portfolioItemsPart1.map((item, i) => (
                        <Link href={item.link} key={i}>
                        <div
                            className="w-[200px] sm:w-[300px] md:w-[340px] 
                            h-[200px] sm:h-[300px] md:h-[340px]  bg-white rounded-xl p-1.5 md:p-3 flex-shrink-0"
                        >
                            <Image
                                src={item.image}
                                alt="Portfolio item"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* ROW 2 - Right to Left */}
            <div className="overflow-hidden w-full mt-5 md:mt-10 whitespace-nowrap ">
                <div ref={row2Ref} className="inline-flex gap-4 mx-2">
                    {portfolioItemsPart2.map((item, i) => (
                        <Link href={item.link} key={i}>
                        <div
                            className="w-[200px] sm:w-[300px] md:w-[340px] 
                            h-[200px] sm:h-[300px] md:h-[340px]  bg-white rounded-xl p-1.5 md:p-3 flex-shrink-0"
                        >
                            <Image
                                src={item.image}
                                alt="Portfolio item"
                                width={400}
                                height={400}
                                className="object-cover rounded-xl h-full w-full "
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