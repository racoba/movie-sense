"use client"

import { useEffect, useRef, useState } from "react";
import { MovieCard } from "../MovieCard";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

interface IProps {
  movies: {
    title: string;
    rate: number;
    year: number;
    src: string;
    theme: string;
  }[];
}

export const RecommendationsMenu = ({ movies }: IProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const CARD_WIDTH = 160; 
  const GAP = 24;
  const SCROLL_AMOUNT = (CARD_WIDTH + GAP) * 3;

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollLeft = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
      scrollRef.current.scrollBy({ left: scrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 relative group">
      <span className="text-2xl">Para Você</span>

      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden group-hover:flex absolute left-0 top-7 bottom-0 z-10 items-center px-2 bg-gradient-to-r from-black/80 to-transparent text-white cursor-pointer group/seta"
        >
          <div className="w-8 h-8 transition-transform duration-200 transform group-hover/seta:scale-180">
            <ChevronLeft className="w-full h-full" />
          </div>
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex flex-row gap-6 overflow-x-auto scroll-smooth scroll-hidden"
      >
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.title}
            rate={movie.rate}
            year={movie.year}
            src={movie.src}
          />
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden group-hover:flex absolute right-0 top-7 bottom-0 z-10 items-center px-2 bg-gradient-to-l from-black/80 to-transparent text-white cursor-pointer group/seta"
        >
          <div className="w-8 h-8 transition-transform duration-200 transform group-hover/seta:scale-180">
            <ChevronRight className="w-full h-full" />
          </div>
        </button>
      )}
    </div>
  );
};
