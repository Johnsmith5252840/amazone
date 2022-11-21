import Header from './componants/Header';
import { Box, Typography, useMediaQuery, Grid, Link } from '@mui/material';
import Image from 'next/image';
import copy from "../assets/Copy.png"
import arrow from "../assets/arrow.png"
import sign from "../assets/sign.png";
import check from "../assets/check.png";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
export default function Frame2() {
    const desktop = useMediaQuery('(min-width:1018px)');
    var router = useRouter();
    var participantID = router.query["participantId"];
    var username = router.query["username"];
    const [address, setAddress] = useState('');
    const [tokenID, setTokenID] = useState('');
    const [description, setDescription] = useState('');
    const [collectionName, setCollectionName] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        if (participantID)
            axios.get(`https://amazonia-cripto.onrender.com/getParticipantNFTData/${participantID}`)
                .then(res => {
                    console.log(res.data);
                    setAddress(res.data.collectionAddress);
                    setTokenID(res.data.tokenId);
                    setDescription(res.data.description);
                    setName(res.data.name);
                    setCollectionName(res.data.collectionName);
                })
                .catch(err => {
                    window.location.href = "https://amazone-en1q.vercel.app/pagenotfind"
                    console.log("page not find")
                })
    }, [participantID])
    const copyClipboard = () => {
        navigator.clipboard.writeText(address);
        alert("Copied address");
    }
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs={desktop ? 6 : 12} className="signLeft">
                    <Box sx={{ padding: desktop ? "10%" : "20px" }}>
                        <Box display="flex" justifyContent="space-between" sx={{ mb: "50px" }}>
                            <Typography fontSize={desktop ? "32px" : "25px"} color="white">{address.substring(0, 5)} ...... {address.substring(address.length - 5)}</Typography>
                            <Box display="flex" gap={2}>
                                <Image src={copy} onClick={copyClipboard} style={{ cursor: 'pointer' }} />
                                <Link href={`https://polygonscan.com/address/${address}`} target='_blank' >
                                    <Image src={arrow} style={{ cursor: 'pointer' }} />
                                </Link>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center" mt="30px">
                            <Box className="box" sx={{ width: desktop ? '90%' : 300, height: desktop ? "60vh" : 200 }}>
                                <Typography fontSize={desktop?"32px":"20px"} sx={{ ml: "65%", mt: "30%" }}>{username}</Typography>
                            </Box>
                        </Box>
                        <Box gap={2} sx={{ mt: "50px" }}>
                            <Box display="flex" gap={2} sx={{ mb: "20px" }}>
                                <Typography fontSize={desktop ? "32px" : "20px"} color="white">{collectionName}</Typography>
                                <Image src={check} />
                            </Box>
                            <Typography fontSize={desktop ? "40px" : "30px"} fontWeight="700" color="white">{name}</Typography>
                        </Box>
                        <Box className="btn" sx={{ mt: "5% !important" }}>
                            <a href={`/?participantId=${participantID}`} style={{ fontSize: desktop ? "32px" : "20px", color: "white" }}>Voltar</a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={desktop ? 6 : 12} className="mockupRight">
                    <Box sx={{ padding: desktop ? "10px" : "50px", mt: desktop ? "5%" : "2%", width: desktop ? "90vw" : "100%" }}>
                        <Typography fontSize={desktop ? "32px" : "20px"} fontWeight="700">Detalhes Blockchain</Typography>
                        <Box sx={{ padding: desktop ? "50px" : "20px" }}>
                            <Box display="flex" justifyContent="space-between">
                                <Typography fontSize={desktop ? "18px" : "15px"}>Endereço do Smart Contract</Typography>
                                <Typography fontSize={desktop ? "18px" : "15px"}>{address.substring(0, 5)} ...... {address.substring(address.length - 5)}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{ mt: "20px" }}>
                                <Typography fontSize={desktop ? "18px" : "15px"}> ID do token</Typography>
                                <Typography fontSize={desktop ? "18px" : "15px"}>{tokenID}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{ mt: "20px" }}>
                                <Typography fontSize={desktop ? "18px" : "15px"}>Standard dos tokens</Typography>
                                <Typography fontSize={desktop ? "18px" : "15px"}>ERC-721</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{ mt: "20px" }}>
                                <Typography fontSize={desktop ? "18px" : "15px"}>Blockchain</Typography>
                                <Typography fontSize={desktop ? "18px" : "15px"}> Polygon</Typography>
                            </Box>
                        </Box>
                        <Typography fontSize={desktop ? "32px" : "20px"} fontWeight="700">Descrição da Coleção</Typography>
                        <Box sx={{ padding: desktop ? "50px" : '20px' }}>
                            <Box display="flex" justifyContent="space-between">
                                <Typography fontSize={desktop ? "18px" : "15px"}>{description}</Typography>

                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}
