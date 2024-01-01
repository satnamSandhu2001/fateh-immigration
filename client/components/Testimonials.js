import React, { useRef, useState } from 'react';
import bg from '../public/assets/images/paralax-1.jpg';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  const data = [
    {
      name: 'roopam ahuja',
      review:
        'Home away from Home. Teachers are best, students are taken care of and results are excellent. Grow more',
    },
    {
      name: 'Jagsir brar',
      review:
        'The quality of education at this institution is just amazing and the staff is very co-operative.',
    },
    {
      name: 'Akanksha Kanwar',
      review:
        'The best platform for IELTS , they will provide you with best tution offers , and will help of you out in case of any problem.',
    },
    {
      name: 'Himani Puri',
      review:
        'Im really happy to be the part of the family of edu experts. Hopefully the upcoming journey will be good as well…',
    },
    {
      name: 'Noordeep Kaur',
      review:
        'Best institute in muktsar. Very cooperative and supportive staff. Good counselling by teachers.',
    },
    {
      name: 'Paras Mehra',
      review:
        'Really professionals at work, Helped me a lot in the visa process, Would receommend them to all.',
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
        style={{ backgroundImage: `url(${bg.src})` }}
        className="z-[-1] absolute top-0 left-0 w-full h-[400px] bg-cover bg-no-repeat"
      >
        <div className="bg-[#1e293beb] w-full h-full"></div>
      </div>
      <div className="pt-24 pb-16 container px-6 sm:px-0 mx-auto">
        <p className="text-white/50 text-center uppercase font-medium text-sm tracking-widest mb-3">
          CLIENTS FEEDBACKS
        </p>
        <h3 className="text-white text-center text-5xl leading-tight font-semibold mx-auto mb-16">
          What They’re Talking About.
        </h3>
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          id="countries-cont"
          className="py-10 cursor-grab flex items-stretch gap-8 lg:gap-16 overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth"
        >
          {data &&
            data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="relative snap-start group mx-auto min-w-[300px] lg:min-w-[350px] max-w-xs bg-white shadow-soft-xl pb-10"
                >
                  <span className="bg-gradient-to-bl from-gradient1 via-gradient2 to-gradient3 bg-red-400 text-white rounded-full p-4 aspect-square w-16 flex items-end justify-center absolute top-[-30px] left-[50%] translate-x-[-50%] text-7xl leading-[0] font-reey">
                    &ldquo;
                  </span>

                  <div className="pt-16">
                    <div className="flex justify-center text-red-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <p className="font-semibold capitalize text-center mt-2 text-xl mb-2 text-slate-800">
                      {item.name}
                    </p>
                    <p className="px-8 text-center text-black/50">
                      {item.review}
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

export default Testimonials;
