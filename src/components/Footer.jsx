import { HStack, VStack, Text, Input, Button } from '@chakra-ui/react'
import React from 'react'
import "../styles/footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <hr />
    <HStack height={"27vh"} className='footer'>
      <HStack ml={"30px"} display={'flex'} justifyContent={'center'} alignItems={'center'} width={"30%"}>
        
          <Link className='link'>Home |</Link>
          <Link className='link'>About Us |</Link>
          <Link className='link'>Contact Us |</Link>
          <Link className='link'>Rate Us</Link>
      </HStack>
      <VStack width={"40%"}>
      <Text>Built with ♡ by Dhairya</Text>
      <Text>2023 © All Rights Reserved.</Text>
      </VStack>
      <VStack mr={'30px'} width={"30%"}>
      <HStack>
      <Input  placeholder='Enter Email Address' />
      <Button bgColor={'blue.500'}>Send</Button>
      </HStack>
      <Text display={'flex'} justifySelf={'center'} alignSelf={'center'}>Subscribe for Newsletter...</Text>
      </VStack>
    </HStack>
    </>
  )
}

export default Footer
