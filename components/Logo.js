import React from "react";
import styled from "styled-components";
import ImageWrapper from "../element/imageWrapper"
import Text from "../element/Text";

const StyledLogo = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column;
`;

const Logo = ({ size, src, alt, text }) => {
  return (
    <StyledLogo>
      <ImageWrapper src={src} alt={alt} size={size} />
      <Text size={size}>{text}</Text>
    </StyledLogo>
  );
};

export default Logo;
