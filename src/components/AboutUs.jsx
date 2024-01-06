import { Heading, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import dhiru from "../assets/dhiru_.jpg"
import "../styles/home.css";

const AboutUs = () => {
  return (
    <Stack display={"flex"} flexDirection={["column", "row"]} padding={'40px'}>
       <VStack width={["full","50%"]}>
              <img className='about_img' src={dhiru} alt='Profile'/>
       </VStack>
       <VStack width={["full","50%"]} display={'flex'} justifyContent={"center"}>
              <Heading>About Us </Heading>
              <Text fontSize={'1.2rem'}>Hello! Welcome to Learnr! Really happy to see you here.</Text>
              <Text fontSize={'1.2rem'}>Thinking of taking a step towards a mentorship programme? It definitely seems a bit daunting at first. It is never easy to ask for someone's counsel or guidance be it for studies or just in general. So, at Learnr we are here to provide all the necessary counsel you might need for placement preparations, interview experiences, programming, et cetera! For any additional questions, feel free to email us at dhirugupta198@gmail.com</Text>
       </VStack>
    </Stack>
  )
}

export default AboutUs
