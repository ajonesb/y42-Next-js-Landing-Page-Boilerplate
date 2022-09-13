import React from "react";
import Head from "next/head";

// Components
import Nav from "../components/Nav/Nav"
import View from "../components/View/View";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Y42 - Pricing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> 
      <Nav/>
      <View>
        <h1>Pricing</h1>
      </View>
    </>
  );
};

export default Pricing;
