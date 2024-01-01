import React from 'react';
import Image from 'next/image';
import faculty_img from '../public/assets/images/faculty.png';
import batches_img from '../public/assets/images/batches.png';
import learning_img from '../public/assets/images/learning.png';
import methods_img from '../public/assets/images/methods.png';
import modules_img from '../public/assets/images/modules.png';
import strategic_img from '../public/assets/images/strategic.png';
import tests_img from '../public/assets/images/tests.png';
import tricks_img from '../public/assets/images/tricks.png';
import { MetaData } from '@/components/Layout';

const Coaching = () => {
  const data = [
    {
      img: faculty_img,
      alt: 'IELTS in muktsar',
      title: 'Excellent Faculty',
      desc: 'Experienced tutors who themselves have scored highest in IELTS and PTE',
    },
    {
      img: batches_img,
      alt: 'PTE in muktsar',
      title: 'Smaller Batches',
      desc: 'Small-size batches so that you get that one-to-one attention',
    },
    {
      img: learning_img,
      alt: 'best visa consultant in muktsar',
      title: 'Effective Learning',
      desc: 'Special one-to-one coaching for more effective learning',
    },
    {
      img: tricks_img,
      alt: 'best canada immigration consultant in muktsar',
      title: 'Tips & Tricks',
      desc: 'Special tips & tricks to score high in different modules of the test',
    },
    {
      img: tests_img,
      alt: 'study visa consultant in muktsar',
      title: 'Mock Tests',
      desc: 'Specially designed periodic mock tests to help improve performance',
    },
    {
      img: methods_img,
      alt: 'canada PR',
      title: 'New Learning Methods',
      desc: 'Introduction to new techniques and tactics for quick and increased learning',
    },
    {
      img: strategic_img,
      alt: 'ielts institute in muktsar',
      title: 'Strategic Learning',
      desc: 'Powerful and effective success mantras to crack IELTS, PTE and other such exams',
    },
    {
      img: modules_img,
      alt: 'PTE institute in muktsar',
      title: 'Individual Modules',
      desc: 'Special coaching for selective module(s) to help students work on their strengths and weaknesses',
    },
  ];
  return (
    <>
      <MetaData title="IELTS, PTE coaching" />
      <section className="py-20">
        <div className="container px-6 sm:px-0 mx-auto">
          <div>
            <p className="text-black/40 uppercase font-medium text-sm tracking-wider mb-3">
              Our Courses
            </p>
            <h3 className="text-slate-800 text-4xl leading-tight font-semibold">
              IELTS Coaching
            </h3>
          </div>
          <div>
            <p className="mt-4 text-black/50 font-medium leading-relaxed text-justify">
              The International English Language Testing System (IELTS) is one
              of the most widely used English language tests in the world. This
              exam is taken by around 2.9 million people each year. This test is
              used to evaluate a candidate's English skills in several courses.
              Reading, listening, writing, and speaking are among the modules
              covered. This is a criterion used to assess how successfully or
              easily you can study, work, and learn in English-speaking nations.
            </p>
            <p className="mt-4 text-black/50 font-medium leading-relaxed text-justify">
              It is a very frequent fundamental necessity. You will be allowed
              to study, live, and work in numerous countries throughout the
              world if you get the appropriate band score in IELTS. across 140
              countries across the world recognise the IELTS certificate as
              proof of English language proficiency.
            </p>
            <p className="mt-4 text-black/50 font-medium leading-relaxed text-justify">
              Reading Strategies: Practise skimming and scanning the material
              while focusing on general comprehension, critical reading
              abilities, and understanding language from context. Listening
              Techniques: IELTS listening training emphasise purpose, meaning,
              vocabulary, and structure. You will master a range of
              understanding approaches. Speaking Skills: Consistent practise is
              required to develop the capacity to communicate spontaneously
              while conveying thoughts clearly and logically. Learn what
              questions to expect on the Speaking Test and how to respond
              effectively using cue cards. Writing abilities include overall
              planning and essay writing that explains and supports viewpoints
              on subjects. Presentation, time management, and word count tactics
              are used. Expert advice on completing jobs on time and writing
              your best.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 mt-8 py-8">
          <div className="container px-6 sm:px-0 mx-auto">
            <h3 className="text-slate-800 text-4xl leading-tight font-semibold">
              PTE Coaching
            </h3>
            <p className="mt-4 text-black/50 font-medium leading-relaxed text-justify">
              PTE is one of the most prominent English proficiency examinations,
              and it, like IELTS, is growing in popularity among students.
              Students in Muktsar no longer need to go elsewhere for PTE
              tutoring since Fateh Education & Immigration Services provides the
              finest PTE coaching.
            </p>
            <p className="mt-4 text-black/50 font-medium leading-relaxed text-justify">
              Students never compromise when it comes to education because they
              always want the best. If you are one of those students, Fateh
              Education & Immigration Services is your one-stop shop for PTE
              prep.
            </p>
            <p className="mt-4 text-black/50 font-medium leading-relaxed text-justify">
              Because the PTE is an online computer-based English proficiency
              test, there are several factors that every student considers when
              looking for a PTE coaching institute to assist with their
              preparation, such as small batch sizes, qualified faculty, a
              well-maintained computer lab for practise, and up-to-date study
              material. So, at Fateh Education & Immigration Services, all of
              the following services are provided under one roof.
            </p>
          </div>
        </div>

        <div className="container px-6 sm:px-0 mx-auto pt-16">
          <h3 className="text-slate-800 text-4xl leading-tight text-center font-semibold">
            Reasons to choose us
          </h3>
          <p className="text-black/40 capitalize font-medium text-sm text-center my-2">
            Here Are The Top Reasons That Make Us The Most Sought-After Ielts
            And Pte Coaching Provider In The Region
          </p>
          <div className="flex flex-wrap justify-evenly gap-4">
            {data &&
              data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="mt-12 max-w-[15rem] flex flex-col items-center justify-center"
                  >
                    <Image
                      src={item.img}
                      alt={item.alt ? item.alt : 'IELTS ,PTE in muktsar'}
                    />
                    <div>
                      <p className="font-semibold text-center mt-2 text-xl mb-2 text-slate-800">
                        {item.title}
                      </p>
                      <p className="px-4 text-center text-black/50">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Coaching;
