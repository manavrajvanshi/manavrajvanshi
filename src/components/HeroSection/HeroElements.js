import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const HeroTyper = styled.span`
  margin-top: 24px;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const SocialContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const SocialIcon = styled.a`
  margin: 16px 4rem;
  cursor: pointer;
  color: #ffffff;
  font-size: 2rem;
  text-align: center;
  &:hover {
    transform: scale(1.4);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 4rem;
  }
`;
