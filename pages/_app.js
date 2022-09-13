import "../styles/index.scss";
import "../styles/variables.scss";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    />
    <title>Y42</title>
        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
