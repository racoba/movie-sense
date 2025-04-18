import StarIcon from '@mui/icons-material/Star';

interface IProps {
    name: string;
    rate: number;
    year: number;
}

export const MovieCard = ({ name, rate, year }: IProps) => {
    return (
        <div className="h-66 w-40 min-w-40 flex flex-col gap-2">
            <div className="h-[70%] bg-red-600 rounded-lg">

            </div>
            <div className="flex flex-col gap-2 px-2">
                <span className="text-sm">{name} </span>
                <div className="flex flex-row items-center gap-1">
                    <StarIcon style={{ fontSize: "16px", fill: "yellow" }} />
                    <span className="text-xs">{rate.toFixed(1)}</span>
                    <span className="text-xs">| {year} </span>
                </div>
            </div>


        </div>
    )
}