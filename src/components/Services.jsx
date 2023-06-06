import React from "react";
import {MdOutlineElectricBolt, MdOutlineTroubleshoot} from "react-icons/md"
import {GiAutoRepair} from "react-icons/gi"
import {FiTool} from "react-icons/fi"
import {FaSolarPanel} from "react-icons/fa"
import {TfiMoreAlt} from "react-icons/tfi"
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


const Services = () => {
  return (
    <>
      <div className="my-20 ">
      <h2 className={`${styles.sectionHeadText} text-center text-black-200`}>Services.</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-10" >

          <div className="text-left p-6 text-[14px] cursor-pointer bg-white border-r-8 hover:bg-transparent shadow-md"  >
            <span className="text-[32px] text-red-500"><MdOutlineElectricBolt/></span>
            <h2 className="mb-2 mt-8 text-[25px] text-black-200">SOLAR INSTALLATION</h2>
            <p className="mb-8 text-[15px] text-gray-400">
            Seco Electrical Services: Knowledgeable and friendly team specializing in diverse s
            olar and electrical installations for managers, businesses, government organizations, 
            and individuals across Somalia. Committed to providing comprehensive and timely maintenance 
            services for domestic, industrial, and commercial businesses with experienced and courteous 
            staff.
            </p>
          </div>
          
          <div className="text-left p-6 text-[14px] cursor-pointer bg-white border-r-8 hover:bg-transparent shadow-md">
            <span className=" text-[32px] text-red-500"><GiAutoRepair/></span>
            <h2 className="mb-2 mt-8 text-[25px] text-black-200">MAINTENANCE</h2>
            <p className="mb-8 text-[15px] text-gray-400">
            Our expertise lies in maintenance, testing, and commissioning of 
            low-current systems for modern industrial, commercial, and healthcare 
            structures. We prioritize meticulous quality controls through T&C to safeguard 
            intricate data center infrastructures with their complex interconnections and
            interdependencies.
            </p>
          </div>

          <div className="text-left p-6 text-[14px] cursor-pointer bg-white border-r-8 hover:bg-transparent shadow-md">
            <span className=" text-[32px] text-red-500"><FiTool/></span>
            <h2 className="mb-2 mt-8 text-[25px] text-black-200">ENGINEERING CONSULTANT</h2>
            <p className="mb-8 text-[15px] text-gray-400">
            Our expertise lies in maintenance, testing, and commissioning of low-current 
            systems for modern industrial, commercial, and healthcare structures. We prioritize 
            meticulous quality controls through T&C to safeguard intricate data center infrastructures 
            with their complex interconnections and interdependencies.
            </p>
          </div>

          

         

          
        </div>
      </div>
    </>
  );
};


export default SectionWrapper(Services, "services");