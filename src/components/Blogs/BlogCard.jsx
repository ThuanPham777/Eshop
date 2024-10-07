import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const BlogCard = ({ BlogsData }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% phần tử vào viewport mới kích hoạt
  });

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Trạng thái ẩn ban đầu (mờ, vị trí dưới)
    visible: { opacity: 1, y: 0 }, // Trạng thái hiện ra (rõ, vị trí ban đầu)
  };
  return (
    <div ref={ref}>
      <motion.div
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }} // Hiệu ứng xuất hiện với độ trễ
        variants={variants}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 '>
          {BlogsData.map((blog) => {
            return (
              <div
                key={blog.id}
                className='bg-white dark:bg-gray-900'
              >
                <div className='overflow-hidden rounded-2xl mb-2'>
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className='w-full h-[200px] object-cover hover:scale-105 duration-500'
                  />
                </div>
                <div className='space-y-2'>
                  <p className='text-xs text-gray-500'>{blog.publishedDate}</p>
                  <h3 className='font-bold line-clamp-1'>{blog.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-2'>
                    {blog.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogCard;
