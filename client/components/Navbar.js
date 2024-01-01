import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/images/logo.png';
import { GoCommentDiscussion } from 'react-icons/go';
import { AiFillCloseSquare, AiOutlineComment } from 'react-icons/ai';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  const router = useRouter();
  const mobileNavRef = useRef('');

  const [color, setcolor] = useState(false);

  const toogleMobileNav = () => {
    if (mobileNavRef.current) {
      if (mobileNavRef.current.classList.contains('scale-x-100')) {
        mobileNavRef.current.classList.remove('scale-x-100', 'shadow-none');
        mobileNavRef.current.classList.add('scale-x-0', 'shadow-outer-left');
      } else {
        mobileNavRef.current.classList.remove('scale-x-0', 'shadow-outer-left');
        mobileNavRef.current.classList.add('scale-x-100', 'shadow-none');
      }
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 100 || router.pathname.includes('admin')) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, [router]);

  return (
    <>
      <nav
        className={`z-40 ${color ? 'bg-secondary' : 'bg-[#ffffff85]'} ${
          router.pathname !== '/' ? ' sticky' : 'fixed'
        }  transition-colors duration-500 top-0 text-black/80 w-full overflow-y-visible shadow-bottom-nav`}
      >
        <div
          className={`bg-white hidden md:block duration-500 transition-all origin-top ${
            color ? 'scale-y-0 max-h-0' : 'scale-y-100 max-h-10'
          }`}
        >
          <div className="flex items-center justify-between container px-6 sm:px-0 mx-auto text-sm">
            <p>
              <b>Opening Time : </b>
              <span className="font-normal text-black/60">
                9:00 AM - 5:00 PM
              </span>
            </p>

            <div className="flex gap-4 h-full items-center">
              <a
                href="https://goo.gl/maps/gU82NFuVFupn7wiu9"
                target="_blank"
                className="font-normal text-black/60 flex items-baseline gap-1"
              >
                <FaMapMarkerAlt size="0.9em" />
                Our Location
              </a>
              <Link
                href="/#contact"
                scroll={false}
                className="font-normal text-white bg-red-500 hover:bg-black duration-300 py-2 px-6"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="z-40 hidden md:flex items-center justify-between container px-6 sm:px-0 mx-auto text-sm uppercase font-medium">
          <Image
            src={Logo}
            alt="Best visa consultants in muktsar"
            className="w-20 h-auto"
            priority
          />
          <ul className="z-40 flex justify-between text-black/90 gap-6 lg:gap-10">
            <li className="py-4">
              <Link
                href="/#"
                className={`border-b-2 py-1 hover:border-red-500 transition-all duration-300 ${
                  router.asPath === '/'
                    ? 'border-red-500'
                    : router.asPath === '/#'
                    ? 'border-red-500'
                    : router.asPath === '/#home'
                    ? 'border-red-500'
                    : 'border-transparent'
                }`}
              >
                Home
              </Link>
            </li>
            <li className="py-4">
              <Link
                scroll={false}
                href="/#about"
                className={`border-b-2 py-1 hover:border-red-500 transition-all duration-300 ${
                  router.asPath === '/#about'
                    ? 'border-red-500'
                    : 'border-transparent'
                }`}
              >
                About
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="/best-ielts-pte-coaching-in-muktsar"
                className={`border-b-2 py-1 hover:border-red-500 transition-all duration-300 ${
                  router.asPath.includes('coaching')
                    ? 'border-red-500'
                    : 'border-transparent'
                }`}
              >
                Coaching
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="/best-visa-consultants-in-muktsar"
                className={`border-b-2 py-1 hover:border-red-500 transition-all duration-300 ${
                  router.asPath.includes('visa')
                    ? 'border-red-500'
                    : 'border-transparent'
                }`}
              >
                Visa
              </Link>
            </li>
            <li className="py-4">
              <Link
                scroll={false}
                href="/#success-stories"
                className={`border-b-2 py-1 hover:border-red-500 transition-all duration-300 ${
                  router.asPath.includes('success-stories')
                    ? 'border-red-500'
                    : 'border-transparent'
                }`}
              >
                Gallery
              </Link>
            </li>

            <li className="py-4">
              <Link
                scroll={false}
                href="/#contact"
                className={`border-b-2 py-1 hover:border-red-500 transition-all duration-300 ${
                  router.asPath === '/#contact'
                    ? 'border-red-500'
                    : 'border-transparent'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            href="tel:+919716897168"
            className="flex gap-4 text-red-500 items-center"
          >
            {/* <Image src={Chat_Icon} alt="call us" className="w-12 h-auto" /> */}
            <AiOutlineComment size="3em" color="inherit" />
            <span>
              <p className="text-xs font-normal text-black/50">Call us</p>
              <p className="text-red-500 font-bold text-lg">+91 97168-97168</p>
            </span>
          </a>
        </div>
        <div className="z-40 relative md:hidden w-full border-b border-b-white/40">
          <div className="container px-6 sm:px-0 mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href="/#"
                className="flex items-center leading-none gap-x-3 font-semibold text-2xl mr-6"
              >
                <Image
                  src={Logo}
                  alt="visa consultants in muktsar"
                  className="w-20 h-auto"
                  priority
                />
              </Link>
              <div
                onClick={toogleMobileNav}
                className="flex flex-col gap-2 cursor-pointer"
              >
                <span className={`w-9 h-1 bg-red-500 rounded-full`}></span>
                <span className={`w-9 h-1 bg-red-500 rounded-full`}></span>
                <span className={`w-9 h-1 bg-red-500 rounded-full`}></span>
              </div>
              <div
                ref={mobileNavRef}
                className="scale-x-0 origin-right transition-transform duration-500 absolute w-screen right-0 top-0 text-white bg-black"
              >
                <div className="relative">
                  <div
                    className="fixed right-0 cursor-pointer"
                    onClick={toogleMobileNav}
                  >
                    <AiFillCloseSquare size="3em" />
                  </div>
                  <div className="font-medium flex flex-col justify-evenly min-h-screen leading-none gap-8 p-6">
                    <div>
                      <p className="font-bold text-white text-2xl mb-6">
                        Fateh Education &amp; Immigration Services
                      </p>
                      <div className="flex flex-col">
                        <Link
                          href="/#"
                          onClick={toogleMobileNav}
                          className="px-1 py-4 transition-border duration-500 ease-linear border-b-2 border-white/10 hover:border-blue"
                        >
                          Home
                        </Link>
                        <Link
                          href="/#about"
                          scroll={false}
                          onClick={toogleMobileNav}
                          className="px-1 py-4 transition-border duration-500 ease-linear border-b-2 border-white/10 hover:border-blue"
                        >
                          About
                        </Link>
                        <Link
                          href="/best-ielts-pte-coaching-in-muktsar"
                          onClick={toogleMobileNav}
                          className="px-1 py-4 transition-border duration-500 ease-linear border-b-2 border-white/10 hover:border-blue"
                        >
                          Coaching
                        </Link>
                        <Link
                          href="/best-visa-consultants-in-muktsar"
                          onClick={toogleMobileNav}
                          className="px-1 py-4 transition-border duration-500 ease-linear border-b-2 border-white/10 hover:border-blue"
                        >
                          Visa
                        </Link>
                        <Link
                          href="/#success-stories"
                          scroll={false}
                          onClick={toogleMobileNav}
                          className="px-1 py-4 transition-border duration-500 ease-linear border-b-2 border-white/10 hover:border-blue"
                        >
                          Gallery
                        </Link>
                        <Link
                          onClick={toogleMobileNav}
                          href="/#contact"
                          scroll={false}
                          className="px-1 py-4 transition-border duration-500 ease-linear border-b-2 border-white/10 hover:border-blue"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-center mb-2">
                        Get In Touch
                      </p>
                      <a
                        href="tel:919716897168"
                        className="text-center text-white/50 mx-auto block"
                      >
                        +91 97168-97168
                      </a>
                      <div className="flex justify-center gap-x-3 py-6">
                        <a
                          href="https://www.instagram.com/fateh.institute.muktsar/?hl=en"
                          target="_blank"
                          className="bg-secondary p-3 rounded-md text-[#000229]"
                        >
                          <BsInstagram />
                        </a>
                        <a
                          href="#"
                          className="bg-secondary p-3 rounded-md text-[#000229]"
                        >
                          <BsLinkedin />
                        </a>
                        <a
                          href="https://wa.me/919716897168"
                          target="blank"
                          className="bg-secondary p-3 rounded-md text-[#000229]"
                        >
                          <BsWhatsapp />
                        </a>
                        <a
                          href="https://www.facebook.com/fatehconsultants"
                          target="_blank"
                          className="bg-secondary p-3 rounded-md text-[#000229]"
                        >
                          <BsFacebook />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
