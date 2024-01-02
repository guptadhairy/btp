import { HStack, Heading, VStack, Text, Button, Stack, Image } from '@chakra-ui/react'
import React from 'react'
import {RiDeleteBin7Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'

const Profile = ({user}) => {
    
    const removePlaylistHandler = id => {
        console.log(id);
    }
  return (
    <VStack minH={'100vh'} padding={'30px'} justifyContent={'center'}>
        <Heading>Profile</Heading>
        <HStack mt={'10'}>
            <Text fontWeight={'bold'}>Name : </Text>
            <Text>{user.name}</Text>
        </HStack>
        <HStack>
            <Text fontWeight={'bold'}>Email : </Text>
            <Text>{user.email}</Text>
        </HStack>
        <HStack>
            <Text fontWeight={'bold'}>Created At : </Text>
            <Text>{user.createdAt.split("T")[0]}</Text>
        </HStack>
        {
            user.role !== 'admin' && <HStack>
                <Text fontWeight={'bold'}>Subscription : </Text>
                {
                    user.subscription && user.subscription.status === "active" ? (
                        <Button colorScheme='blue'>Cancel Subscription</Button>
                    ):
                    <Link to={'/subscribe'}><Button colorScheme='blue'>Subscribe</Button></Link>
                }
            </HStack>
        }
        <HStack mt={'2'}>
            <Link to={'/updateprofile'}><Button colorScheme='blue'>Update Profile</Button></Link>
            <Link to={'/changepassword'}><Button colorScheme='blue'>Change Password</Button></Link>
        </HStack>
        <Heading mt={'8'}>PlayList</Heading>
        {
            user.playlist.length > 0 &&(
                <Stack direction={['column' , 'row']}
                alignItems={'center'} flexWrap={'wrap'} p={'4'}>
                    {
                        user.playlist.map((element, index) =>(
                            <VStack w={'48'} m={'2'} key={element.course}>
                                <Image boxSize={'full'} objectFit={'contain'} src={element.poster} />

                                <HStack>
                                    <Link to={`/course/${element.course}`}>
                                        <Button colorScheme='blue'>Watch Now</Button>
                                    </Link>
                                    <Button onClick={() => removePlaylistHandler(element.course)}>
                                        <RiDeleteBin7Fill />
                                    </Button>
                                </HStack>
                            </VStack>
                        ))
                    }
                </Stack>
            )
        }
    </VStack>
  )
}

export default Profile
