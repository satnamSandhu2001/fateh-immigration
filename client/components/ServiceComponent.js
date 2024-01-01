import Image from 'next/image';
import React from 'react';

const ServiceComponent = ({ Icon, img, title, desc }) => {
  return (
    <div className="w-full md:max-w-[20rem] lg:max-w-sm shadow-soft-xl bg-white">
      <Image src={img} alt="" className="w-full" />
      <div className="p-8 relative">
        <div className="bg-red-500 rounded-full absolute top-[-30px] right-6">
          <div className="bg-gradient-to-bl from-gradient1 via-gradient2 to-gradient3 rounded-full p-4 text-white">
            <Icon size="25px" />
          </div>
        </div>
        <p className="font-semibold text-xl mb-2 text-slate-800">{title}</p>
        <p className="text-black/50 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceComponent;
