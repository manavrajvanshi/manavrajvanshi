import React from "react";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroTyper,
  SocialContainer,
  SocialIcon,
} from "./HeroElements";
import Typewriter from "typewriter-effect";
import { AiFillLinkedin, AiFillGithub, AiFillRedditCircle } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import Video from "../../videos/keyboard.mp4";
import { typerData, socialData } from "../../data";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Manav Rajvanshi</HeroH1>
        <HeroTyper>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 40,
              strings: typerData,
            }}
          />
        </HeroTyper>
        <HeroP>💻 👨🏻‍🎓 🧑🏻‍💻 🦾 ☁️</HeroP>
        <Social />
      </HeroContent>
    </HeroContainer>
  );
};

const Social = () => {
  return (
    <SocialContainer>
      <SocialIcon href={socialData.linkedIn} target="_blank">
        <AiFillLinkedin />
      </SocialIcon>
      <SocialIcon href={socialData.github} target="_blank">
        <AiFillGithub />
      </SocialIcon>
      <SocialIcon href={socialData.stackExchange} target="_blank">
        <ImStackoverflow />
      </SocialIcon>
      <SocialIcon href={socialData.reddit} target="_blank">
        <AiFillRedditCircle />
      </SocialIcon>
    </SocialContainer>
  );
};
export default HeroSection;
