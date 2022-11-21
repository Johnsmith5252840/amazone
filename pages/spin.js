import Header from './componants/Header';
import { Box, Typography,useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import Image from 'next/image';
import spin from "../assets/spin.gif";
import { useRouter } from "next/router";
export default function Home() {
  const desktop = useMediaQuery('(min-width:1024px)');
  var router = useRouter();
  var participantID = router.query["participantId"];
  useEffect(() => {
    if(participantID){
      const interval = setInterval(() => {
        window.location.href=`https://amazone-en1q.vercel.app/frame2?participantId=${participantID}`;
      }, 5000);
    
      return () => clearInterval(interval);
    }
    
  }, [participantID]);
  return (
    <div>
      <Header/>
      <Box className="banner">
        <Box>
          <Box className="spiner">            
            <Image src={spin} style={{width:desktop?"70%":"150%", height:desktop?"70%":"150%"}}/>
          </Box>
          <Typography color="white" fontSize={desktop?"32px":"16px"} fontWeight="700" fontStyle="italic" sx={{textAlign:"center"}}>Aportando na retirada de créditos de carbono...</Typography>
        </Box>
      </Box>
    </div>
  )
}
