import { MovieCard } from "../MovieCard"

interface IProps {
    movies: {
        title: string;
        rate: number;
        year: number;
    }[]
}

export const Recommendations = ({ movies }: IProps) => {
    return (

        <div className="flex flex-col gap-2">
            <span className="text-2xl">Para Você</span>
            <div className="flex flex-row gap-6 overflow-x-auto scroll-hidden">
                {movies.map((movie, index) => {
                    return (
                        <MovieCard
                            key={index}
                            name={movie.title}
                            rate={movie.rate}
                            year={movie.year}
                        />
                    )
                })}
            </div>
        </div>
    )
}