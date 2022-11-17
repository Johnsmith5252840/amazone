import { Box, useMediaQuery, Typography, Link } from "@mui/material";
import logo from "../../assets/logo.png";
import Image from "next/image";
export default function Header() {
    const desktop = useMediaQuery('(min-width:1024px)');
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography fontSize={desktop ? "28px" : "8px"} fontStyle="italic" sx={{ mt: desktop ? "-30px" : "-20px" }}>Desenvolvido por:</Typography>
                <Link href="/">
                    <Image src={logo} alt="logo" width={desktop ? 300 : 200} height={desktop ? 150 : 100} />
                </Link>
                <Typography fontSize={desktop ? "28px" : "8px"} fontStyle="italic" sx={{ mt: desktop ? "-30px" : "-20px" }}>Em parceria com</Typography>
            </Box>
        </>
    )
}