import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';
const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blogs',
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#',
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#',
  },
];

const Navbar = ({ handleWithOrderPopup }) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between'>
          {/* logo and links section */}
          <div className='flex items-center gap-4'>
            <a
              href='#'
              className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
            >
              Eshop
            </a>

            {/* Menu Item */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {MenuLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                {/* dropdown */}
                <li className='relative cursor-pointer group'>
                  <a
                    href='#'
                    className='flex items-center gap-[2px] font-semibold
                    text-gray-500 dark:hover:text-white py-2'
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className='group-hover:rotate-180 duration-300' />
                    </span>
                  </a>
                  {/* drop down links */}
                  <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                    <ul className='space-y-2'>
                      {DropdownLinks.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.link}
                            className='text-gray-500 dark:text-gray-400 hover:text-black duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className='flex justify-between items-center gap-4'>
            {/* search icon */}
            <div className='relative group hidden sm:block'>
              <input
                type='text'
                placeholder='Search'
                className='search-bar'
              />
              <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 duration-200' />
            </div>
            {/* order-button icon */}
            <button className='relative p-3'>
              <FaCartShopping
                className='text-xl text-gray-600 dark:text-gray-400'
                onClick={() => handleWithOrderPopup()}
              />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex justify-center items-center text-xs'>
                4
              </div>
            </button>
            {/* Dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
