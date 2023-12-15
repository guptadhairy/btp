import React from 'react'
import {HStack, Heading, Stack, VStack, Text, Button, Box} from "@chakra-ui/react"
import vg from "../assets/lms.jpg";
import { Link } from 'react-router-dom';
import "../styles/home.css";
import Marque from './Marque';
import Marq from "./Marq";
import Swiper from './Swiper';
import Whyus from './Whyus';
const Home = () => {
  return (
    <div>
      <Stack>
        <HStack padding={"30px"} height={"100vh"} width={"full"} justifyContent={"space-between"}>
          <VStack width={'full'} height={'100vh'} justifyContent={'center'}>
            <Heading fontSize={'3rem'}>LEARN FROM EXPERTS</Heading>
            <Text>Elevate Your Education Journey with Us</Text>
            <HStack marginTop={"20px"}>
              <Link to={'/subscribe'}><Button colorScheme='blue'>Subscribe Now</Button></Link>
              <Link to={'/register'}><Button colorScheme={'blue'}>Register Now</Button></Link>
            </HStack>
          </VStack>
          <VStack width={'full'} height={'100vh'} justifyContent={'center'}>
          <img className="home_img" src={vg} alt="Logo" />
          </VStack>
          
        </HStack>
      </Stack>
      <Marque />
      <Marq />
      <Whyus />
      <Box marginTop={'50px'}>
      <Swiper />
      </Box>
    </div>
  )
}

export default Home
