import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
const SuccessStories = () => {
  const [images, setimages] = useState([]);

  const getAllImages = async () => {
    const importAll = (r) => r.keys().map(r);
    setimages(
      importAll(
        require.context(
          '../public/uploads/stories',
          false,
          /\.(png|jpe?g|svg|webp)$/
        )
      )
    );
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];
  const properties = {
    prevArrow: (
      <button className="mx-4 w-8 bg-black/30 hover:bg-black/60 duration-300 rounded-full p-2 text-white">
        <MdArrowBackIosNew />
      </button>
    ),
    nextArrow: (
      <button className="mx-4 w-8 bg-black/30 hover:bg-black/60 duration-300 rounded-full p-2 text-white">
        <MdArrowForwardIos />
      </button>
    ),
  };

  return (
    <section id="success-stories" className="bg-slate-100">
      {' '}
      {images.length !== 0 && (
        <div className="select-none container px-6 sm:px-0 mx-auto pt-16 pb-20">
          <p className="text-center text-black/40 uppercase font-medium text-sm tracking-wider mb-3">
            Success Stories
          </p>
          <h3 className="text-center text-slate-800 text-5xl leading-tight font-semibold mb-6">
            Examples of our Success.
          </h3>
          <div className="pt-8">
            <Slide
              {...properties}
              slidesToScroll={1}
              slidesToShow={1}
              indicators={false}
              responsive={responsiveSettings}
              duration={1500}
              transitionDuration={1500}
              easing="ease"
            >
              {images.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="relative aspect-square rounded m-4"
                    style={{ borderStyle: 'groove' }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-b from-gradient1 via-gradient2 to-gradient3 rounded"></div>

                    <Image
                      src={item}
                      alt="best visa counsultant in muktsar"
                      fill
                      priority
                      className="object-contain rounded object-center h-full w-full"
                    />
                  </div>
                );
              })}
            </Slide>
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;
