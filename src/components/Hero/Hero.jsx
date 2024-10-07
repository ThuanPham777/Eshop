import React from 'react';
import Slider from 'react-slick';
import headphone from '../../assets/hero/headphone.png';
import laptop from '../../assets/category/macbook.png';
import virtual from '../../assets/category/vr.png';
import Button from '../Shared/Button';

const HeroData = [
  {
    id: 1,
    img: headphone,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Headphone',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    img: virtual,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Virtual',
    description: 'Lorem His life, consectetur',
  },
  {
    id: 3,
    img: laptop,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Laptops',
    description: 'Lorem His life, consectetur',
  },
];

const Hero = ({ handleWithOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true, // Fixed typo from 'infiite' to 'infinite'
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
    autoplay: true, // Added autoplay
  };

  return (
    <div className='container'>
      <div
        className='overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[650px] hero-bg-color flex justify-center items-center'
      >
        <div className='container pb-8 sm:pb-0'>
          {/* Hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* Text content section */}
                  <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                      {data.subtitle}
                    </h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                      {data.title}
                    </h1>
                    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm-text-[80px] md:text-[100px] xl:text-[150px] font-bold'>
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text='Shop By Category'
                        bgColor='bg-primary'
                        textColor='text-white'
                        handler={handleWithOrderPopup}
                      />
                    </div>
                  </div>
                  {/* Image section */}
                  <div className='order-1 sm:order-2'>
                    <img
                      src={data.img}
                      alt={data.title2}
                      className='w-[300px] h-[300px] sm:h-[450px]
                    sm:w-[450px] sm:scale-105 lg:scale-110 object-contain
                    mx-auto drop-shadow-custom relative z-40'
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
