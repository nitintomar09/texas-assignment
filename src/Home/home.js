import React from 'react';
import { Container, Typography, Button, Grid, Accordion, AccordionSummary, AccordionDetails, Card, CardMedia, CardContent, Box, Grid2, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardOne, FeatureOne, TileOne } from './images';
import { Padding } from '@mui/icons-material';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Box sx={{ bgcolor: '#f7f7f7', py: 8, px:14}}>
                <Grid2 container justifyContent={"flex-end"} spacing={2}>
                    <Grid2 item size={7}>
                        <Grid2 container direction={"column"} sx={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                            <Grid2 item size={12}>
                                <Typography variant="h2" align='left'>
                                    Central Texas Fly Fishing
                                </Typography>
                            </Grid2>
                            <Grid2 item size={12}>
                                <Typography variant="body1" align='left'>
                                    Ali lacus vitae nulla sagittis scelerisque nisl. Pellentesque dui
                                    cursus vestibulum.
                                </Typography>
                            </Grid2>
                            <Grid2 item>
                                <Button variant="contained" color="inherit">
                                    Get Started
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Grid2 item size={5}>
                        <TileOne />
                    </Grid2>
                </Grid2>
            </Box>

            {/* Featured Options Section */}
            <Box sx={{ bgcolor: '#f1eadd', py: 8, px:10 }}>
                <Container sx={{background:"#f1eadd"}}>
                    <Typography variant="h4" gutterBottom>
                        Featured Options
                    </Typography>
                    <Accordion  sx={{background:"#f1eadd"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Explore Fly Fishing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid2 container direction={"row"} spacing={2} sx={{justifyContent:'flex-start'}}>
                                <Grid2 item size={5}>
                                    <FeatureOne/>
                                </Grid2>
                                <Grid2 item size={7}>
                                    <Grid2 container direction={"column"} sx={{alignItems:'flex-start', justifyContent:'flex-start'}} spacing={1}>
                                        <Grid2 item size={12}>
                                            <Typography variant='h5' align='left'>
                                                Explore Fly Fishing
                                            </Typography>
                                        </Grid2>
                                        <Grid2 item size={12}>
                                            <Typography variant='body' align='left'>
                                                Fly fishing is more than just a hobby : its a way to connect with nature, unwind, and experience the thrill of catching fish in their natural habitats. Whether you're a seasoned angler or just starting, there is always something new to learn and enjoy.
                                            </Typography>
                                        </Grid2>
                                        <Grid2 item >
                                            <Button variant="contained" color="inherit">
                                                Learn more
                                            </Button>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion  sx={{background:"#f1eadd"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Fly Fishing Experiences</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Explore fishing adventures and tips.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion  sx={{background:"#f1eadd"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Gear Up and Catch More</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Find the best gear for your fishing needs.</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>

            {/* Member Stories Section */}
            <Box sx={{ bgcolor: '#f7f7f7', py: 8, px:10 }}>
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Member Stories
                    </Typography>
                    <Grid2 container spacing={2} justifyContent={"center"}>
                        {[
                            { title: "John's Story", description: 'Story of John lives in Alaska.' },
                            { title: 'The Journey', description: 'Journey to the Center of the Earth.' },
                            { title: 'Catch Day', description: 'A Story which tells.' },
                            { title: 'Trout Tales', description: 'A tale of Four Friends' },
                        ].map((story, index) => (
                            <Grid2 item xs={6} key={index}>
                                <Card sx={{width:"500px", height:"201px", marginLeft:"0px" }}>
                                    <Grid2 container justifyContent={"flex-start"} spacing={2}>
                                    <Grid2 item>
                                    <CardMedia>
                                        <CardOne/>
                                    </CardMedia>
                                    </Grid2>
                                        <Grid2 item xs>
                                            <CardContent sx={{padding:"0px"}}>
                                                <Grid2 container direction={"column"} justifyContent={"flex-start"} spacing={1}>
                                                    <Grid2 item>
                                                        <Typography variant="h6" display={'flex'} sx={{fontFamily:'cursive'}}>{story.title}</Typography>
                                                    </Grid2>
                                                    <Grid2 item xs>
                                                        <Typography variant="body2" color="textSecondary" display={'flex'}>
                                                            {story.description}
                                                        </Typography>
                                                    </Grid2>
                                                    <Grid2 item>
                                                        <Button variant="contained" sx={{display:'flex'}} color="inherit" size='small'>
                                                            Read more
                                                        </Button>
                                                    </Grid2>
                                                </Grid2>
                                            </CardContent>
                                        </Grid2>
                                    </Grid2>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>

            {/* Footer Section */}
            <Box sx={{ bgcolor: '#333', color: '#fff', py: 4, textAlign: 'center' }}>
                <Typography variant="body2" gutterBottom>
                    © 2024 Central Texas Fly Fishing. All Rights Reserved.
                </Typography>
                <Box display="flex" justifyContent="center" gap={2}>
                    <Button color="inherit" size="small">
                        FAQ
                    </Button>
                    <Button color="inherit" size="small">
                        Privacy
                    </Button>
                    <Button color="inherit" size="small">
                        Support
                    </Button>
                    <Button color="inherit" size="small">
                        Contact
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
