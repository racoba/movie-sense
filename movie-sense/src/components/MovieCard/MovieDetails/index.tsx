import { Box, Modal, Typography, Chip, Button, Rating } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface MovieDetailsRef {
    open: (movie: MovieProps) => void;
    close: () => void;
}

interface MovieProps {
    title: string;
    rate: number;
    year: number;
    src: string;
    theme: string;
}

export const MovieDetails = forwardRef<MovieDetailsRef>((_, ref) => {
    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState<MovieProps | null>(null);

    useImperativeHandle(ref, () => ({
        open: (movieData: MovieProps) => {
            setMovie(movieData);
            setOpen(true);
        },
        close: () => setOpen(false),
    }));

    if (!movie) return null;

    const addMovieToCache = (movieTitle: string) => {
        const currentUser = localStorage.getItem("currentUser");
        if (!currentUser) {
            console.warn("Nenhum usuário logado.");
            return;
        }

        const userData = localStorage.getItem("movieCache");
        let cache = userData ? JSON.parse(userData) : {};

        if (!cache[currentUser]) {
            cache[currentUser] = [];
        }

        if (!cache[currentUser].includes(movieTitle)) {
            cache[currentUser].push(movieTitle);
        }

        localStorage.setItem("movieCache", JSON.stringify(cache));
    };


    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-movie-title"
            aria-describedby="modal-movie-description"
        >
            <Box sx={{ ...style, backgroundImage: `url(${movie.src})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.7)', zIndex: 1 }} />

                <Box sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto', pr: 1 }}>
                        <Typography id="modal-movie-title" variant="h4" fontWeight="bold">
                            {movie.title}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Rating name="read-only" value={movie.rate} precision={0.5} readOnly />
                            <Typography>{movie.rate.toFixed(1)} / 5</Typography>
                            <Typography>• {movie.year}</Typography>
                        </Box>

                        <Chip label={movie.theme} color="primary" variant="outlined" sx={{ width: "fit-content" }} />
                    </Box>

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => addMovieToCache(movie.title)} variant="contained" color="error" sx={{ width: 160 }}>
                            Watch
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
});


const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600,
    bgcolor: 'background.default',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    overflow: 'hidden',
    minHeight: 400,
};

MovieDetails.displayName = "MovieDetails";

