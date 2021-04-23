import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #ffffff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 1400px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${(imgStart) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  /* padding-bottom: 2rem; */
  /* border: 3px solid white; */
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 16px 0;
`;

export const Heading = styled.h1`
  margin-top: 2rem;
  margin-bottom: 16px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ light }) => (light ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 600;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ light }) => (light ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;

  padding-right: 0;
`;

export const Link = styled.a`
  max-width: 600;
  display: inline-block;
  margin: 0 0 12px 0;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  &:link {
    color: #01bf71;
  }

  &:visited {
    color: #01bf71;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
