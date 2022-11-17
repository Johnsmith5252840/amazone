import Header from './componants/Header';
import { Box, CircularProgress, Typography,useMediaQuery } from '@mui/material';
export default function Home() {
  const desktop = useMediaQuery('(min-width:1024px)');

  return (
    <div>
      <Header/>
      <Box className="banner">
        <Box>
          <Box className="spiner">
            <CircularProgress size={desktop?"13rem":"8rem"} sx={{color:"white"}}/>
          </Box>
          <Typography color="white" fontSize={desktop?"32px":"16px"} fontWeight="700" fontStyle="italic" sx={{textAlign:"center"}}>Aportando na retirada de créditos de carbono...</Typography>
        </Box>
      </Box>
    </div>
  )
}
