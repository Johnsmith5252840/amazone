import Header from './componants/Header';
import { Box, Typography, useMediaQuery, Grid, Modal } from '@mui/material';
import Image from 'next/image';
import profile from "../assets/profile.png";
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import sign from "../assets/sign.png";
export default function Frame3() {
    const [modal, setOpenModal] = useState(false);
    const desktop = useMediaQuery('(min-width:1024px)');
    const openModal = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false);
    }
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
                                <Box className="btn" onClick={openModal} sx={{ cursor: "pointer" }}>
                                    <a style={{ fontSize: "32px", color: "white" }}>Ver NFT</a>
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
                                <Box className="btn" onClick={openModal} sx={{ cursor: "pointer" }}>
                                    <a style={{ fontSize: "12px", color: "white" }}>Ver NFT</a>
                                </Box>
                            </Grid></>
                }

            </Grid>
            <Modal
                open={modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            ><>
                    <Image src={sign} style={{ position: "absolute", width: desktop ? "60%" : "80%", height: desktop ? "80%" : "30%", margin: desktop ? "5% 20%" : "30% 10%" }} />
                    <HighlightOffIcon sx={{ ml: desktop ? "80%" : "90%", mt: desktop ? "4%" : "25%", scale: desktop ? "2" : "1.5", color: "white", cursor: "pointer" }} onClick={handleClose} />
                </>
            </Modal>
        </div>
    )
}