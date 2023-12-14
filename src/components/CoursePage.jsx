import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import vdo from "../assets/login_bg.mp4"

const CoursePage = () => {
    
    const [lectureNumber, setLectureNumber]=useState("0");

    const lectures = [
        {
            _id: 'dhiru',
            title: "Dhairya",
            description: 'Dhiru gupta is a web-developer',
            video: {
                url: 'guptag',
            },
        },
        {
            _id: 'dhirug',
            title: "Dhairyag",
            description: 'Dhiru gupta is a web-developer',
            video: {
                url: 'guptag',
            },
        },
        {
            _id: 'dhirugu',
            title: "Dhairyagu",
            description: 'Dhiru gupta is a web-developer',
            video: {
                url: 'guptag',
            },
        },
    ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}
    >
        <Box>
            <video width={'100%'} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src={vdo}></video>
            <Heading mt={'4'}>#{lectureNumber+1} {lectures[lectureNumber].title}</Heading>
            <Heading mt={'4'}>Description</Heading>
            <Text mt={'4'}>{lectures[lectureNumber].description}</Text>
        </Box>
        <VStack>
            {
                lectures.map((element, index) =>(
                    <Button onClick={() => setLectureNumber(index)} width={'100%'} key={element._id}>
                        <Text>{index+1} {element.title}</Text>
                    </Button>
                ))
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage
