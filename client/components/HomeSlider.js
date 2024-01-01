import React from 'react';
import slider_1 from '../public/assets/images/slider-1.jpg';
import Link from 'next/link';
import Image from 'next/image';

const HomeSlider = () => {
  return (
    <div className="relative w-full bg-gray-800/50 min-h-screen flex items-center justify-center">
      <Image
        fill
        priority
        className="object-right object-cover pointer-events-none"
        src={slider_1}
        alt=""
      />
      <div className="w-full before:content-[''] before:z-0 before:absolute before:top-0 before:left-0 before:w-full lg:before:w-[50%] before:h-full before:bg-gradient-to-br md:before:bg-gradient-to-r before:from-gradient1 md:before:via-gradient2 before:to-gradient3">
        <div className="z-10 relative container px-6 sm:px-0 mx-auto w-full grid grid-cols-[2fr_1fr] items-center justify-center text-white pt-[130px]">
          <div>
            <p className="uppercase font-medium text-lg text-white/50">
              SOLUTION FOR ALL TYPE OF VISAS
            </p>
            <h2 className="my-4 text-6xl md:text-[80px] font-medium tracking-wide leading-[1.10] md:leading-[1.10]">
              Best Visa{' '}
              <span className="text-red-500 inline-block font-reey">&</span>{' '}
              Immigration Services
            </h2>
            <Link
              scroll={false}
              href="/#about"
              className="bg-red-500 px-12 py-4 inline-block mt-4 hover:bg-red-600 duration-500"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomeSlider;
