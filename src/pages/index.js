import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { infoData } from "../data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection id="/" />
      {infoData.map((sectionData, idx) => {
        const props = {
          ...sectionData,
          light: idx % 2 === 0,
          idx: idx,
          imgStart: idx % 2 !== 0,
        };
        return <InfoSection id={sectionData.id} key={idx} {...props} />;
      })}
    </>
  );
};

export default Home;
