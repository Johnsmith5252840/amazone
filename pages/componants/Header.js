import {Box, useMediaQuery} from "@mui/material";
import logo from "../../assets/logo.png";
import Image from "next/image";
export default function Header() {
    const desktop = useMediaQuery('(min-width:1024px)');
    return(
        <>
            <Box display="flex" justifyContent="center">
                <Image src={logo} alt="logo" width={desktop?300:200} height={desktop?150:100}/>
            </Box>
        </>
    )
}