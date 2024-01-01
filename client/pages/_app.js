import { Layout } from '@/components/Layout';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import '../styles/app.css';

const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNow-100.ttf',
      weight: '100',
    },
    {
      path: '../public/fonts/HelveticaNow-200.ttf',
      weight: '200',
    },
    {
      path: '../public/fonts/HelveticaNow-300.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/HelveticaNow-400.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/HelveticaNow-500.ttf',
      weight: '500',
    },
    {
      path: '../public/fonts/HelveticaNow-600.ttf',
      weight: '600',
    },
    {
      path: '../public/fonts/HelveticaNow-800.ttf',
      weight: '800',
    },
    {
      path: '../public/fonts/HelveticaNow-900.ttf',
      weight: '900',
    },
  ],
  variable: '--font-helvetica',
});
const reey = localFont({
  src: [
    {
      path: '../public/fonts/Reey-Regular.otf',
      weight: '500',
    },
  ],
  variable: '--font-reey',
});
export default function App({ Component, pageProps }) {
  return (
    <Layout className={`${helvetica.variable} ${reey.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}
