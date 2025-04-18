import { MovieBanner, RecommendationsMenu, ThemeMenu } from "@/components";
import { movieTypes, movies } from "@/resources/variables"

const Main = () => {
    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <div className="flex flex-row justify-between">
                <MovieBanner className="bg-red-600 w-full lg:w-[48%] h-40 lg:h-80 rounded-lg" />
                <MovieBanner className="bg-red-600 lg:w-[48%] lg:h-80 rounded-lg hidden lg:block" />
            </div>
            <ThemeMenu themes={movieTypes} />
            <RecommendationsMenu movies={movies}/>
        </div>
    );
};

export default Main;
