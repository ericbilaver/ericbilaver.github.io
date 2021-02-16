import React from "react";
import AboutList from "../components/about-list";
import Header from "../components/header";
import Accomp from "../components/accomplishment";
import Footer from "../components/footer";

import MeroLogo from "../images/mero_logo.png";
import NDLogo from "../images/nd_logo.png";
import HTN from "../images/HTN.jpg";
import ECOO from "../images/ECOO.png";
import UW from "../images/UW.png";
import GA from "../images/GA.png";
import MYSQL from "../images/MySQL.jpg";

const Work = () => {
  return (
    <html lang="en">
      <title>Work</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Header />
      <AboutList title="WORK EXPERIENCE">
        <Accomp
          pictureName={MeroLogo}
          dates="Aug 2020 - Dec 2020"
          title="Senior Implementation Specialist"
          desc={[
            "• Coordinated and managed product deployment of 1500 sensors at over 20 buildings across Canada and the United Kingdom",
            "• Performed quality assurance on over 200 IoT LoRa receivers and 100 sensors using the Arduino IDE to assist in product rollout",
            "• Produced bi-weekly and quarterly client-facing business reports in Figma, met with extremely positive feedback on design",
            "• Helped refactor existing product network contracts to streamline company services which reduced fees by over $500/month",
          ]}
        />
        <Accomp
          pictureName={MeroLogo}
          dates="Feb 2020 - Apr 2020"
          title="Junior Implementation Specialist"
          desc={[
            "• Monitored product stock by designing a custom storage tracking app while also working with distributors to decrease manufacturing costs over 40%",
            "• Designed and created bi-weekly and quarterly business reports for clients",
            "• Participated in IoT product deployments in 10+ buildings across the GTA with a small team",
          ]}
        />
      </AboutList>
      <AboutList title="VOLUNTEERING & PERSONAL PROJECTS">
        <Accomp
          pictureName={HTN}
          dates="Jan 2021"
          title="Hack the North 2020"
          desc={[
            "• Worked in a team of 4 to create an exercise-focused social media site with JavaScript, (S)CSS, and HTML in response to COVID-19 limitations (“VideoGym”) over a 36 hour period",
            "• Implemented the Vonage Video API to create a global video calling system; received positive feedback from official Vonage representative",
          ]}
        />
        <Accomp
          pictureName={ECOO}
          dates="May 2019"
          title="ECOO Programming Contest"
          desc={[
            "• Collaborated with 3 team members to place first in the Halton region by programming solutions to complex computational problems",
          ]}
        />
        <Accomp
          pictureName={GA}
          dates="Jan 2018"
          title="Raspberry Pi Google Assistant"
          desc={[
            "• Implemented a working model of the Google Assistant API into a Raspberry Pi with working microphone, speaker, and visual display peripherals to create an ultra-cost-effective “Google Nest Hub”",
          ]}
        />
        <Accomp
          pictureName={NDLogo}
          dates="Sept 2017 - Jun 2019"
          title="S.T.E.A.M. (STEM and Arts) Club"
          desc={[
            "• Independently created webpages using HTML, JavaScript, and CSS to advertise the school’s S.T.E.A.M. programs, initiatives, and show real-time data from the IoT-connected greenhouse",
            "• Effectively collaborated with over 100 students to create a functioning web-connected greenhouse from scratch",
          ]}
        />
        <Accomp
          pictureName={MYSQL}
          dates="Jun 2019"
          title="MySQL Database & Webpage Assignment"
          desc={[
            "• Created a MySQL database with data from the Statistics Canada website and a connected HTML webpage for a class assignment; received extremely positive feedback and work was used as a class example",
          ]}
        />
        <Accomp
          pictureName={UW}
          dates="Nov 2016"
          title="CEMC Beaver Computing Challenge"
          desc={[
            "• Placed top 25% in Canada by utilizing problem-solving skills to answer questions related to programming",
          ]}
        />
      </AboutList>
      <br />
      <hr />
      <br />
      <Footer />
    </html>
  );
};

export default Work;
