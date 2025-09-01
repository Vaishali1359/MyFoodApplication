import React from 'react';

import { GrNotes } from "react-icons/gr";

const Video = () => {
  return (
    <div className="w-full  px-4 py-8">
      
      <iframe className='w-full h-[35rem]' width="560" height="315" src="https://www.youtube.com/embed/43-G0Fl-rko?si=NXKeiZaLdXy92puu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

     

      <div className="flex flex-col lg:flex-row gap-6 m-12 justify-center">
    
         <div className='flex flex-1'>
        <GrNotes className='h-8 w-20 text-black mt-2  ' />
        <div className='flex flex-col'>
          <h4>Hello sanaya</h4>
          <p className='mt-3 text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, expedita.</p>
        </div>
      </div>

      
         <div className='flex flex-1'>
        <GrNotes className='h-8 w-20 text-black mt-2  ' />
        <div className='flex flex-col'>
          <h4>Hello sanaya</h4>
          <p className='mt-3 text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, expedita.</p>
        </div>
      </div>

        
        <div className='flex flex-1'>
        <GrNotes className='h-8 w-20 text-black mt-2 ' />
        <div className='flex flex-col'>
          <h4>Hello sanaya</h4>
          <p className='mt-3 text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, expedita.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Video;
