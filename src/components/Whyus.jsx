import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Box, VStack } from '@chakra-ui/react'
import content from "../assets/content.png"
import learn from "../assets/learn.png"
import seo from "../assets/seo.jpg"
const Whyus = () => {
    return (
        <VStack>
            <Heading fontSize={"1.2rem"}>Why Learnr ?</Heading>
            <Heading display={'flex'} justifyContent={'center'} alignItems={'center'} padding={"30px"} fontSize={["1.3rem", "2rem"]}>Making learning easier and more convenient for you.</Heading>
            <Stack display={"flex"} flexDirection={["column", "row"]} padding={"10px"} minHeight={"100vh"} width={"full"} justifyContent={"space-between"} alignItems={"center"} gap={['20px', '']}>
            <WhyCard image={seo} title={"Curated Content"} text={"Learn in-depth conceptual overviews, how to implement it & how to optimize it."} />
            <WhyCard image={content} title={"Learn From The Best"} text={"Get access to lectures and get mentored by one of the best Professionals in the market."}/>
            <WhyCard image={learn} title={"Learn Something New"} text={"Learn new concepts daily, increase your productivity & reach your full potential."}/>
        </Stack>
        </VStack>
    )
}
const WhyCard = ({image , title, text}) =>{
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
                            {text}
                        </Text>
                    </Stack>
                    <Box mt="4" borderTop="2px solid #008080" />
                </CardBody>
            </Card>
    )
}
export default Whyus
