import React from 'react'
import {Card, CardBody, CardHeader, CardFooter, Heading, Text, Button, VStack} from "@chakra-ui/react"
import {RiCheckboxCircleFill} from 'react-icons/ri'
const PaymentSuccess = () => {
  return (
    <VStack height={'100vh'} justifyContent={'center'}>
        <Heading>You have Pro Pack</Heading>
        <SuccessCard />
    </VStack>
  )
}
const SuccessCard = () => {
    return (
        <Card align='center' maxW={'md'}>
            <CardHeader>
                <Heading color={'green'} size='md'> Payment Success</Heading>
            </CardHeader>
            <CardBody>
                <Text>Congratulations you're a pro member. You have access to premium content</Text>
                <Heading color={'green'} display={'flex'} justifyContent={'center'} size={'4xl'}>
                <RiCheckboxCircleFill  />
                </Heading>
            </CardBody>
            <CardFooter>
                <VStack mt={'-9'}>
                <Button variant={'ghost'} w={'full'} colorScheme='blue'>Go to Profile</Button>
                <Heading size={'xs'}>
                    Reference: sdfghjk56e9876
                </Heading>
                </VStack>
            </CardFooter>
        </Card>
    )
}
export default PaymentSuccess
