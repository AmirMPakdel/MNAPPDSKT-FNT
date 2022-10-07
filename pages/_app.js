import 'antd/dist/antd.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
  <>
    <Head>
      
      <link rel="stylesheet" href="/styles/global.css"/>
      <link rel="stylesheet" href="/styles/colors.css"/>
      <link rel="stylesheet" href="/styles/fonts.css"/>
      <link rel="stylesheet" href="/styles/forced.css"/>
      <link rel="stylesheet" href="/styles/shadows.css"/>
      <link rel="stylesheet" href="/styles/animate.min.css"/>

    </Head>
    <Component {...pageProps}/>
  </>
  )
}

export default MyApp;


