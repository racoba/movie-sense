import { MovieBanner, MovieCard, Recommendations, ThemeMenu } from "@/components";

const Main = () => {
    const themes = ["Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação", "Ação"]
    const movies = [{ title: "FILMAO", rate: 10, year: 2025 },{ title: "FILMAO", rate: 10, year: 2025 },{ title: "FILMAO", rate: 10, year: 2025 },{ title: "FILMAO", rate: 10, year: 2025 },{ title: "FILMAO", rate: 10, year: 2025 },{ title: "FILMAO", rate: 10, year: 2025 },{ title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 }, { title: "FILMAO", rate: 10, year: 2025 },]
    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <div className="flex flex-row justify-between">
                <MovieBanner className="bg-red-600 w-full lg:w-[48%] h-40 lg:h-80 rounded-lg" />
                <MovieBanner className="bg-red-600 lg:w-[48%] lg:h-80 rounded-lg hidden lg:block" />
            </div>
            <ThemeMenu themes={themes} />
            <Recommendations movies={movies}/>
        </div>
    );
};

export default Main;
