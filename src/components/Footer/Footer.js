import React from 'react';
import { socialIcons } from '../../Data';

const Footer = () => {
  return (
    <div className='flex justify-between items-center max-w-7xl mx-auto gap-8 py-4 px-4'>
      <div className="copyRight">
        <p className='text-sm'>
          Copyright&copy;2023 All rights reserved| Made by <span className='text-white capitalize font-bold'>sufian</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <h4 className='capitalize text-sm'>follow me</h4>
        <div className="h-1 w-12 bg-black"></div>
        <div className="flex gap-2 transition-all duration-700">
          {socialIcons.map((socialIcon, index) => (
            <div key={index} className='cursor-pointer hover:scale-110 hover:text-white'>{socialIcon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;