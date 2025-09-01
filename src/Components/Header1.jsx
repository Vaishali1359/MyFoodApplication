import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

function Header() {
  return (
    <div className='bg-[hsl(60,3%,31%)] overflow-x-hidden'>
      <div className="mx-4 p-2 sm:mx-12">
        <div className="flex flex-col sm:flex-row justify-between items-center text-black gap-4">
          
          {/* Contact Info */}
          <ul className="flex flex-wrap sm:flex-nowrap items-center bg-[hsl(60,3%,31%)] px-4 sm:px-8 leading-none gap-4 text-sm whitespace-nowrap">
            <li className="flex items-center font-sans tracking-wide gap-2 text-white">
              <IoCallOutline />
              (414) 875-0107
            </li>
            <li className="flex items-center font-sans tracking-wide gap-2 text-white">
              <IoMailOutline />
              yummy@bistrobilss.com
            </li>
          </ul>

          {/* Social Icons - hidden on small devices */}
          <div className="hidden sm:flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#86868095] text-white hover:text-black transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#86868095] text-white hover:text-black transition-colors"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#86868095] text-white hover:text-black transition-colors"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#86868095] text-white hover:text-black transition-colors"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
