import React, { useState } from 'react'
import { Button, Heading, Input, VStack } from '@chakra-ui/react'
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
  return (
    <VStack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Heading mb={'10'}>Change Password</Heading>
        <form>
        <Input type='text' value={oldPassword} onChange={(e) =>setOldPassword(e.target.value)} placeholder='Old Password' />
        <Input mt={'4'} type='password' value={newPassword} onChange={(e) =>setNewPassword(e.target.value)} placeholder='New Password' />
        <Button mt={'4'} colorScheme='blue' width={'full'} type='submit'>Change Password</Button>
        </form>
    </VStack>
  )
}

export default ChangePassword
