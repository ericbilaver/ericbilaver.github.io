import React from "react";
import AboutList from "../components/about-list";
import Header from "../components/header";
import Accomp from "../components/accomplishment";
import Footer from "../components/footer";
import "../styles/styles.scss";

import MeroLogo from "../images/mero_logo.png";
import AHeadLogo from "../images/ahead.jpeg";
import NDLogo from "../images/nd_logo.png";
import HTN from "../images/HTN.jpg";
import ECOO from "../images/ECOO.png";
import UW from "../images/UW.png";
import GA from "../images/GA.png";
import MYSQL from "../images/MySQL.jpg";
import DeltaHacks from "../images/DeltaHacks.png";
import OP from "../images/op.png"

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
          pictureName={OP}
          link="https://1password.com/"
          dates="Jan 2022 - Apr 2022"
          title="Junior Developer (Billing)"
          desc={[
            "•	Worked with senior developers to re-architect billing process into a single payment window facing $120M+ in annual sales",
            "•	Assisted in creating RESTful APIs that connect front-end React code to back-end Go code to service over 90,000 business customers’ billing requests",
            "•	Tested code and solved bugs throughout codebase, reducing code bloat and improving overall performance",
            "•	Refactored billing team intern documentation to better summarize all business terms and processes into an easy-to-read document"
          ]}
        />
        <Accomp
          pictureName={AHeadLogo}
          link="https://www.aheadsimulations.com/"
          dates="May 2021 - Aug 2021"
          title="Developer Intern"
          desc={[
            "• Designed and implemented Vue components and Python scripts for an audiology training platform (CARL)",
            "• Configured, tested, and troubleshot various low-level protocols (I2S, I2C, SPI) on the Jetson Nano system",
            "• Soldered SMD components and collaborated with team members to test various PCB boards",
            "• Wrote documentation and workflows for hardware, software, boot protocols, and future interns",
            "• Contributed to software production planning and project management for future product launch",
          ]}
        />
        <Accomp
          pictureName={MeroLogo}
          link="https://mero.co/"
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
          link="https://mero.co/"
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
          pictureName={DeltaHacks}
          link="https://devpost.com/software/quil"
          dates="Mar 2021"
          title="DeltaHacks 2021"
          desc={[
            '• Created a productivity site to that serves as an "all-in-one" project manager, to-do list, and effective note-taking software ("Quil")',
            "• Collaborated with 4 friends over a 36 hour period to develop a functioning React.js site with a CKEditor implementation",
            "• Worked on front-end development as well as logo design using Figma",
          ]}
        />
        <Accomp
          pictureName={HTN}
          dates="Jan 2021"
          link="https://devpost.com/software/hack-the-north-2020-04oqxr"
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
