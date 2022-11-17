import Header from './componants/Header';
import { Box, Typography, useMediaQuery, Grid } from '@mui/material';
import Image from 'next/image';
import profile from "../assets/profile.png";
import sign from "../assets/sign.png";
export default function Frame1() {
    const desktop = useMediaQuery('(min-width:1024px)');

    return (
        <div>
            <Header />
            <Grid container>
                {
                    desktop ?
                        <>
                            <Grid item xs={desktop ? 6 : 12} className="mockupLeft" sx={{ paddingY: { sm: 2, md: 4 } }}>
                                <Box display="flex" justifyContent="center" mt="30px">
                                    <Image src={sign} width={desktop ? '70%' : 300} height={desktop ? "30%" : 200} style={{ borderRadius: "30px" }} />
                                </Box>
                                <Box className="btn">
                                    <a href="/frame2" style={{ fontSize: "32px", color: "white" }}>Obter NFT</a>
                                </Box>
                            </Grid>
                            <Grid item xs={desktop ? 6 : 12} className="mockupRight">
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Box className="profile" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Image src={profile} className="avartar"></Image>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                <Typography fontSize="35px"><strong>Alejandro </strong>González</Typography>
                                                <Typography fontSize="35px">Navarro</Typography>
                                            </Box>
                                        </Box>
                                        <Box gap={2} sx={{ mt: "4rem" }}>
                                            <Typography fontSize="32px">Participação: <strong>Palestrante</strong></Typography>
                                            <Typography fontSize="32px">Token NFT: <strong>Disponível</strong></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </> :
                        <>
                            <Grid item xs={desktop ? 6 : 12} className="mockupRight">
                                <Box display="flex" justifyContent="center" sx={{ mt: "10%" }}>
                                    <Box>
                                        <Box className="profile" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Image src={profile} className="avartar"></Image>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                <Typography fontSize="18px" ><strong>Alejandro </strong>González</Typography>
                                                <Typography fontSize="18px">Navarro</Typography>
                                            </Box>
                                        </Box>
                                        <Box gap={2} sx={{ mt: "4rem" }}>
                                            <Typography fontSize="12px">Participação: <strong>Palestrante</strong></Typography>
                                            <Typography fontSize="12px">Token NFT: <strong>Disponível</strong></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={desktop ? 6 : 12} className="mockupLeft">
                                <Box display="flex" justifyContent="center" mt="30px">
                                    <Image src={sign} width={desktop ? '70%' : 300} height={desktop ? "30%" : 200} style={{ borderRadius: "30px" }} />
                                </Box>
                                <Box className="btn">
                                    <a href="/frame2" style={{ fontSize: "12px", color: "white" }}>Obter NFT</a>
                                </Box>
                            </Grid>
                        </>
                }

            </Grid>
        </div>
    )
}
