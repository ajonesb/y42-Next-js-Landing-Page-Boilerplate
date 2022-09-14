import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";

// Components
import Nav from "../../components/Nav/Nav";
import View from "../../components/View/View";

const Solution = () => {
  return (
    <>
      <Head>
        <title>Y42 - Solution</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <View>
        <h1 className={styles.container}>Solution</h1>
      </View>
    </>
  );
};

export default Solution;
