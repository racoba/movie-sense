"use client"

import { useEffect, useRef, useState } from "react";
import { ThemeCard } from "./ThemeCard";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

interface IProps {
    themes: string[];
}

export const ThemeMenu = ({ themes }: IProps) => {
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
            const container = scrollRef.current;
            const scrollLeft = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
            container.scrollBy({ left: scrollLeft, behavior: "smooth" });
        }
    };

    useEffect(() => {
        updateScrollButtons();
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => updateScrollButtons();
        el.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateScrollButtons);

        return () => {
            el.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateScrollButtons);
        };
    }, []);

    return (
        <div className="relative w-full group">
            {canScrollLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="hidden group-hover:flex absolute left-0 top-0 bottom-0 z-10 items-center px-2 bg-gradient-to-r from-black/60 to-transparent text-white cursor-pointer group/button"
                >
                    <div className="w-8 h-8 transition-transform duration-200 transform group-hover/button:scale-140">
                        <ChevronLeft style={{ width: "100%", height: "100%" }} />
                    </div>
                </button>
            )}

            <div
                ref={scrollRef}
                className="flex flex-row gap-6 overflow-x-auto scroll-smooth scroll-hidden"
            >
                {themes.map((theme, index) => (
                    <ThemeCard key={index} theme={theme} />
                ))}
            </div>

            {canScrollRight && (
                <button
                    onClick={() => scroll("right")}
                    className="hidden group-hover:flex absolute right-0 top-0 bottom-0 z-10 items-center px-2 bg-gradient-to-l from-black/60 to-transparent text-white cursor-pointer group/button"
                >
                    <div className="w-8 h-8 transition-transform duration-200 transform group-hover/button:scale-140">
                        <ChevronRight style={{ width: "100%", height: "100%" }} />
                    </div>
                </button>
            )}
        </div>
    );
};
