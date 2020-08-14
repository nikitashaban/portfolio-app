import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";

const MyApp: React.FC = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default MyApp;
