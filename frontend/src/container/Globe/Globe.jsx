import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import "./Globe.scss";
import { images } from '../../constants';

const Globe = () => {

  return (
    <>
      <div>
        <div className='globe__container'>
          <div className='map-heading '>
            <h2 className='head-text'>Mapping the G20</h2>
            <p className='p-text'>Exploring the Geographical Diversity of the World's Major Economies" - Take a closer look at the G20 countries on a map and explore the geographical diversity of these major economies from around the world.</p>
          </div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__flex globeTile'>

            <img src={images.globe_png} alt='globe' />
            <p className='p-text'>The world is a beautiful book, and each culture is a unique chapter that tells its own story</p>

          </motion.div>
        </div>
        <section id="explore-G20">
          <center> <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rWVL7-ObutJZd9PlLtzqS4kounhEzHg&ehbc=2E312F" width="60%" height="480"></iframe></center>
        </section>

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Globe, 'globe'), 'globe', 'app__color2bg');
// export default AppWrap(
//   MotionWrap(Globe, 'globe'), 'globe', 'app__primarybg');
