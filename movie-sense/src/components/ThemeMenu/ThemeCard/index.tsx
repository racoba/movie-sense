interface IProps {
    theme: string;
}

export const ThemeCard = ({ theme }: IProps

) => {
    return (
        <div className="cursor-pointer bg-gray-600 flex justify-center items-center w-40 min-w-40 rounded-md h-20 transition-colors duration-300 hover:bg-gray-500">
            <span className="text-2xl">{theme}</span>
        </div>
    )
}