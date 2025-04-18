import { ThemeCard } from "./ThemeCard";

interface IProps {
    themes: string[];
}

export const ThemeMenu = ({ themes }: IProps

) => {
    return (
        <div className="flex flex-row gap-6 overflow-x-auto scroll-hidden">
            {themes.map((theme, index) => {
                return (
                    <ThemeCard
                        key={index}
                        theme={theme}
                    />
                )
            })}
        </div>
    )
}