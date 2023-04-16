import styled from "styled-components";
import Spacer from "../../components/Spacer";
import Heading from "../../element/Heading";
import Button from "../../components/Button";
import ImageWrapper from "../../element/imageWrapper";

export const HeroSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  //margin: ${Spacer(7)} 0 ${Spacer(12)};
  padding: 4rem;
  //padding-bottom: 1.87rem;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

export const HeroLeftSection = styled.div`
  width: 40%;
  //margin-right: ${Spacer(20)};

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    text-align: center;
    margin: 0;
  }
`;

export const RightImage = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;


export default function HeroSection() {
  return (
    <HeroSectionStyle style={{ marginBottom: Spacer(7) }}>
      <HeroLeftSection>
        <div style={{ marginBottom: Spacer(10) }}></div>
        <Heading
          priority="1"
          size={1}
          color=" #341907"
          fontWeight={1}
          lineHeight={1}
        >
          A Hive Of Best Remote IT Talent{" "}
        </Heading>
        {/* <div style={{ marginBottom: Spacer(0) }}></div> */}
        <Heading
          priority="4"
          color="black"
          size={5}
          fontWeight={4}
          lineHeight={3}
        >
          Hire pre-screened engineers on a contractual basis today!
        </Heading>
        <div style={{ marginBottom: Spacer(10) }}></div>
        <Button href="https://www.google.com/" type="secondary" size="md">
          Hire Engineers
        </Button>
      </HeroLeftSection>

      <RightImage>
        {/* <Img
          src={GroupImg}
          priority="true"
          alt="fellow Bees Hero Image"
          width="542"
        /> */}

        <ImageWrapper
          src="/images/GroupImg.svg"
          alt="Linkedin logo"
          size="sl"
        />
      </RightImage>
    </HeroSectionStyle>
  );
}
