import React, { useEffect, useState } from 'react';
import { MdWifiCalling2 } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { FiChevronsRight, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import Logo from '../public/assets/images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Footer = () => {
  const [hidden, sethidden] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.includes('admin')) {
      sethidden(true);
    } else {
      sethidden(false);
    }
  }, [router]);

  return (
    <footer
      className={`${hidden && 'hidden'} relative pt-24 text-white bg-black`}
    >
      <div className="container px-6 pb-12 sm:px-0 mx-auto grid grid-cols-2 md:grid-cols-[2fr_2fr_3fr] gap-8">
        <div className="flex flex-col items-center w-fit">
          <Image
            src={Logo}
            alt="Fateh Education and Immigration consultants"
            className=" w-32 p-2 mb-4 h-auto bg-white rounded-lg"
          />
          {/* <p className="font-light">
            Fateh Education and Immigration consultants.
          </p> */}
          <div className="flex items-center mt-2 gap-3">
            <a
              href="https://www.instagram.com/fateh.institute.muktsar/?hl=en"
              target="_blank"
              className="rounded-full p-1 group bg-transparent duration-500 border border-white hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram text-white group-hover:text-black duration-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a
              href="https://wa.me/919716897168"
              target="blank"
              className="rounded-full p-1 group bg-transparent duration-500 border border-white hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram text-white group-hover:text-black duration-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/fatehconsultants"
              target="_blank"
              className="rounded-full p-1 group bg-transparent duration-500 border border-white hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram text-white group-hover:text-black duration-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a
              href="#"
              className="rounded-full p-1 group bg-transparent duration-500 border border-white hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram text-white group-hover:text-black duration-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <span className="text-xl pb-1 border-b border-white font-light">
            Explore
          </span>
          <ul className="mt-6 font-light">
            <li className="my-2 flex items-center gap-x-3">
              <FiChevronsRight />
              <Link
                scroll={false}
                href="/#about"
                className="w-max cursor-pointer capitalize border-b-2 border-transparent hover:border-white transition-all duration-300 font-light"
              >
                About
              </Link>
            </li>

            <li className="my-2 flex items-center gap-x-3">
              <FiChevronsRight />{' '}
              <Link
                href="/best-ielts-pte-coaching-in-muktsar"
                className="w-max cursor-pointer capitalize border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                Coaching
              </Link>
            </li>
            <li className="my-2 flex items-center gap-x-3">
              <FiChevronsRight />{' '}
              <Link
                href="/best-visa-consultants-in-muktsar"
                className="w-max cursor-pointer capitalize border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                Visa
              </Link>
            </li>
            <li className="my-2 flex items-center gap-x-3">
              <FiChevronsRight />
              <Link
                scroll={false}
                href="/#contact"
                className="w-max cursor-pointer capitalize border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-auto">
          <span className="text-xl pb-1 border-b-2 border-white font-light">
            Contact
          </span>
          <ul className="mt-6">
            <li className="my-2 flex gap-4 items-start">
              <FiMapPin size="20px" className="text-white" />
              <a
                href="https://goo.gl/maps/gU82NFuVFupn7wiu9"
                target="_blank"
                className="w-auto cursor-pointer font-light capitalize border-b-2 border-transparent transition-all duration-300"
              >
                Dr. Kehar Singh Marg, Kkp Bypass, Muktsar, Punjab, India 152026
              </a>
            </li>
            <li className="my-2 flex gap-4 items-center">
              <BiMessageDetail size="20px" className="text-white" />
              <a
                href="mail:fatehconsultants@outlook.com"
                target="_blank"
                className="w-max cursor-pointer font-light border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                fatehconsultants@outlook.com
              </a>
            </li>

            <li className="my-2 flex gap-4 items-center">
              <MdWifiCalling2 size="20px" className="text-white" />
              <a
                href="tel:+919716897168"
                className="w-max cursor-pointer font-light capitalize border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                +91 97168-97168
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white mt-10 border-t border-white/30 py-3">
        <p className="text-xs md:text-base text-center text-black font-medium">
          Designed & Developed by{' '}
          <a href="https://www.digitalpeakers.com" target="_blank">
            @Digital Peakers
          </a>{' '}
          - 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
