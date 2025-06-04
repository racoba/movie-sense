"use client"
import { useEffect, useState } from "react";
import { MovieBanner, RecommendationsMenu, ThemeMenu } from "@/components";
import { movieTypes } from "@/resources/variables";
import MovieService, { Movie } from "@/services/MovieService";

const Main = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const currentUser = localStorage.getItem("currentUser");
            const movieCache = JSON.parse(localStorage.getItem("movieCache") || "{}");
            const watchedMovies = currentUser && movieCache[currentUser] ? movieCache[currentUser] : [];

            const recommended = await MovieService.getRecommendations(watchedMovies);
            setMovies(recommended);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <MovieBanner />
            <ThemeMenu themes={movieTypes} />
            <RecommendationsMenu movies={movies} />
        </div>
    );
};

export default Main;
