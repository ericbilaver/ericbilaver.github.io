import * as React from "react";
import "../styles/styles.scss";

import Header from "../components/header";
import TextBanner from "../components/text-banner";

const IndexPage = () => {
  return (
    <html lang="en">
      <title>Eric Bilaver</title>
      <Header />
      <div className="animation"></div>
      <TextBanner />
    </html>
  );
};

export default IndexPage;
