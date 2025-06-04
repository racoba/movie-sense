"use client";

import { Suspense, useEffect, useState } from "react";
import { MovieCard } from "@/components";
import { useSearchParams } from "next/navigation";
import MovieService, { Movie } from "@/services/MovieService";
import { extractName, extractYear } from "@/resources/utils";

const GalleryContent = () => {
    const searchParams = useSearchParams();
    const movieFilter = searchParams.get("filter");
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            if(movieFilter){
                const filteredMovies = await MovieService.getMoviesByGenre(movieFilter);
                setMovies(filteredMovies);
                return;
            }else{
                const allMovies = await MovieService.getAllMovies();
                setMovies(allMovies);
                return;
            }
        };
        fetchMovies();
    }, [])

    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        name={extractName(movie.title)}
                        rate={movie.rate}
                        year={extractYear(movie.title)}
                        src={movie.image}
                        theme={movie.theme}
                    />
                ))}
            </div>
        </div>
    );
};

const GalleryPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GalleryContent />
        </Suspense>
    );
};

export default GalleryPage;
