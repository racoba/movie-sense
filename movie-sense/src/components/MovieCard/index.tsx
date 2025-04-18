import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

interface IProps {
    name: string;
    rate: number;
    year: number;
    src: string;
}

export const MovieCard = ({ name, rate, year, src }: IProps) => {
    return (
        <div className="h-66 w-40 min-w-40 flex flex-col gap-2 cursor-pointer">
            <div className={`relative h-[70%] w-full rounded-lg overflow-hidden ${!src && "bg-white/20"}`}>
                {src && (
                    <Image
                        src={src}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="100%"
                    />
                )}
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