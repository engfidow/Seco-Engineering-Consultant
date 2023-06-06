import React from 'react';

const Centerinfo = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-10" >
      <div className="bg-[#F3F8FF]  py-5 px-12  flex justify-evenly items-center flex-col drop-shadow-md border-r-2 border-r-dashed  border-gray-300">
       <h4 className='text-[#DB2930] text-2xl my-8'>Office</h4>
       <p className='text-black'>0612910628</p>
      </div>
      <div className="bg-[#F3F8FF]  py-5 px-12  flex justify-evenly items-center flex-col drop-shadow-md border-r-2 border-r-dashed  border-gray-300">
      <h4 className='text-[#DB2930] text-2xl my-8'>CAL CENTER</h4>
       <p className='text-black'>188</p>
      </div>
      <div className="bg-[#F3F8FF]  py-5 px-12  flex justify-evenly items-center flex-col drop-shadow-md border-gray-300">
      <h4 className='text-[#DB2930] text-2xl my-8'>WORKING HOURS</h4>
       <p className='text-black'>24/7 hours available</p>
      </div>
    </div>
  );
}

export default Centerinfo;
