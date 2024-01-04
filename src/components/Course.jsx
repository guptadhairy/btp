import { Button, Container, HStack, Heading, Input,Stack,Text, VStack,Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/courses.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../redux/actions/profile';
import {loadUser} from "../redux/actions/user";

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

  const addToPlaylistHandler =async(courseId)=>{
    console.log(courseId);
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  }
  const categories = [
    'Web development','App development','Game development' ,'Artificial inteligence','Data structure & Algorithm', 'Data science'
  ];
  const {error, courses, message} = useSelector(state => state.course);

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getAllCourses(category, keyword));
    if(error) {
      toast.error(error);
      dispatch({type: 'clearError'});
    }
    if(message) {
      toast.success(message);
      dispatch({type: 'clearMessage'});
    }

  },[category, keyword, dispatch, error, message]);

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
        {
          courses.length > 0 ? courses.map((item) =>(
            <Course key={item._id} title={item.title} description={item.description} views={item.views} imageSrc={item.poster.url} id={item._id} creator={item.createdBy} lecture={item.numOfVideos} addToPlaylistHandler={addToPlaylistHandler}/>
          )) : <Heading>Course not Found</Heading>
        }

      </Stack>
    </Container>
  )
}

export default Courses
