import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import vision1 from '../../../../Components/images/vision/vision1.jpeg';
import vision2 from '../../../../Components/images/vision/vision2.jpeg';
import vision3 from '../../../../Components/images/vision/vision3.jpeg';
import vision4 from '../../../../Components/images/vision/vision4.jpeg';
import vision5 from '../../../../Components/images/vision/vision5.jpeg';
import vision6 from '../../../../Components/images/vision/vision6.jpeg';
import { grey } from '@mui/material/colors';

function HomeIcon(props) {
    return (
        <RemoveRedEyeIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </RemoveRedEyeIcon>
    );
}

const itemData = [
    {
        img: vision1,
        title: 'Bed',
    },
    {
        img: vision2,
        title: 'Kitchen',
    },
    {
        img: vision3,
        title: 'Sink',
    },
    {
        img: vision4,
        title: 'Books',
    },
    {
        img: vision5,
        title: 'Chairs',
    },
    {
        img: vision6,
        title: 'Candle',
    },

];
const Vision = () => {
    const color = grey[50];
    return (
        <Box sx={{ flexGrow: 1, mt: 10, mb: 10, bgcolor: color }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography>
                        <ImageList sx={{ width: 'auto', height: 700, p: 10, m: '0 auto' }} variant="woven" cols={3} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={6}
                    sx={{
                        display: 'flex', justifyContent: 'flex-start',
                        alignItems: 'center', textAlign: 'left',
                    }} style={{ paddingRight: 120 }}
                >
                    <Box  >
                        <Typography variant='h5' style={{ fontWeight: 400, color: '#0D305C' }} >

                            <HomeIcon fontSize="large" color="success" />
                            Vision
                        </Typography>
                        <Typography variant='h4' sx={{ textTransform: 'uppercase' }} style={{ fontWeight: 600, color: '#0D305C', marginTop: 50 }}>
                            Our Great Vision
                        </Typography>
                        <Typography style={{
                            borderWidth: '8px',
                            borderBottomStyle: 'double', borderColor: '#2B8618',
                            marginTop: 20,
                            marginBottom: 20,
                            width: 250
                        }}>

                        </Typography>
                        <Typography variant='h6' style={{ fontSize: 16, fontWeight: 300 }}>
                            Our travel agency is focused on providing exciting domestic and international tour packages and Enjoy the intimate small ship luxury only offered by Regent Seven Seas Cruises                        <br></br>
                            <br></br>
                            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                        </Typography>


                    </Box>
                </Grid>


            </Grid>
        </Box>
    );
};

export default Vision;