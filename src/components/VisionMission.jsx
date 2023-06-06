import React from "react";
import { styles } from "../styles";
import Vision from "../assets/Vision.png";
import Mission from "../assets/Mission.png";
import Values from "../assets/Values.png";
import { motion } from "framer-motion";

const VisionMission = () => {
  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div className="mt-32">
        <h2 className={`${styles.sectionHeadText} text-center `}>
          VISION & MISSION
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-20   mx-[15%]">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUpVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="bg-[#FFFFFF] rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col drop-shadow-2xl mt-20"
          >
            <div className="bg-[#3BCDC8] rounded-[50%] shadow-xl w-20 h-20 mt-[-80px]">
              <img
                src={Vision}
                alt="Superior Service"
                className="w-16 h-16 object-contain mt-3 ml-2"
              />
            </div>
            <h5 className="my-6 text-[30px] text-black font-bold">Vision</h5>
            <p className="mb-8 text-[12px] text-gray-400 text-justify">
              SECO Electrical Services: Leading the way in international
              electrical solutions, driving growth and delivering excellence
              with a focus on plumbing, solar, elevator, and engineering.
              Harnessing our expertise in sustainable power systems for a
              brighter future.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUpVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="bg-[#FFFFFF] rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col drop-shadow-2xl mt-20"
          >
            <div className="bg-[#FC9B14] rounded-[50%] shadow-xl w-20 h-20 mt-[-90px]">
              <img
                src={Mission}
                alt="Superior Service"
                className="w-12 h-12 object-contain mt-3 ml-4"
              />
            </div>
            <h5 className="my-6 text-[30px] text-black font-bold">Mission</h5>
            <p className="mb-8 text-[12px] text-gray-400 text-justify">
              To provide the most reliable service with the best affordable
              products to customers while building of basic infrastructure of
              electrical requirement in our country. Secco Power will never fail
              customers expectation and we will vow to exceed it.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUpVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="bg-[#FFFFFF] rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col drop-shadow-2xl mt-20"
          >
            <div className="bg-[#CF1050] rounded-[50%] shadow-xl w-20 h-20 mt-[-90px]">
              <img
                src={Values}
                alt="Superior Service"
                className="w-12 h-12 object-contain mt-3 ml-4"
              />
            </div>
            <h5 className="mt-6 text-[30px] text-black font-bold">OUR VALUE</h5>
            <p className="mb-8 text-[20px] text-gray-400 text-justify">
              1. EXCELLENCE
              <br />
              2. FLEXIBILITY
              <br />
              3. INTEGRITY&PEOPLE
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
