import React from 'react';
import Button from '../Shared/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductCard = ({ ProductsData }) => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {/* card section */}
        {ProductsData.map((product, index) => (
          <Product
            key={index}
            product={product}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const Product = ({ product, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Kích hoạt khi 10% phần tử xuất hiện trong viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Hiệu ứng xuất hiện với độ trễ
      className='group'
    >
      <div className='relative'>
        <img
          src={product.img}
          alt={product.title}
          className='h-[180px] w-[260px] object-cover rounded-md'
        />
        {/* hover button */}
        <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
          <Button
            text='Add to cart'
            bgColor='bg-primary'
            textColor='text-white'
          />
        </div>
      </div>
      <div className='leading-7'>
        <h2 className='font-semibold'>{product.title}</h2>
        <h2 className='font-bold'>{product.price}</h2>
      </div>
    </motion.div>
  );
};

export default ProductCard;
