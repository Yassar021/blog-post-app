import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta charSet='UTF-8' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta property='og:locale' content='en_US' />
          <meta name='author' content='Yassar' />
          <meta
            property='og:BlogSphere'
            content='A modern blog platform built with cutting-edge web technologies'
          />
          <meta
            name='keywords'
            content='A modern blog platform built with cutting-edge web technologies for seamless writing, sharing, and community engagement.'
          />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
