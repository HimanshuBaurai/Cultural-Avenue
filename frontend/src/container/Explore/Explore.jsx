import React from 'react'
import { motion } from 'framer-motion'
import { MotionWrap, AppWrap } from '../../wrapper'
import MediaControlCard from './AudioCard'
import { images } from '../../constants'

const Explore = () => {
  return (
    <>
      <h2 className='head-text'>Rhythms of the World</h2>
      <p className='p-text1'> Across every continent and culture, music plays a vital role in shaping identity and fostering connections between individuals and communities, from traditional folk songs to modern pop hits.</p>


      <div className='app__profiles'>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image='https://www.echinesesong.com/wp-content/uploads/2018/07/Mo-Li-Hua-%E8%8C%89%E8%8E%89%E8%8A%B1-Jasmine-Flower-Lyrics-%E6%AD%8C%E8%A9%9E-With-Pinyin-By-Chinese-Children.jpg' title='China: "Jasmine Flower"' audioPath={images.China} />
          <h2 className='bold-text' style={{ marginTop: 20 }}>Dressing the G20</h2>
          <p className='p-text' style={{ marginTop: 10 }}>A Journey Through Culture and Tradition" - Immerse yourself in the diverse cultures and traditions of the G20 nations through their beautiful and distinctive attire.</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image='https://www.echinesesong.com/wp-content/uploads/2018/07/Mo-Li-Hua-%E8%8C%89%E8%8E%89%E8%8A%B1-Jasmine-Flower-Lyrics-%E6%AD%8C%E8%A9%9E-With-Pinyin-By-Chinese-Children.jpg' title='China: "Jasmine Flower"' audioPath={images.China} />
          <h2 className='bold-text' style={{ marginTop: 20 }}>Dressing the G20</h2>
          <p className='p-text' style={{ marginTop: 10 }}>A Journey Through Culture and Tradition" - Immerse yourself in the diverse cultures and traditions of the G20 nations through their beautiful and distinctive attire.</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image='https://www.echinesesong.com/wp-content/uploads/2018/07/Mo-Li-Hua-%E8%8C%89%E8%8E%89%E8%8A%B1-Jasmine-Flower-Lyrics-%E6%AD%8C%E8%A9%9E-With-Pinyin-By-Chinese-Children.jpg' title='China: "Jasmine Flower"' audioPath={images.China} />
          <h2 className='bold-text' style={{ marginTop: 20 }}>Dressing the G20</h2>
          <p className='p-text' style={{ marginTop: 10 }}>A Journey Through Culture and Tradition" - Immerse yourself in the diverse cultures and traditions of the G20 nations through their beautiful and distinctive attire.</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <MediaControlCard image='https://www.echinesesong.com/wp-content/uploads/2018/07/Mo-Li-Hua-%E8%8C%89%E8%8E%89%E8%8A%B1-Jasmine-Flower-Lyrics-%E6%AD%8C%E8%A9%9E-With-Pinyin-By-Chinese-Children.jpg' title='China: "Jasmine Flower"' audioPath={images.China} />
          <h2 className='bold-text' style={{ marginTop: 20 }}>Dressing the G20</h2>
          <p className='p-text' style={{ marginTop: 10 }}>A Journey Through Culture and Tradition" - Immerse yourself in the diverse cultures and traditions of the G20 nations through their beautiful and distinctive attire.</p>
        </motion.div>

      </div>
    </>

  )
}

export default AppWrap(
  MotionWrap(Explore, 'app__about'), 'explore', 'app__color3bg');
// export default AppWrap(
//   MotionWrap(Explore, 'app__about'), 'explore', 'app__whitebg');