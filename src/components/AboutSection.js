import React from "react";
import home1 from "../img/home1.png";
import Wave from "./wave";
import { About, Description, Image, Hide } from "../styles";

import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnimation}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Your <span>Dream</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. we
          have proffessional with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          initial='hidden'
          animate='show'
          src={home1}
          alt='Guy with a camera'
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
