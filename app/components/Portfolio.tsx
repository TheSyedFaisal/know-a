import React from "react";
import Image from "next/image";

const portfolioItems = [
    "/portfolio-Image.png",
    "/portfolio-Image3.png",
    "/portfolio-Image4.png",
    "/portfolio-Image5.png",
    "/portfolio-Image6.png",
    "/portfolio-Image67.png",
    "/portfolio-Image8.png",
    "/portfolio-Image9.png",
    "/portfolio-Image10.png",
    "/portfolio-Image11.png",
];

const Portfolio = () => {
    return (
        <div className="bg-black bg-[url('/pages-bg.png')] bg-[length:100%_100%] bg-no-repeat">
            <div className=" text-white py-20 px-6 overflow-hidden main-container">
                <div className="text-center max-w-3xl mx-auto mb-16 relative ">
                    <div className=" w-fit h-[36px] sm:h-[40px] flex items-center justify-between 
                                px-[8px] sm:px-[10px] rounded-[32px] border border-[#FFFFFF1A] 
                                  bg-gradient-to-r from-white/10 to-transparent 
                                  shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
                                  opacity-100 gap-[8px] sm:gap-[10px] mx-auto mb-10"
                    >
                        <Image
                            src="/our-desk.png"
                            alt="Our Desk"
                            width={32}
                            height={32}
                            className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] 
                                  rounded-[20px] border border-white/10 
                                  p-[1px] sm:p-[2px] object-contain"
                        />
                        <span
                            className="font-dmSans whitespace-nowrap 
                                  font-normal text-[14px] sm:text-[16px] 
                                  leading-[100%] text-center text-white"
                        >
                            Projects
                        </span>
                    </div>

                    <h2 className="text-5xl font-bold">
                        Our Featured Projects
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Explore our successful projects, delivering innovative solutions that drive growth and exceed client expectations
                    </p>
                </div>

                {/* -------- ROW 1 (Right Direction) -------- */}
                    <div className="slider slider-right flex gap-3 mb-10 px-4">
                    {[...portfolioItems, ...portfolioItems,].map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[200px] sm:min-w-[300px] md:min-w-[350px]
            min-h-[200px] rounded-xl overflow-hidden shadow-lg bg-white p-3"
                        >
                            <Image
                                className="object-cover rounded-xl h-full w-full"
                                src={item}
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                        </div>
                    ))}
                </div>

                {/* -------- ROW 2 (Left Direction + REVERSE IMAGES) -------- */}
                <div className="slider slider-left flex gap-3 px-4">
                    {[...portfolioItems, ...portfolioItems].map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[200px] sm:min-w-[300px] md:min-w-[350px]
            min-h-[200px] rounded-xl overflow-hidden shadow-lg bg-white p-3"
                        >
                            <Image
                                className="object-cover rounded-xl h-full w-full scale-x-[-1]"
                                src={item}
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                        </div>
                    ))}
                </div>

        </div>
        </div>
    );
};

export default Portfolio;
