import Header from './componants/Header';
import { Box, Typography, useMediaQuery, Grid, Container } from '@mui/material';
import Image from 'next/image';
import copy from "../assets/copy.png"
import arrow from "../assets/arrow.png"
import sign from "../assets/sign.png";
import check from "../assets/check.png";
export default function Frame2() {
    const desktop = useMediaQuery('(min-width:1024px)');

    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs={desktop ? 6 : 12} className="signLeft">
                    <Box sx={{padding:desktop?"10%":"20px"}}>
                        <Box display="flex" justifyContent="space-between" sx={{mb:"50px"}}>
                            <Typography fontSize={desktop?"32px":"25px"} color="white">0x877...0A5c5</Typography>
                            <Box display="flex" gap={2}>
                                <Image src={copy} />
                                <Image src={arrow} />
                            </Box>
                        </Box>
                        <Image src={sign} width={desktop?'70%':300} height={desktop?"30%":200} style={{borderRadius:"30px"}}/>
                        <Box gap={2} sx={{mt:"50px"}}>
                            <Box display="flex" gap={2} sx={{mb:"20px"}}>
                                <Typography fontSize={desktop?"32px":"20px"} color="white">Fiinsa participation certificate</Typography>
                                <Image src={check} />
                            </Box>
                            <Typography fontSize={desktop?"40px":"30px"} fontWeight="700" color="white">Certificate #1</Typography>
                        </Box>
                        <Box className="btn" sx={{mt:"5% !important"}}>
                            <a style={{ fontSize: desktop?"32px":"20px", color: "white" }}>Voltar</a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={desktop ? 6 : 12} className="mockupRight">
                   <Box sx={{padding:desktop?"150px":"50px", mt:desktop?"5%":"2%"}}>
                        <Typography fontSize={desktop?"32px":"20px"} fontWeight="700">Detalhes Blockchain</Typography>
                        <Box sx={{padding:desktop?"50px":"20px"}}>
                            <Box display="flex" justifyContent="space-between">
                                <Typography fontSize={desktop?"24px":"15px"}>Endereço do Smart Contract</Typography>
                                <Typography fontSize={desktop?"24px":"15px"}>0x877...0A5c5</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{mt:"20px"}}>
                                <Typography fontSize={desktop?"24px":"15px"}> ID do token</Typography>
                                <Typography fontSize={desktop?"24px":"15px"}>1</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{mt:"20px"}}>
                                <Typography fontSize={desktop?"24px":"15px"}>Standard dos tokens</Typography>
                                <Typography fontSize={desktop?"24px":"15px"}>ERC-721</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{mt:"20px"}}>
                                <Typography fontSize={desktop?"24px":"15px"}>Blockchain</Typography>
                                <Typography fontSize={desktop?"24px":"15px"}> Polygon</Typography>
                            </Box>
                        </Box>
                        <Typography fontSize={desktop?"32px":"20px"} fontWeight="700">Descrição da Coleção</Typography>
                        <Box sx={{padding:desktop?"50px":'20px'}}>
                            <Box display="flex" justifyContent="space-between">
                                <Typography fontSize={desktop?"24px":"15px"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                               
                            </Box>
                        </Box>
                   </Box>
                </Grid>
            </Grid>
        </div>
    )
}
