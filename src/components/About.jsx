import React from "react";
// import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] drop-shadow-xl ml-20 mt-5'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Superior Service'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-black-200 text-[15px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Secco, established in 2008, provides clean and sustainable energy solutions in Somalia. 
        as a full-service engineering firm, we cover plumbing, elevator, solar, electrical, and 
        remodeling. our knowledgeable professionals handle electrical problems with care, regardless 
        of size.We prioritize 100% client satisfaction on every project, ensuring respectful and careful 
        service. distinguished by skilled employees and a polite demeanor, we stand out among service businesses. 
      </motion.p>

      <div className='ml-0 mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
