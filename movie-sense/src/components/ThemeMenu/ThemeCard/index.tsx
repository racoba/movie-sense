"use client"
import { useRouter } from "next/navigation";

interface IProps {
    theme: string;
}

export const ThemeCard = ({ theme }: IProps
) => {
    const router = useRouter()
    const onNavigateToGallery = (theme: string) => {
        router.push("/gallery?content=movies&filter=" + theme);
    }
    return (
        <div
            className="cursor-pointer bg-gray-600 flex justify-center items-center w-40 min-w-40 rounded-md h-20 transition-colors duration-300 hover:bg-gray-500"
            onClick={() => onNavigateToGallery(theme)}
        >
            <span className="text-2xl">{theme}</span>
        </div>
    )
}