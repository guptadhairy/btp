import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, {useState} from 'react'

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  return (
    <VStack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Heading mb={'10'}>Update User Profile</Heading>
        <form>
        <Input type='text' value={name} onChange={(e) =>setName(e.target.value)} placeholder='Name' />
        <Input mt={'4'} type='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Email' />
        <Button mt={'4'} colorScheme='blue' width={'full'} type='submit'>Update</Button>
        </form>
    </VStack>
  )
}

export default UpdateProfile
