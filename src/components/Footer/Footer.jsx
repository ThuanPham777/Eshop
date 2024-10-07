import React from 'react';
import Button from '../Shared/Button';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobile,
  FaPhone,
  FaPlane,
} from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-900'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
          {/* company details */}
          <div className='py-8 px-4'>
            <div>
              <a
                href='#'
                className='uppercase text-2xl font-semibold text-primary tracking-widest sm:text-3xl'
              >
                Eshop
              </a>
              <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores alias cum
              </p>
              <p className='text-gray-500 mt-4'>
                Made with 💖 by The Coding Journey
              </p>
            </div>
            <div className='mt-4'>
              <Button
                text='Visit our YouTube Channel'
                bgColor='bg-primary'
                textColor='text-white'
              />
            </div>
          </div>
          {/* Footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4 flex flex-col gap-4'>
              <h1 className='text-xl font-bold'>Important Links</h1>
              {FooterLinks.map((link) => (
                <a
                  href={link.link}
                  className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className='py-8 px-4 flex flex-col gap-4'>
              <h1 className='text-xl font-bold'>Quick Links</h1>
              {FooterLinks.map((link) => (
                <a
                  href={link.link}
                  className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                >
                  {link.title}
                </a>
              ))}
            </div>
            {/* address company */}
            <div className='py-8 px-4 flex flex-col gap-4'>
              <h1 className='text-xl font-bold'>Address</h1>
              <div className='flex items-center gap-2'>
                <FaLocationArrow />
                <p>Noida , Uttar Pradesh</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaMobile />
                <p>+91 1234567890</p>
              </div>
              <div className='flex gap-4'>
                <a
                  href=''
                  className='text-3xl hover:text-primary duration-200'
                >
                  <FaInstagram />
                </a>
                <a
                  href=''
                  className='text-3xl hover:text-primary duration-200'
                >
                  <FaFacebook />
                </a>
                <a
                  href=''
                  className='text-3xl hover:text-primary duration-200'
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
