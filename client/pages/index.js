import Image from 'next/image';
import HomeSlider from '@/components/HomeSlider';
import pattern_1 from '../public/assets/images/pattern-1.png';
import passport_1 from '../public/assets/images/passport-1.png';
import passport_2 from '../public/assets/images/passport-2.png';
import quality_img from '../public/assets/images/quality.png';
import about_img from '../public/assets/images/about-us.jpg';
import Countries from '@/components/Countries';
import ServiceComponent from '@/components/ServiceComponent';
import service_img_1 from '../public/assets/images/service-1.jpg';
import service_img_2 from '../public/assets/images/service-2.jpg';
import service_img_3 from '../public/assets/images/service-3.jpg';
import lady_img from '../public/assets/images/lady-in-red.png';
import plane_img from '../public/assets/images/icon-plane.png';
import { FaGraduationCap } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';
import { MetaData } from '@/components/Layout';
import SuccessStories from '@/components/SuccessStories';

export default function Home() {
  return (
    <>
      <MetaData />
      <HomeSlider />

      <section
        style={{ backgroundImage: `url(${pattern_1.src})` }}
        className="bg-cover bg-no-repeat bg-slate-100"
      >
        <div className="container px-6 sm:px-0 mx-auto py-20">
          <div className="flex flex-wrap xl:flex-nowrap gap-10 justify-evenly">
            {/* 1 */}
            <div className="min-w-[330px] max-w-[100%] md:max-w-[350px] lg:max-w-[400px] group hover:-translate-y-2 duration-300 hover:shadow-soft-xl relative grid grid-cols-[1fr_2fr] items-stretch bg-white p-2">
              <div className="flex flex-col h-full items-center justify-evenly gap-6 bg-slate-100 group-hover:bg-red-500 duration-300 p-4">
                <p className="font-reey text-5xl text-black/20 group-hover:text-white/20 duration-300">
                  01
                </p>
                <Image
                  src={passport_1}
                  alt="best visa consultant"
                  className="max-w-[60px] group-hover:invert duration-300"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-xl mb-4 text-slate-700">
                  Apply For All Type of Visa&rsquo;s.
                </p>
                <p className="text-black/50 leading-relaxed">
                  We deals in all type of visa&rsquo;s - Study, Spouse, PR, Work
                  Visa.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="min-w-[330px] max-w-[100%] md:max-w-[350px] lg:max-w-[400px] group hover:-translate-y-2 duration-300 hover:shadow-soft-xl relative grid grid-cols-[1fr_2fr] items-stretch bg-white p-2">
              <div className="flex flex-col h-full items-center justify-evenly gap-6 bg-slate-100 group-hover:bg-red-500 duration-300 p-4">
                <p className="font-reey text-5xl text-black/20 group-hover:text-white/20 duration-300">
                  02
                </p>
                <Image
                  src={passport_2}
                  alt="best canada visa consultant"
                  className="max-w-[60px] group-hover:invert duration-300"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-xl mb-4 text-slate-700">
                  Hassle Free Visa Processes
                </p>
                <p className="text-black/50 leading-relaxed">
                  We first examine your case deeply and then proceed further.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="min-w-[330px] max-w-[100%] md:max-w-[350px] lg:max-w-[400px] group hover:-translate-y-2 duration-300 hover:shadow-soft-xl relative grid grid-cols-[1fr_2fr] items-stretch bg-white p-2">
              <div className="flex flex-col h-full items-center justify-evenly gap-6 bg-slate-100 group-hover:bg-red-500 duration-300 p-4">
                <p className="font-reey text-5xl text-black/20 group-hover:text-white/20 duration-300">
                  03
                </p>
                <Image
                  src={quality_img}
                  alt="best ielts, pte in muktsar"
                  className="max-w-[60px] group-hover:invert duration-300"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-xl mb-4 text-slate-700">
                  Best Education System
                </p>
                <p className="text-black/50 leading-relaxed">
                  We are known for our reliable and affordable studies.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 text-white text-center p-3 mt-12">
            <p className="uppercase text-sm leading-loose font-medium tracking-wider">
              Top Rated By Customers & Immigration Firms With 100% Success Rate.
            </p>
          </div>
        </div>
      </section>

      {/* about us */}
      <section
        id="about"
        className="py-24 container px-6 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12"
      >
        <div className="aspect-video lg:aspect-[13.5/16]">
          <Image
            src={about_img}
            priority
            alt="best visa consultants in muktsar"
            className="min-w-full h-full rounded-lg object-cover object-top"
          />
        </div>
        <div>
          <p className="text-black/40 uppercase font-medium text-sm tracking-wider mb-3">
            about our company
          </p>
          <h3 className="text-slate-800 text-5xl leading-tight font-semibold">
            Immigration Services From Experienced Lawyers.
          </h3>
          <p className="mt-6 mb-4 text-gray-500 italic underline text-xl font-medium">
            Canada Based Immigration Consultant Agency.
          </p>
          <p className="text-black/50 leading-relaxed font-medium">
            Fateh Education & Immigration Services is well-known for its
            honesty, dependability, and reasonable visa consultancy services.
            Having an exclusive focus on client-centric services. Fateh
            Education & Immigration Services has truly established itself as a
            brand that provides peace of mind in all aspects. we measure our
            success by the entire happiness of our clients. <br />
            We process Federal Skilled Workers, Family Sponsorships, Provincial
            Nominee Programmes, Students, Temporary Work Permits, and
            Visitors/Business Visas in all sectors. We can assist you in
            determining and selecting the ideal programme for you based on your
            experience, talents, education, and family requirements.
          </p>
          <button className="text-white bg-red-500 px-12 py-4 mt-6 hover:bg-red-600 duration-500">
            Explore Now
          </button>
        </div>
      </section>

      <Countries />

      <section className="bg-slate-100 py-24">
        <div
          className="container px-6 sm:px-0 mx-auto
        "
        >
          <p className="text-black/50 text-left uppercase font-medium text-sm tracking-widest mb-3">
            What do we offer
          </p>
          <h3 className="text-slate-800 text-left text-5xl leading-tight font-semibold ml-0">
            Have a look at our excellent services.
          </h3>
          <div className="mt-10 flex flex-wrap lg:flex-nowrap justify-between items-stretch gap-10">
            <ServiceComponent
              img={service_img_1}
              Icon={FaGraduationCap}
              title="IELTS"
              desc="IELTS is designed to help you work, study or migrate to a country where English is the native language."
            />
            <ServiceComponent
              img={service_img_2}
              Icon={MdOutlineSpeakerNotes}
              title="PTE"
              desc="PTE feels simpler to prepare compared to IELTS and feels like a more accurate measure of language ability"
            />
            <ServiceComponent
              img={service_img_3}
              Icon={RiVisaFill}
              title="Visa Services"
              desc="We deals in all type of visa’s such as Study Visa, Spouse Visa, Tourist Visa, PR, Work Visa."
            />
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="py-24 container px-6 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-black/40 uppercase font-medium text-sm tracking-wider mb-3">
            Our Benifits
          </p>
          <h3 className="text-slate-800 text-5xl leading-tight font-semibold mb-6">
            Few Reasons to Choose Our Company.
          </h3>

          <p className="text-black/50 leading-relaxed font-medium">
            At Fateh Education &amp; Immigration Services, we are working hard
            every day to help clients just like you, immigrate to Counrties like
            Canada, USA, UK, Australia and fulfill their dreams. We can help you
            make your move simple and open the window of new opportunities for
            you and your family. We consider it our professional responsibility
            to thoroughly research and investigate each matter before defending
            the client, while also respecting individuality and client
            preferences. Our team of skilled specialists is always up to date on
            the latest advancements and upgrades. Our company takes great
            satisfaction in working closely with clients to suit their every
            demand. In addition, we consistently keep our customers up to date
            on the status of their cases. Over the years of providing
            appropriate study abroad options to students, we have established
            the highest standards in line with worldwide capabilities.
          </p>
          <Link
            scroll={false}
            href="/#contact"
            className="inline-block text-white bg-red-500 px-12 py-4 mt-6 hover:bg-red-600 duration-500"
          >
            Contact Us
          </Link>
        </div>
        <div className="relative h-full hidden md:flex flex-col justify-center">
          <Image
            src={plane_img}
            alt="canada study visa, spouse visa, open work permit, PR"
            className="max-w-[350px] absolute top-[-20%] md:top-[-40%] lg:top-[-50%] -left-12 -z-10"
          />
          <Image
            src={lady_img}
            alt="best immigration consultants in muktsar"
            className="w-full"
          />
        </div>
      </section>

      <Testimonials />

      <SuccessStories />

      <ContactSection />
    </>
  );
}
