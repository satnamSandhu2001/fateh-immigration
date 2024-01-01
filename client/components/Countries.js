import Image from 'next/image';
import React, { useRef, useState } from 'react';
import pattern_2 from '../public/assets/images/pattern-2.png';
import usa_img from '../public/assets/images/usa.jpg';
import usa_flag from '../public/assets/images/flag-usa.jpg';
import uk_img from '../public/assets/images/uk.jpg';
import uk_flag from '../public/assets/images/flag-uk.jpg';
import canada_img from '../public/assets/images/canada.jpg';
import canada_flag from '../public/assets/images/flag-canada.jpg';
import australia_img from '../public/assets/images/australia.jpg';
import australia_flag from '../public/assets/images/flag-australia.jpg';

const Countries = () => {
  const data = [
    {
      img: canada_img,
      flag: canada_flag,
      title: 'CANADA',
      desc: 'Canada consistently does well in global surveys on safety, progress, and quality of life.',
    },

    {
      img: usa_img,
      flag: usa_flag,
      title: 'USA',
      desc: 'Very often, immigrants will move to areas with higher wages and a higher number of available jobs.',
    },
    {
      img: australia_img,
      flag: australia_flag,
      title: 'AUSTRALIA',
      desc: 'Signatory to the Refugee Convention and has relocated a large number of asylum seekers.',
    },
    {
      img: uk_img,
      flag: uk_flag,
      title: 'UK',
      desc: 'Better Skilled Workforce is currently the main reason for immigration to the UK',
    },
  ];
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // adjust scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <section className="relative select-none">
      <div
        style={{ background: `url(${pattern_2.src}), rgb(30,41,59,1)` }}
        className="z-[-1] absolute top-0 left-0 w-full h-[400px] bg-cover bg-no-repeat"
      ></div>
      <div className="pt-24 pb-16 container px-6 sm:px-0 mx-auto">
        <p className="text-white text-center uppercase font-medium text-sm tracking-widest mb-3">
          Counries We Offer
        </p>
        <h3 className="text-white text-center text-5xl leading-tight font-semibold max-w-lg mx-auto mb-16">
          Countries We Support for Immigration.
        </h3>
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          id="countries-cont"
          className="cursor-grab pb-10 flex gap-8 lg:gap-16 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          {data &&
            data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="snap-start group mx-auto min-w-full sm:min-w-[300px] lg:min-w-[350px] max-w-xs bg-white shadow-soft-xl pb-10"
                >
                  <div className="relative w-full">
                    <div className="w-full aspect-[5/3] overflow-hidden">
                      <Image
                        src={item.img}
                        alt="USA study visa, spouse visa, tourist visa"
                        className="w-full object-cover group-hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="absolute bottom-0 h-[19px] left-0 w-full">
                      <div
                        className={`relative w-full h-full before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[url(../public/assets/images/curve.png)] before:bg-top before:bg-repeat-x`}
                      >
                        <Image
                          src={item.flag}
                          alt=""
                          className="aspect-square w-16 absolute top-0 left-[50%] translate-x-[-50%] -translate-y-[50%] rounded-full p-1 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-center mt-6 text-xl mb-2 text-slate-800">
                      {item.title}
                    </p>
                    <p className="px-8 text-center text-black/50">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Countries;
