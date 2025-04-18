import { MovieBanner, RecommendationsMenu, ThemeMenu } from "@/components";
import { movieTypes, movies } from "@/resources/variables"

const Main = () => {
    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <MovieBanner/>
            <ThemeMenu themes={movieTypes} />
            <RecommendationsMenu movies={movies} />
        </div>
    );
};

export default Main;
