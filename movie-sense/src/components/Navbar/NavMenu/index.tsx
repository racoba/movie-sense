"use client"
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

export const NavMenu = () => {
    const router = useRouter();
    const onNavigateTo = (page: string) => {
        router.push("/" + page);
    }
    return (
        <div className="flex flex-row w-1/3 items-center justify-center ">
            <div className="flex flex-row items-center justify-between bg-gray-600 w-[60%] min-w-60 px-5 py-2 rounded-xl">
                <div onClick={()=> onNavigateTo("gallery")} className="cursor-pointer transition-colors duration-300 px-2 py-2 rounded-xl hover:bg-gray-700">
                    <span>Filmes</span>
                </div>
                <div onClick={()=> onNavigateTo("gallery")} className="cursor-pointer transition-colors duration-300 px-2 py-2 rounded-xl hover:bg-gray-700">
                    <span>Series</span>
                </div>
                <div className="cursor-pointer rounded-full transition-colors duration-300 bg-gray-500 hover:bg-gray-700 p-1">
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}

