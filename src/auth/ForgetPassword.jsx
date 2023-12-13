import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
  return (
    <VStack height={'90vh'} justifyContent={'center'}>
        <Heading>Forgot Password</Heading>
        <form>
        <Input mt={'8'} type='email' placeholder='Enter email..' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type='submit' colorScheme='blue' mt={'4'} width={'full'}>Send Reset Link</Button>
        </form>
    </VStack>
  )
}

export default ForgetPassword
