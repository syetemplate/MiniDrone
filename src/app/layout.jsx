import { CartProvider } from '@/state/cart';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import WhatsAppFloatingIcon from '@/components/WhatsAppFloatingIcon';
import favicon from '@/assets/media/favicon.ico';
import appleIcon from '@/assets/media/apple-icon.png';
import content from '@/content';
import { poppins, assistant, fredoka } from './fonts';
import '@/assets/css/style.scss';

export const metadata = {
  title: content.meta.pages.homePage,
  description: content.meta.pages.homePage.description,
  icons: {
    icon: favicon.src,
    apple: appleIcon.src,
  },
  openGraph: {
    siteName: content.meta.pages.homePage.title,
    title: content.meta.pages.homePage.title,
    description: content.meta.pages.homePage.description,
    url: 'https://minidrone.co.il',
    type: 'website',
    locale: 'he_IL',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className={`${poppins.variable} ${assistant.variable} ${fredoka.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MiniDrone - רחפנים לילדים",
              "url": "https://minidrone.co.il",
              "description": "רחפנים מתקדמים, קלים לשימוש ובטוחים במיוחד עבור ילדים ומתחילים",
              "inLanguage": "he-IL"
            })
          }}
        />
      </head>
      <body className="h-screen inline">
        <CartProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <WhatsAppFloatingIcon />
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
