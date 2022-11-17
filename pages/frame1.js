import Header from './componants/Header';
import { Box, Typography, useMediaQuery, Grid } from '@mui/material';
import Image from 'next/image';
import profile from "../assets/profile.png";
export default function Frame1() {
    const desktop = useMediaQuery('(min-width:1024px)');

    return (
        <div>
            <Header />
            <Grid container>
                {
                    desktop ?
                        <>
                            <Grid item xs={desktop ? 6 : 12} className="mockupLeft">
                                <Box className="btn">
                                    <a style={{ fontSize: "32px", color: "white" }}>Obter NFT</a>
                                </Box>
                            </Grid>
                            <Grid item xs={desktop ? 6 : 12} className="mockupRight">
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Box className="profile">
                                            <Typography fontSize="40px" sx={{ mr: "50px" }}><strong>Alejandro </strong>González</Typography>
                                            <Typography fontSize="40px" textAlign="center">Navarro</Typography>
                                        </Box>
                                        <Box gap={2} sx={{ mt: "4rem" }}>
                                            <Typography fontSize="32px">Participação: <strong>Palestrante</strong></Typography>
                                            <Typography fontSize="32px">Token NFT: <strong>Disponível</strong></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Image src={profile} className="avartar"></Image>
                        </> :
                        <>
                            <Grid item xs={desktop ? 6 : 12} className="mockupRight">
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Box className="profile">
                                            <Typography fontSize="18px" sx={{ mr: "15px" }}><strong>Alejandro </strong>González</Typography>
                                            <Typography fontSize="18px" textAlign="center">Navarro</Typography>
                                        </Box>
                                        <Box gap={2} sx={{ mt: "4rem" }}>
                                            <Typography fontSize="12px">Participação: <strong>Palestrante</strong></Typography>
                                            <Typography fontSize="12px">Token NFT: <strong>Disponível</strong></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={desktop ? 6 : 12} className="mockupLeft">
                                <Box className="btn">
                                    <a style={{ fontSize: "12px", color: "white" }}>Obter NFT</a>
                                </Box>
                            </Grid>
                            <Image src={profile} className="avartar"></Image></>
                }

            </Grid>
        </div>
    )
}
