import React, {useState} from 'react'
import { Card, CardBody, Stack, Heading,Box, VStack, Input, FormLabel, Button, Textarea } from '@chakra-ui/react'

const Contact = () => {
  return (
    <div>
      <VStack height={'100vh'} justifyContent={'center'}>
      <ContactCard />
      </VStack>
    </div>
  )
}
const ContactCard = () =>{
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  return(
      <Card maxW='xl' bg='rgba(0, 28, 28, 0.9)' color={'white'} padding={10}>
              <CardBody>
                  <Heading  display={'flex'} justifyContent={'center'} >Contact Us</Heading>
                  <Stack mt='6' spacing='3'>
                      <form>
                          
                          <FormLabel htmlFor='name' children="Enter your name" />
                          <Input required id='name' value={name} onChange={(e) =>setName(e.target.value)} placeholder='Enter name' type='email' />
                          <FormLabel htmlFor='email' children="Email Address" />
                          <Input required id='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' />
                          <FormLabel mt={'4'} htmlFor='password' children="Message" />
                          <Textarea value={message} onChange={(e) =>setMessage(e.target.value)} placeholder='Enter Message' />
                          <Button colorScheme='blue' type='submit' mt={'3'} width={'full'}>Send Mail</Button>
                          
                      </form>
                  </Stack>
                  <Box mt="4" borderTop="2px solid #009080" />
              </CardBody>
          </Card>
  )
}
export default Contact
