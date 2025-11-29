import React from 'react'

const Section2 = () => {
    return (
        <div className='px-10 pb-4 md::px-0'>
            <div
            className="relative p-2 w-full max-w-[1100px] h-70 md:h-full mx-auto rounded-3xl bg-black shadow-[0_0_60px_rgba(120,0,255,0.5)] overflow-hidden"
            style={{ transform: "perspective(700px) rotateX(12deg)" }}
        >
            <video
                src="https://framerusercontent.com/assets/8qsenQIIXYW3mI4IYIYBv9PMtkU.mp4"
                typeof='video/mp4'
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full md:h-auto rounded-3xl border border-gray-900"
            />
        </div>
        </div>

    )
}

export default Section2