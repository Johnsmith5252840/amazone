import Header from './componants/Header';
import { Box, Typography, useMediaQuery, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from "next/router";
import profile from "../assets/profile.png";
import sign from "../assets/sign.png";
import { useEffect, useState } from 'react';
import axios from "axios";
export default function Index() {
    const desktop = useMediaQuery('(min-width:1024px)');
    var router = useRouter();
    const token = router.query["token"];
    const participantID = router.query["participantId"];
    console.log(token, participantID);
    const [available, setAvailable] = useState("Indisponível");
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        axios.get(`https://amazonia-cripto.onrender.com/getParticipantData/${participantID}`)
            .then(result => {
                setRole(result.data.role);
                if (result.data.minted === true) {
                    setAvailable("Disponível")
                } else {
                    setAvailable("Indisponível")
                }
                setName(result.data.name);
            })
            .catch(err => {

            })
        if (token && participantID) {
            axios.get(`https://amazonia-cripto.onrender.com/validateAccessToken/${token}/${participantID}`)
                .then(res => {
                    if (res.status === 200) {
                        axios.get(`https://amazonia-cripto.onrender.com/getParticipantData/${participantID}`)
                            .then(result => {
                                setRole(result.data.role);
                                if (result.data.minted === true) {
                                    setAvailable("Disponível")
                                } else {
                                    setAvailable("Indisponível")
                                }
                                setName(result.data.name);
                            })
                            .catch(err => {
                                window.location.href = "https://amazone-en1q.vercel.app/pagenotfind"
                            })
                    }
                })
                .catch(err => {
                    window.location.href = "https://amazone-en1q.vercel.app/pagenotfind"
                    console.log("page not find")
                })
        }

    }, [token, participantID])
    return (
        <div>
            <Header />
            <Grid container>
                {
                    desktop ?
                        <>
                            <Grid item xs={desktop ? 6 : 12} className="mockupLeft" sx={{ paddingY: { sm: 2, md: 4 } }}>
                                <Box display="flex" justifyContent="center" mt="30px">
                                    <Box className="box" sx={{ width: desktop ? '90%' : 300, height: desktop ? "60vh" : 200 }}>
                                        <Typography fontSize="32px" sx={{ ml: "60%", mt: "25%" }}>{name}</Typography>
                                    </Box>
                                </Box>
                                <Box className="btn">
                                    <a href={`/spin?participantId=${participantID}`} style={{ fontSize: "32px", color: "white", cursor: "pointer" }}>Obter NFT</a>
                                </Box>
                            </Grid>
                            <Grid item xs={desktop ? 6 : 12} className="mockupRight">
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Box className="profile" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Image src={profile} className="avartar"></Image>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                <Typography fontSize="35px"><strong>{name} </strong></Typography>
                                                <Typography fontSize="35px">{name}</Typography>
                                            </Box>
                                        </Box>
                                        <Box gap={2} sx={{ mt: "4rem" }}>
                                            <Typography fontSize="32px">Participação: <strong>{role}</strong></Typography>
                                            <Typography fontSize="32px">Token NFT: <strong>{available}</strong></Typography>
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
                                                <Typography fontSize="18px" ><strong>{name}</strong></Typography>
                                                <Typography fontSize="18px">{name}</Typography>
                                            </Box>
                                        </Box>
                                        <Box gap={2} sx={{ mt: "4rem" }}>
                                            <Typography fontSize="12px">Participação: <strong>{role}</strong></Typography>
                                            <Typography fontSize="12px">Token NFT: <strong>{available}</strong></Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={desktop ? 6 : 12} className="mockupLeft">
                                <Box display="flex" justifyContent="center" mt="30px">
                                    <Box className="box" sx={{ width: desktop ? '90%' : 300, height: desktop ? "60vh" : 200 }}>
                                        <Typography fontSize="20px" sx={{ ml: "60%", mt: "25%" }}>{name}</Typography>
                                    </Box>
                                </Box>
                                <Box className="btn">
                                    <a href={`/spin?participantId=${participantID}`} style={{ fontSize: "12px", color: "white", cursor: "pointer" }}>Obter NFT</a>
                                </Box>
                            </Grid>
                        </>
                }

            </Grid>
        </div>
    )
}
