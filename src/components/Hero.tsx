"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

const images: HeroImage[] = [
  {
    src: "/main-campus.jpg",
    alt: "Mountain landscape beside a flowing river",
  },
  {
    src: "/NAIT_MainCampus_2000x745.jpg",
    alt: "Mountain valley with hikers",
  },
  {
    src: "/cat-exterior.jpg",
    alt: "Vintage car beside a mountain road",
  },
  {
    src: "/1586L_0732_050714.jpg",
    alt: "Snow-covered mountain landscape",
  },
//   {
//     src: "/main-campus.jpg",
//     alt: "Green forest valley",
//   },
//   {
//     src: "/main-campus.jpg",
//     alt: "Rocky mountain landscape",
//   },
//   {
//     src: "/main-campus.jpg",
//     alt: "Mountain lake surrounded by trees",
//   },
//   {
//     src: "/main-campus.jpg",
//     alt: "Hiking trail through the mountains",
//   },
//   {
//     src: "/main-campus.jpg",
//     alt: "Wide scenic valley view",
//   },
//   {
//     src: "/main-campus.jpg",
//     alt: "Sunlight over a mountain range",
//   },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const previous = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, previous]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    const distance = event.clientX - startX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        previous();
      } else {
        next();
      }
    }

    startX.current = null;
  };

  const handleArrowClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    action: () => void
  ) => {
    event.preventDefault();
    event.stopPropagation();
    action();
  };

  return (
    <section className="w-full overflow-hidden px-0 py-16 sm:px-6 md:py-24 bg-[#d0d7e1] ">
      <div className="mx-auto max-w-[50rem] ">
        <div
          className="relative h-[15rem] sm:h-[15rem] md:h-[30rem] lg:h-[36rem]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          {images.map((image, index) => {
            const previousIndex =
                (activeIndex - 1 + images.length) % images.length;

            const nextIndex = (activeIndex + 1) % images.length;

            const isActive = index === activeIndex;
            const isPrevious = index === previousIndex;
            const isNext = index === nextIndex;

            const isVisible = isActive || isPrevious || isNext;

            if (!isVisible) return null;

            return (
                <div
                key={image.src}
                className={`absolute left-1/2 top-1/2 aspect-[4/3] w-[20rem] -translate-y-1/2 overflow-hidden rounded-2xl transition-all duration-300 ease-out sm:w-[20rem] md:w-[40rem] lg:w-[48rem] ${
                    isActive
                    ? "z-10 -translate-x-1/2 scale-100 opacity-100"
                    : isPrevious
                        ? "z-0 -translate-x-[calc(100%+1.5rem)] scale-[0.7] opacity-40"
                        : "z-0 translate-x-[1.5rem] scale-[0.7] opacity-40"
                }`}
                >
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={isActive}
                    draggable={false}
                    className="select-none object-cover"
                    sizes="(max-width: 640px) 15rem, (max-width: 1024px) 20rem, 50rem"
                />
                </div>
            );
            })}

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => handleArrowClick(event, previous)}
            className="absolute left-1/2 top-1/2 z-30 hidden h-14 w-14 -translate-x-[calc(50%+31rem)] -translate-y-1/2 items-center justify-center rounded-full bg-black text-4xl leading-none text-white transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:flex"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => handleArrowClick(event, next)}
            className="absolute left-1/2 top-1/2 z-30 hidden h-14 w-14 translate-x-[calc(50%+31rem)] -translate-y-1/2 items-center justify-center rounded-full bg-black text-4xl leading-none text-white transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:flex"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-4 w-4 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
                  isActive
                    ? "scale-110 bg-black opacity-100"
                    : "bg-black opacity-10 hover:opacity-30"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
