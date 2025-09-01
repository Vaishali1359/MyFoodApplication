import React from 'react'

import { SiFoodpanda } from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Buttom from './Buttom';



const Footer1 = () => {
  return (
    <div className="w-full bg-[hsl(60,3%,31%)] py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid gap-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        
        <div>
       <div className="text-3xl flex font-bold text-white tracking-wider my_font px-2 leading-[1em]">
                 <SiFoodpanda className="mr-2 mb-1" />
                 My Food
               </div>
          <p className="py-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam
            iste repellat consequatur libero reiciendis, blanditiis accusantium.
          </p>
          
          
          <div className="flex space-x-4 mt-6 rounded-full">
            <FaFacebookF size={25} className="w-9 h-9 flex items-center justify-center rounded-full p-1  bg-[rgba(245,40,40,0.8)] text-white hover:text-black transition-colors" />
            <FaTwitter size={30} className='w-9 h-9 flex items-center justify-center rounded-full p-1  bg-[rgba(245,40,40,0.8)] text-white hover:text-black transition-colors' />
            <FaInstagram size={30}className='w-9 h-9 flex items-center justify-center rounded-full p-1  bg-[rgba(245,40,40,0.8)] text-white hover:text-black transition-colors' />
           <FaLinkedinIn size={25} className='w-9 h-9 flex items-center justify-center rounded-full p-1  bg-[rgba(245,40,40,0.8)] text-white hover:text-black transition-colors' />
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-wrap justify-between gap-4">
          <div>
            <h6 className="font-medium ">Pages</h6>
            <ul>
              <li className="py-2 text-sm">Home</li>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Menue</li>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Contact</li>
              <li className="py-2 text-sm">Delivery</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium">Utility Pages</h6>
            <ul>
              <li className="py-2 text-sm">Start Here</li>
              <li className="py-2 text-sm">Style guide</li>
              <li className="py-2 text-sm">Password protect</li>
              <li className="py-2 text-sm">404 not found</li>
              <li className="py-2 text-sm">Licenses</li>
              <li className="py-2 text-sm">Changelog</li>
              <li className="py-2 text-sm">View More</li>
              
            </ul>
          </div>

          <div className="w-full sm:w-[450px]">
            <h6 className="font-medium mb-4">Follow us on Instagram</h6>
            <div className="grid grid-cols-2 gap-2 py-1">
              <img src='https://i.pinimg.com/1200x/e5/53/ed/e553ed9aa4f95425e460e6ea369778fe.jpg' alt="" className="rounded-md w-full h-auto object-cover" />
              <img src='https://i.pinimg.com/736x/b1/35/30/b13530edf1be6ec329107e870d4f80e1.jpg' alt="" className="rounded-md w-full h-auto object-cover" />
              <img src='https://i.pinimg.com/1200x/49/f8/3a/49f83a24a6b8ed4bbb5d8cc6b04f6a62.jpg' alt="" className="rounded-md w-full h-auto object-cover" />
              <img src='https://i.pinimg.com/736x/3a/21/ea/3a21ea1a83804ab9cefd5957ceb47bd5.jpg' alt="" className="rounded-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        
      </div>
      <Buttom />
    </div>
    
  )
}

export default Footer1
