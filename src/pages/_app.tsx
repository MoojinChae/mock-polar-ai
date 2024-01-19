import '../styles/global.css';

import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@next/third-parties/google'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <GoogleAnalytics gaId="G-XED1JJTNZC" />
  </>
);

export default MyApp;
