'use client';

import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface IProps {
    name: string;
    rate: number;
    year: number;
    src: string;
}

export const MovieCard = ({ name, rate, year, src }: IProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="h-66 w-40 min-w-40 flex flex-col gap-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`relative h-[70%] w-full rounded-lg overflow-hidden ${!src && "bg-white/20"}`}>
                {src && (
                    <>
                        <Image
                            src={src}
                            alt={name}
                            fill
                            className={`object-cover transition-transform duration-300 ${hovered ? 'scale-105' : ''}`}
                            sizes="100%"
                        />

                        {/* Overlay escuro e botão */}
                        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                            <button className="bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-500 transition cursor-pointer">
                                Watch <VisibilityIcon style={{ height: 16, width: 16 }} />
                            </button>
                        </div>
                    </>
                )}
            </div>

            <div className="flex flex-col gap-2 px-2">
                <span className="text-sm line-clamp-2">{name}</span>
                <div className="flex flex-row items-center gap-1">
                    <StarIcon style={{ fontSize: '16px', fill: 'yellow' }} />
                    <span className="text-xs">{rate.toFixed(1)}</span>
                    <span className="text-xs">| {year}</span>
                </div>
            </div>
        </div>
    );
};
