import { Button, Container, HStack, Heading, Input,Stack,Text, VStack,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/courses.css";
const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lecture})=>{
  return(
    <VStack className='course' alignItems={['center','flex-start']}>
      <Image src={imageSrc} boxSize='60' objectFit={'contain'} />
      <Heading textAlign={['center','left']} maxW={'200px'} fontFamily={'sans-serif'} noOfLines={3} size={'sm'}>{title}</Heading>
      <Text noOfLines={2}>{description}</Text>

      <HStack>
      <Text textTransform={'uppercase'} fontWeight={'bold'}>Creator:</Text>
      <Text fontFamily={'body'} textTransform={'uppercase'}>{creator}</Text>
      </HStack>

      <Heading textTransform={'uppercase'} textAlign={'center'} size={'xs'}>{`Lectures - ${lecture}`}</Heading>


      <Heading textTransform={'uppercase'} textAlign={'center'} size={'xs'}>{`Views - ${views}`}</Heading>

      <Stack direction={['column','row']} alignItems={'center'}>
        <Link to={`/course/${id}`} >
          <Button colorScheme='blue'>Watch Now</Button>
        </Link>
        <Button variant={'ghost'} colorScheme='blue' onClick={()=> addToPlaylistHandler(id)}>Add to Playlist</Button>
      </Stack>

    </VStack>
  )
}

const Courses = () => {

  const [keyword,setKeyword] = useState('');
  const [category,setCategory] = useState('');

  const addToPlaylistHandler =()=>{
    console.log("Added to playlist")
  }
  const categories = [
    'Web development','App development','Game development' ,'Artificial inteligence','Data structure & Algorithm', 'Data science'
  ]
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading m={'8'}>ALL COURSES</Heading>
      <Input onChange={e => setKeyword(e.target.value)} value={keyword} type='text'  placeholder='Search a Course..'/>
      <HStack overflowX={'auto'} paddingY={'8'} css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {
          categories.map((item,index)=>(
            <Button colorScheme='blue' key={index} onClick={()=>setCategory(item)} minW={'60'}>
              <Text>{item}</Text>
            </Button>
          ))
        }
      </HStack>
      <Stack direction={['column','row']} flexWrap={'wrap'} justifyContent={['flex-start','space-evenly']} alignItems={['center','flex-start']}>
        <Course title={'Sample'} description={'sample'} views={'2K'} imageSrc={'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg'} id={'sample'} creator={'sample'} lecture={2} addToPlaylistHandler={addToPlaylistHandler}/>

      </Stack>
    </Container>
  )
}

export default Courses
