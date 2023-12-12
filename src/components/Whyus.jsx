import React from 'react'
import { Card, CardBody, Stack, Heading, Text, HStack,Box, VStack } from '@chakra-ui/react'
import content from "../assets/content.png"
import learn from "../assets/learn.png"
import seo from "../assets/seo.jpg"
const Whyus = () => {
    return (
        <VStack>
            <Heading fontSize={"1.2rem"}>Why Learnr ?</Heading>
            <Heading>Making learning easier and more convenient for you.</Heading>
            <HStack padding={"30px"} height={"100vh"} width={"full"} justifyContent={"space-between"} alignItems={"center"}>
            <WhyCard image={seo} title={"Curated Content"} />
            <WhyCard image={content} title={"Learn From The Best"}/>
            <WhyCard image={learn} title={"Learn Something New"}/>
        </HStack>
        </VStack>
    )
}
const WhyCard = ({image , title}) =>{
    return(
        <Card maxW='sm'>
                <CardBody>
                    <img style={{height: "80px", width: "80px", borderRadius: "50%", marginLeft: "120px"}}
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading alignSelf={"center"} size='md'>{title}</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                    <Box mt="4" borderTop="2px solid #008080" />
                </CardBody>
            </Card>
    )
}
export default Whyus
