"use client";

import { Suspense, useEffect, useState } from "react";
import { MovieCard } from "@/components";
import MovieService, { Movie } from "@/services/MovieService";
import { extractName, extractYear } from "@/resources/utils";

const History = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchCachedMovies = async () => {
      const currentUser = localStorage.getItem("currentUser");
      const cacheString = localStorage.getItem("movieCache");

      if (!currentUser || !cacheString) {
        setMovies([]);
        return;
      }

      const cache = JSON.parse(cacheString);
      const watchedTitles: string[] = cache[currentUser] || [];

      // Pega todos os filmes do backend
      const allMovies = await MovieService.getAllMovies();

      // Filtra apenas os que estão no cache do usuário
      const cachedMovies = allMovies.filter((movie) =>
        watchedTitles.includes(movie.title)
      );

      setMovies(cachedMovies);
    };

    fetchCachedMovies();
  }, []);

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

const HistoryPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <History />
    </Suspense>
  );
};

export default HistoryPage;
