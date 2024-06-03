import React from 'react';
import List from './Header-Components/List'
import list from '../assets/list.png'
import Header_left from './Header-Components/Header_left'
import Header_right from './Header-Components/Header_right'

const Header = () => {
  return (
    <div className=''>
      <div className='flex flex-row'>
        <div className='flex flex-row grow'>
          <div className=' text-customDarkPurple font-bold text-shadow text-4xl basis-1/2 '>Lefly</div>
          <div className='basis-1/2'><List /></div>
          <div className="ml-[50px] mb-[25px] drop-shadow-sm"><img src={list} alt="list"/></div>
        </div>
      </div>
      <div className='flex flex-row'>
        <Header_left  />
        <Header_right  />
      </div>
      
    </div>      
  );
};

export default Header;
