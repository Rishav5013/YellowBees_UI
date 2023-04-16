import React from "react";
import Banner from "./Banner";
import styled from "styled-components";

const StyledBannerItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 4rem;
  margin-top: 2rem;
  background-color: #341907;
  border-radius: 10px;
  justify-content: space-around;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    //margin: 0;
    margin: 1.6rem;
    // margin-left: 2.2rem;
  }
`;

const SeparatorStyling = styled.div`
  margin-top: 1rem;
  width: 0.1rem;
  height: 10vh;
  background-color: #c7bebe;
  opacity: 0.3;

  @media (max-width: 425px) {
    width: 100%;
    height: 0.08rem;
    justify-content: center;
    align-items: center;
  }
`;

const BannerItems = () => {
  return (
    <StyledBannerItems>
      <Banner
        size="xl"
        fontWeight="200"
        src="/images/Vector.svg"
        alt="abc"
        txt="Happy Clients"
        headingTxt="3000+"
        lineHeight="1.3"
      ></Banner>
      <SeparatorStyling></SeparatorStyling>

      <Banner
        size="xl"
        fontWeight="200"
        src="/images/Vector.svg"
        alt="abc"
        txt="Developers"
        headingTxt="10,000+"
        lineHeight="1.3"
      ></Banner>

      <SeparatorStyling></SeparatorStyling>
      <Banner
        size="xl"
        fontWeight="200"
        src="/images/Vector.svg"
        alt="abc"
        txt="Verified Talented Partners"
        headingTxt="1000+"
        lineHeight="1.3"
      ></Banner>
      <SeparatorStyling></SeparatorStyling>
      <Banner
        size="xl"
        fontWeight="200"
        src="/images/Vector.svg"
        alt="abc"
        txt="To Hire Engineers"
        headingTxt="250+"
        lineHeight="1.3"
      ></Banner>
    </StyledBannerItems>
  );
};

export default BannerItems;
