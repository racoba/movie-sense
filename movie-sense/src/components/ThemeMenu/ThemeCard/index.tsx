interface IProps {
    theme: string;
}

export const ThemeCard = ({ theme }: IProps

) => {
    return (
        <div className="cursor-pointer bg-gray-600 flex justify-center items-center w-24 min-w-24 rounded-md h-14 transition-colors duration-300 hover:bg-gray-500">
            <span>{theme}</span>
        </div>
    )
}