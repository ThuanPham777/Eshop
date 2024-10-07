import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Banner = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Component phải vào 10% tầm nhìn thì hiệu ứng xảy ra
  });

  return (
    <div
      className='min-h-[550px] flex justify-center items-center py-12'
      ref={ref}
    >
      <div className='container'>
        <motion.div
          style={{ backgroundColor: data.bgColor }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Chỉ animate khi inView
          transition={{ duration: 0.8 }}
        >
          {/* first col */}
          <motion.div
            className='p-6 sm:p-8'
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <p className='text-sm'>{data.discount}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold'>
              {data.title}
            </h1>
            <p className='text-sm'>{data.date}</p>
          </motion.div>

          {/* second col */}
          <motion.div
            className='h-full flex items-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            <img
              src={data.image}
              alt='headphone'
              className='scale-125 w-[250px] md:w-[340px] mx-auto object-cover drop-shadow-custom'
            />
          </motion.div>

          {/* third col */}
          <motion.div
            className='flex flex-col gap-4 p-6 sm:p-8'
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <p className='text-xl font-bold'>{data.title2}</p>
            <h1 className='text-3xl sm:text-5xl font-bold'>{data.title3}</h1>
            <p className='text-sm tracking-wider leading-5'>{data.title4}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                style={{ color: data.bgColor }}
                className='bg-white py-2 px-4 rounded-3xl'
              >
                Shop Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
