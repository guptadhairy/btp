"use client"
import React from 'react'
import "../styles/marque.css"
import Marquee from "react-fast-marquee";
import rt from "../assets/mongo.png";
import next from "../assets/ts.png";
import html from "../assets/node.png";
import css from "../assets/ex.png";
import js from "../assets/rtk.jpg";

const Marque = ({direction="right"}) => {
  return (
    <div>
      <Marquee  style={{marginTop: '-150px', width: '100%'}} speed={80} pauseOnHover={true} direction={direction}>
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
    </div>
  )
}

export default Marque
