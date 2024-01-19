import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
    <GoogleAnalytics gaId="G-XED1JJTNZC" />
  </>
);

export default MyApp;
