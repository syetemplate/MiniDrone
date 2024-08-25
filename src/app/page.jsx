import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import content from '@/content';
import favicon from '@/assets/media/favicon.ico';
import appleIcon from '@/assets/media/apple-icon.png';

export const metadata = {
  title: content.meta.pages.homePage.title,
  description: content.meta.pages.homePage.description,
  canonical: 'https://minidrone.co.il',
  openGraph: {
    siteName: content.meta.pages.homePage.title,
    title: content.meta.pages.homePage.title,
    description: content.meta.pages.homePage.description,
    url: 'https://minidrone.co.il',
  },
  twitter: {
    card: 'summary_large_image',
    title: content.meta.pages.homePage.title,
    description: content.meta.pages.homePage.description,
  },
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Benefits />
    </>
  );
};

export default HomePage;
