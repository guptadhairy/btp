import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';


const AdminCourses = () => {
    const courses = [{
        _id: "asdfghjkl",
        title: "React Course",
        category: "Web development",
        poster: {
          url: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
        },
        createdBy: "dhiru_gupta",
        views: 123,
        numOfVideos: 13
    }];
    const {isOpen, onClose, onOpen} = useDisclosure();
    const courseDetailHandler = userId =>(
        onOpen()
    );
    const deleteButtonHandler = userId =>(
        console.log(userId)
    );
    const deleteLectureButtonHandler = (courseId, lectureId) => {
      console.log(courseId);
      console.log(lectureId)
    };
    const addLectureHandler = (e, courseId, title, description, video)=>{
      e.preventDefault();
    };
    
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '8']} overflowX={'auto'}>
            <Heading my={'16'} textAlign={['center', 'left']}>All Courses</Heading>
            <TableContainer w={['100vw', 'full']}>
                <Table variant={'simple'} size={'lg'}>
                    <TableCaption>All available courses in the databases</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Poster</Th>
                            <Th>Title</Th>
                            <Th>Category</Th>
                            <Th>Creator</Th>
                            <Th isNumeric>Views</Th>
                            <Th isNumeric>Lectures</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            courses.map(item =>(
                                <Row courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <CourseModal isOpen={isOpen} onClose={onClose} courseTitle="React Course" id={"1234qwer"} deleteButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler} />
        </Box>
        <Sidebar />
    </Grid>
  )
};



export default AdminCourses;

function Row({item, courseDetailHandler, deleteButtonHandler}){
    return(
        <Tr>
            <Td>#{item._id}</Td>
            <Td>
              <Image src={item.poster.url} />
            </Td>
            <Td>{item.title}</Td>
            <Td>{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.numOfVideos}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => courseDetailHandler(item._id)} color={'blue'} variant={"outline"}>View Lectures</Button>
                    <Button onClick={() => deleteButtonHandler(item._id)} color={'blue'}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}
