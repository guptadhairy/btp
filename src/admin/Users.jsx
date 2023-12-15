import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';


const Users = () => {
    const users = [{
        _id: "asdfghjkl",
        name: "Dhiru",
        email: "dhiru@gmail.com",
        role: "admin",
        subscription: {
            status: "active"
        },
    }];
    const updateHandler = userId =>(
        console.log(userId)
    );
    const deleteHandler = userId =>(
        console.log(userId)
    );

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '16']} overflowX={'auto'}>
            <Heading my={'16'} textAlign={['center', 'left']}>All Users</Heading>
            <TableContainer w={['100vw', 'full']}>
                <Table variant={'simple'} size={'lg'}>
                    <TableCaption>All available users in the databases</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Subscription</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            users.map(item =>(
                                <Row updateHandler={updateHandler} deleteHandler={deleteHandler} key={item._id} item={item} />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        <Sidebar />
    </Grid>
  )
};



export default Users;

function Row({item, updateHandler, deleteHandler}){
    return(
        <Tr>
            <Td>#{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription.status==="active" ? "Active" : "Not Active" }</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => updateHandler(item._id)} color={'blue'} variant={"outline"}>Change Role</Button>
                    <Button onClick={() => deleteHandler(item._id)} color={'blue'}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}
