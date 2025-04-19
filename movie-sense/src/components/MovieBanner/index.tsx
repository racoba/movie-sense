'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { movies } from "@/resources/variables";

interface IProps {
  className?: string;
}

export const MovieBanner = ({ className }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % movies.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const movie1 = movies[currentIndex];
  const movie2 = movies[(currentIndex + 1) % movies.length];

  const BannerImage = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative group w-full h-40 lg:h-80 rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="100%"
      />
    </div>
  );

  return (
    <div className={`flex flex-row justify-between ${className}`}>
      <div className="w-full lg:w-[48%]">
        <BannerImage src={movie1.src} alt={movie1.title} />
      </div>

      <div className="hidden lg:block lg:w-[48%]">
        <BannerImage src={movie2.src} alt={movie2.title} />
      </div>
    </div>
  );
};
