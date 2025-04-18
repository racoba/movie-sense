"use client"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { movies } from "@/resources/variables";
import { MovieCard } from "@/components/MovieCard";


export const NavMenu = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const router = useRouter();

    const onNavigateTo = (page: string) => {
        router.push("/" + page);
    }

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="flex flex-col w-1/3 items-center justify-center relative">
            <div className="relative flex items-center bg-gray-600 w-[60%] min-w-60 px-5 py-2 rounded-xl overflow-hidden h-12 z-20">

                {!showSearch && (
                    <div className="flex flex-row items-center justify-between w-[70%]">
                        <div onClick={() => onNavigateTo("gallery")} className="cursor-pointer transition-colors duration-300 px-2 py-2 rounded-xl hover:bg-gray-700">
                            <span>Movies</span>
                        </div>
                        <div onClick={() => onNavigateTo("gallery")} className="cursor-pointer transition-colors duration-300 px-2 py-2 rounded-xl hover:bg-gray-700">
                            <span>Series</span>
                        </div>
                    </div>
                )}

                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Buscar filme..."
                    className={`absolute right-0 top-0 h-full px-4 rounded-xl bg-gray-700 text-white z-10 text-base
            transition-all duration-300 ease-in-out
            ${showSearch ? 'w-full opacity-100' : 'w-0 opacity-0'} 
          `}
                    style={{ minWidth: showSearch ? '100%' : '0px' }}
                />

                <button
                    onClick={() => setShowSearch(prev => !prev)}
                    className="absolute right-4 z-20"
                >
                    <div className="cursor-pointer rounded-full transition-colors duration-300 bg-gray-500 hover:bg-gray-700 p-1">
                        <SearchIcon />
                    </div>
                </button>
            </div>

            {showSearch && searchValue.trim() !== "" && filteredMovies.length > 0 && (
                <div className="scroll-hidden absolute top-[calc(100%+0.5rem)] w-[60%] min-w-60 bg-gray-900 rounded-xl shadow-lg z-10 overflow-x-auto whitespace-nowrap p-2 flex gap-4">
                    {filteredMovies.map((movie, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setShowSearch(false);
                                setSearchValue("");
                            }}
                            className="cursor-pointer min-w-[160px] max-w-[120px] flex-shrink-0"
                        >
                            <div className="relative w-full  rounded-lg overflow-x-auto scroll-hidden">
                                <MovieCard
                                    name={movie.title}
                                    rate={movie.rate}
                                    src={movie.src}
                                    year={movie.year}
                                />
                                <p></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
