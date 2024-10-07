import React from 'react';
import product1Img from '././../../assets/product/p-1.jpg';
import product2Img from './../../assets/product/p-2.jpg';
import product3Img from './../../assets/product/p-3.jpg';
import product4Img from './../../assets/product/p-1.jpg';
import product5Img from './../../assets/product/p-4.jpg';
import product6Img from './../../assets/product/p-5.jpg';
import product7Img from './../../assets/product/p-7.jpg';
import product8Img from './../../assets/product/p-9.jpg';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

const ProductsData = [
  {
    id: 1,
    title: 'Boat Headphone',
    price: '$120',
    img: product1Img,
    aosDelay: '0',
  },
  {
    id: 2,
    title: 'Rocky Mountain',
    price: '$420',
    img: product2Img,
    aosDelay: '200',
  },
  {
    id: 3,
    title: 'Goggles',
    price: '$320',
    img: product3Img,
    aosDelay: '400',
  },
  {
    id: 4,
    title: 'Printed',
    price: '$220',
    img: product4Img,
    aosDelay: '600',
  },
  {
    id: 5,
    title: 'Boat Headphone',
    price: '$120',
    img: product5Img,
  },
  {
    id: 6,
    title: 'Rocky Mountain',
    price: '$420',
    img: product6Img,
  },
  {
    id: 7,
    title: 'Goggles',
    price: '$320',
    img: product7Img,
  },
  {
    id: 8,
    title: 'Printed',
    price: '$220',
    img: product8Img,
  },
];
const Products = () => {
  return (
    <div>
      <div className='container'>
        {/* Header section */}
        <Heading
          title='Our Products'
          subtitle='Explore Our Products'
        />
        {/* body section */}
        <ProductCard ProductsData={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
