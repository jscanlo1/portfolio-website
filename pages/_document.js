import { Html, Head, Main, NextScript } from 'next/document'
import {inter, playfair_display, roboto_mono} from '../components/fonts';

export default function Document() {
  return (
    <Html lang="en" className={`${playfair_display.variable} ${roboto_mono.variable} ${inter.variable}`} >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
