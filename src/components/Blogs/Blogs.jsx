import React from 'react';
import Heading from '../Shared/Heading';
import BlogCard from './BlogCard';
import blog1Img from '../../assets/blogs/blog-1.jpg';
import blog2Img from '../../assets/blogs/blog-2.jpg';
import blog3Img from '../../assets/blogs/blog-3.jpg';
const BlogsData = [
  {
    id: 1,
    img: blog1Img,
    publishedDate: 'Jan 20, 2024 by Dilshad',
    title: 'How to choose perfect smartwatch',
    description:
      'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Prro?',
  },
  {
    id: 2,
    img: blog2Img,
    publishedDate: 'an 20, 2024 by Satya',
    title: 'How to choose perfect gadget',
    description:
      'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Prro?',
  },
  {
    id: 3,
    img: blog3Img,
    publishedDate: 'Jan 20, 2024 by Sabir',
    title: 'How to choose perfect VR headset',
    description:
      'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Prro?',
  },
];
const Blogs = () => {
  return (
    <div className='py-12'>
      <div className='container'>
        <Heading
          title='Recent News'
          subtitle='Explore Our Blogs'
        />
        <BlogCard BlogsData={BlogsData} />
      </div>
    </div>
  );
};

export default Blogs;
