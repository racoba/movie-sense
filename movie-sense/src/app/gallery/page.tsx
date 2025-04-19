"use client"

import { MovieCard } from "@/components";
import { movies } from "@/resources/variables";
import { useSearchParams } from "next/navigation";

const Gallery = () => {
    const searchParams = useSearchParams();
    const movieFilter = searchParams.get("filter")

    const getFilteredMovies = () => {
        const filteredMovies = movies.filter((movie) => movie.theme == movieFilter);

        if (filteredMovies.length > 0) return filteredMovies
        if (movieFilter) alert(`No ${movieFilter} movies`)
        return movies
    }

    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
                {getFilteredMovies().map((movie, index) => {
                    return (
                        <MovieCard
                            key={index}
                            name={movie.title}
                            rate={movie.rate}
                            year={movie.year}
                            src={movie.src}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;