import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useParams} from "react-router-dom"
const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const params = useParams();
    console.log(params.token);
  return (
    <VStack height={'90vh'} justifyContent={'center'}>
        <Heading>Reset Password</Heading>
        <form>
        <Input mt={'8'} type='password' placeholder='Enter New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit' colorScheme='blue' mt={'4'} width={'full'}> Reset Password</Button>
        </form>
    </VStack>
  )
}

export default ResetPassword
