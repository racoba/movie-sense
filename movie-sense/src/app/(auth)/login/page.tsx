"use client"
import { useState } from "react";
import { Box, Button, FormControl, Grid, Snackbar, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

type SignInData = {
    email: string;
    password: string;
}

const Login = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const onClickLogin = async (data?: SignInData) => {
        const currentUser = email.trim();
        if (!currentUser) return;

        // Recupera o cache atual
        const userData = localStorage.getItem("movieCache");
        let cache = userData ? JSON.parse(userData) : {};

        // Verifica quantos usuários existem
        const usersCount = Object.keys(cache).length;

        // Se houverem 3 ou mais usuários, limpa tudo
        if (usersCount >= 3 && !cache[currentUser]) {
            localStorage.clear();
            cache = {}; // resetar o cache também
            console.log("Limpeza geral do cache devido a limite de usuários.");
        }

        // Cria array vazio de filmes se o usuário ainda não existir
        if (!cache[currentUser]) {
            cache[currentUser] = [];
            console.log(`Cache criado para ${currentUser}`);
        }

        // Atualiza o localStorage
        localStorage.setItem("movieCache", JSON.stringify(cache));
        localStorage.setItem("currentUser", currentUser);

        setOpen(true);
        router.push("/main");
    };


    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className="h-[100vh]">
            <div className="flex flex-col h-full items-center justify-center">
                <Grid
                    container
                    height={500}
                    minWidth={450}
                    width="35%"
                    bgcolor="white"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={8}
                >
                    <span className="text-black">LOGIN</span>
                    <form onSubmit={() => onClickLogin()}>
                        <FormControl style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 350 }}>
                            <TextField
                                required
                                type="email"
                                label="Email"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                required
                                type="password"
                                label="Password"
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: "100%", marginTop: 15 }}
                            />
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="space-around"
                                width={230}
                            >
                                <Button
                                    onClick={() => onClickLogin()}
                                    variant="contained"
                                    style={{ backgroundColor: "black", marginTop: 30 }}
                                >
                                    Login
                                </Button>
                            </Box>
                        </FormControl>
                    </form>
                </Grid>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                message="Usuário logado com sucesso!"
            />
        </div>

    )
}

export default Login;