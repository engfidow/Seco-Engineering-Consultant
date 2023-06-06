import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[220px]  max-w-7xl lg:ml-20 md:mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
          Experienced<span className='text-[#915EFF]'>  Electrical Services</span>
          </h1>
          
         
           
          
          
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
          Delivering reliable, affordable electrical solutions, we build essential<br className='sm:block hidden' />
          infrastructure while prioritizing customer satisfaction. Our experienced<br/>
          team tackles challenges with expertise, offering top-quality services for<br/>
          successful projects. From precise installations to efficient maintenance, <br/>
          we prioritize safety and equipment performance.

          
          </p>
        </div>
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 sm:hidden'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
