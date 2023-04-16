import React from "react";
import styled from "styled-components";
import ImageWrapper from "../../element/imageWrapper"
// import Heading from "../../elements/Heading";
import Text from "../../element/Text";

const StyledBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //width: 20%;
  padding: 30px;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  line-height: 20px;
  margin:0px;
 
`;

const Banner = ({ size, src, alt, txt, headingTxt,fontWeight,lineHeight }) => {
  return (
    <StyledBanner>
      <StyledImage>
        <ImageWrapper src="images/Vector.svg" alt={alt} size={size} />
      </StyledImage>

      <StyledText>
        <Text fontWeight="700" color="#FFFFFF" lineHeight={lineHeight} size={size}>{headingTxt}</Text>
        <Text fontWeight={fontWeight} color="#FFFFFF" size="16">{txt}</Text>
        {/* <Heading priority="6" color="#FFFFFF" fontWeight={6} >
          {txt}
        </Heading> */}
      </StyledText>
    </StyledBanner>
  );
};

export default Banner;
