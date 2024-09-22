'use client';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Icon} from "@mui/material";
import Grid from '@mui/material/Grid2';
import RoomImage from '@/public/images/room.jpg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../styles/card.inspection.css';
import { useRouter } from "next/navigation";
export  const CardAddInspection = () => {
    const router = useRouter();
    return <Grid container >
    <Card sx={{width: '100%', minWidth: '250px'}} className="cardInspectionResponsive">
        <Box textAlign='center' height='100%'>
            <CardActionArea onClick={() => router.push('/inspection/create')} style={{height: '100%'}}>
                <Icon color='secondary' className="m-1" >
                    <AddCircleOutlineIcon/>
                </Icon>
                
            </CardActionArea>
        </Box>
    </Card>
  </Grid>
}
export  function CardInspection() {
    return (
    <Grid container >
        <Card sx={{width: '100%', maxWidth: '250px'}} className="cardInspectionResponsive">
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={RoomImage.src}
                alt="green iguana"
            />
            
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
      </Grid>
    );
  }