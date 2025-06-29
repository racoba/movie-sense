const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export interface Movie {
  title: string;
  rate: number;
  theme: string;
  image: string;
}

const MovieService = {
  async getRecommendations(watchedMovies: string[] = []): Promise<Movie[]> {
    const response = await fetch(`${BASE_URL}/recommendations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ watched_movies: watchedMovies }),
    });

    if (!response.ok) throw new Error("Erro ao buscar recomendações");
    const data = await response.json();
    return data;
  },

  async getAllMovies(): Promise<Movie[]> {
    const response = await fetch(`${BASE_URL}/get-all-movies`);
    if (!response.ok) throw new Error("Erro ao buscar todos os filmes");

    const data = await response.json();
    return data;
  },

  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    const response = await fetch(`${BASE_URL}/get-all-movies-by-genre?genre=${encodeURIComponent(genre)}`);
    if (!response.ok) throw new Error(`Erro ao buscar filmes do gênero: ${genre}`);
    const data = await response.json();
    return data;
  },
};

export default MovieService;
