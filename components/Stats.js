import React from "react";
import styled from "styled-components";
import ImageWrapper from "../../elements/imageWrapper";
import Heading from "../../elements/Heading";
import Text from "../../elements/text";

const StyledCards = styled.div`
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
  // align-items: center;
  align-items: flex-start;
  padding-left: 10px;
  line-height: 20px;
`;

const Cards = ({ size, src, alt, txt }) => {
  return (
    <StyledCards>
      <StyledImage>
        <ImageWrapper src="src" alt={alt} size={size} />
      </StyledImage>

      <StyledText>
        <Heading priority="6" color="#FFFFFF" fontWeight={6}>
          {txt}
        </Heading>
      </StyledText>
    </StyledCards>
  );
};

export default Cards;
