import { MovieCard } from "@/components";
import { movies } from "@/resources/variables";

const Gallery = () => {
    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
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
        </div>
    )
}

export default Gallery;