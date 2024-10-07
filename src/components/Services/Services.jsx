import React from 'react';
import {
  FaCarSide,
  FaCheckCircle,
  FaHeadphones,
  FaWallet,
} from 'react-icons/fa';

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Order',
  },
  {
    id: 2,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: 'Safe Money',
    description: '30 Days Money Back',
  },

  {
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: 'Secure Payment',
    description: 'All Payment Secure',
  },

  {
    id: 4,
    icon: <FaHeadphones className='text-4xl md:text-5xl text-primary' />,
    title: 'Online Supoort 24/7',
    description: 'Technical Support 24/7',
  },
];

const Services = () => {
  return (
    <div>
      <div className='container my-14 md:my-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
          {ServiceData.map((service) => (
            <div
              key={service.id}
              className='flex flex-col items-start gap-4 sm:flex-row '
            >
              <div>{service.icon}</div>
              <div>
                <h2 className='lg:text-xl font-bold'>{service.title}</h2>
                <p className='text-sm text-gray-400'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
