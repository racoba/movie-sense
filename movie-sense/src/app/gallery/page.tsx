import { MovieCard } from "@/components";

const Gallery = () => {
    return (
        <div className="flex flex-col gap-10 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                <MovieCard name="MAGICO DE OZ" rate={7} year={2002} />
            </div>
        </div>
    )
}

export default Gallery;