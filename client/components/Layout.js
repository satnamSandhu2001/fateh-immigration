import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export function Layout({ className, children }) {
  return (
    <main className={className}>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  );
}

export function MetaData({
  title,
  description = 'We offer full assistance with the IELTS, PTE, and Visa procedures. Our skilled staff will be there for you every step of the way, ensuring that you achieve your objective.',
}) {
  return (
    <>
      <Head>
        <title>
          {title
            ? 'Fateh Education & Immigration Service - ' + title
            : 'Fateh Education & Immigration Service'}
        </title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
      </Head>
    </>
  );
}
