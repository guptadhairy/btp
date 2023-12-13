import React from 'react'
import {Card, CardBody, CardHeader, CardFooter, Heading, Text, Button, VStack} from "@chakra-ui/react"
const Subscribe = () => {
    return (
        <VStack height={'100vh'} justifyContent={'center'}>
            <SubscribeCard />
        </VStack>
    )
}
const SubscribeCard = () => {
    return (
        <Card align='center' maxW={'md'}>
            <CardHeader>
                <Heading size='md'> Become a Pro Member</Heading>
            </CardHeader>
            <CardBody>
                <Text>Join our pro pack and get access to all content.</Text>
                <Text display={'flex'} justifyContent={'center'}>100% refund at cancellation</Text>
                <Heading mt={'4'} display={'flex'} justifyContent={'center'} size={'md'}> ₹299 Only</Heading>
            </CardBody>
            <CardFooter>
                <Button w={'full'} colorScheme='blue'>Buy Now</Button>
            </CardFooter>
        </Card>
    )
}
export default Subscribe
