"use client"
import React from 'react'
import "../styles/marque.css"
import Marquee from "react-fast-marquee";
import rt from "../assets/react.png";
import next from "../assets/next.png";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import { Heading, VStack } from '@chakra-ui/react';
const Marque = ({direction="left"}) => {
  return (
    <VStack>
        <Heading padding={"30px"}>Top Courses</Heading>
      <Marquee  style={{ marginTop: "-100px",width: '100%'}} speed={80} pauseOnHover={true} direction={direction}>
      <div className='image_wraper' >
      <img className="imgSkill"  src={rt} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img className="imgSkill" src={next} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img className="imgSkill2" src={html} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img className="imgSkill" src={css} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img className="imgSkill" src={js} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img className="imgSkill2" src={html} alt="profile"  />
        </div>
          </Marquee>
    </VStack>
  )
}

export default Marque
