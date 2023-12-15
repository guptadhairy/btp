import { Container, Grid, Heading, Input, Select, VStack, Image, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const categories = [
    'Web development','App development','Game development' ,'Artificial inteligence','Data structure & Algorithm', 'Data science'
  ]

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: "100%",
    backgroundColor: 'white',
    color: 'blue',
};
const fileUploadStyle = {
    '&::file-selector-button' : fileUploadCss,
};

const CreateCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");

    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
    
        reader.onloadend = () =>{
            setImagePrev(reader.result);
            setImage(file);
        };
    };
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Container py={'16'}>
            <form>
                <Heading my={'16'} textAlign={['center', 'left']}>Create Course</Heading>
                <VStack m={'auto'} spacing={'8'}>
                    <Input value={title} onChange={(e) =>setTitle(e.target.value)} placeholder='Title' type='text' />
                    <Input value={description} onChange={(e) =>setDescription(e.target.value)} placeholder='Description' type='text' />
                    <Input value={createdBy} onChange={(e) =>setCreatedBy(e.target.value)} placeholder='Creator Name' type='text' />
                    <Select  value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">Category</option>
                        {categories.map((item, index) =>(
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </Select>
                    <Input accept='image/*' required type='file' css={fileUploadStyle} onChange={changeImageHandler}/>
                    {
                        imagePrev && (
                            <Image src={imagePrev} boxSize={'64'} objectFit={'contain'}  />
                        )
                    }
                    <Button w={'full'} colorScheme='blue' type='submit'>Create</Button>
                </VStack>
            </form>
        </Container>
        <Sidebar />
    </Grid>
  )
}

export default CreateCourse
