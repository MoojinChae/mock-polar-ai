import '../styles/global.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
    <GoogleAnalytics gaId="G-XED1JJTNZC" />
  </>
);

export default MyApp;
