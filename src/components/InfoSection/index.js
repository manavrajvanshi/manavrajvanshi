import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column1,
  Column2,
  Img,
  ImgWrap,
  Link,
} from "./InfoElements";

const InfoSection = ({ id, idx, light, topLine, content, img, alt, imgStart }) => {
  return (
    <div id={id}>
      <InfoContainer lightBg={light} id={idx} key={idx}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Content content={content} id={idx} light={light} />
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

const Content = ({ content, id, light }) => {
  return content.map(({ headline, description, link }, idx) => {
    return (
      <div key={id + "-" + idx}>
        <Heading light={!light}>{headline}</Heading>
        {link && (
          <Link href={link.url} key={id + "-" + idx + "-link"} light={!light}>
            {link.text}
          </Link>
        )}
        {description.map((desc, i) => {
          return (
            <Subtitle key={id + "-" + idx + "-" + i} light={!light}>
              {desc}
            </Subtitle>
          );
        })}
      </div>
    );
  });
};

export default InfoSection;
