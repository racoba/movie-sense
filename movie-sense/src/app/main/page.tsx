import { MovieBanner, MovieCard, ThemeMenu } from "@/components";

const Main = () => {
    const themes = ["Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação"]
    return (
        <div className="flex flex-col gap-4 lg:px-8">
            <div className="flex flex-row justify-between">
                <MovieBanner className="bg-red-600 w-full lg:w-[48%] h-40 lg:h-80 rounded-lg" />
                <MovieBanner className="bg-red-600 lg:w-[48%] lg:h-80 rounded-lg hidden lg:block" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                <MovieCard name="MAGICO DE OZ" rate={7} year={2002} />
            </div>
            <ThemeMenu themes={themes} />
        </div>
    );
};

export default Main;
