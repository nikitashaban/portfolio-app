import React from "react";
import App from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.scss";
import { NextPage, NextPageContext } from 'next'

import NavBar from '../components/shared/NavBar'
import Hero from "../components/shared/Hero";

const MyApp: NextPage = ({ Component, pageProps }: any) => {
  return (
    <div className="portfolio-app">
      {pageProps.appData}
      <NavBar />
      {Component.name === "Home" && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  )
};

MyApp.getInitialProps = async (context) => {
  const initialProps = App.getInitialProps && await App.getInitialProps(context)

  return { pageProps: { appData: "Hello app component", ...initialProps.pageProps } }
}

export default MyApp;
