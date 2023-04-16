import styled from "styled-components";
import Heading from "../../element/Heading";
import Spacer from "../../components/Spacer";
import ImageWrapper from "../../element/imageWrapper";
import ReviewCards from "../../components/ReviewCards";
import Text from "../../element/text";

const ReviewStyling = styled.div`
  display: flex;
  flex-direction: column;
  // position: absolute;
  position: relative;
  padding: 50px;
  background-color: #f3f0e5;

  @media (max-width: 425px) {
    height: 85vh;
    padding: 2rem;
  }
`;

const ReviewImage = styled.div`
  // position: relative;
  position: absolute
  top: 15%;
  opacity; 0.2;
  z-index: -0.1;
  left: 5%;
  // background-color: #482F1F;
`;

const ReviewHeadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conetnt: center;
  text-align: center;
`;

const ReviewCardsStyling = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 56.25rem;
  }
`;

const ScrollableItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 64%;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Review = () => {
  return (
    <ReviewStyling>
      <ReviewImage>
        <ImageWrapper
          src="/images/Group.svg"
          size="xxl"
          alt="inverted comma"
        />
      </ReviewImage>
      <ReviewHeadingStyle>
        <Heading
          priority="2"
          color="#341907"
          size={2}
          fontWeight={2}
          lineHeight={2}
        >
          Our Customers Love And Experience
        </Heading>
        <div style={{ marginBottom: Spacer(4) }}></div>
        <Text color="black" size="lg" fontWeight="300" lineHeight="2rem">
          Companies synergizing to deliver impeccable technological solutions
          for the client is our Blue Ocean strategy.
        </Text>
        <div style={{ marginBottom: Spacer(10) }}></div>
      </ReviewHeadingStyle>

      <ReviewCardsStyling>
        <ReviewCards
          src="/images/Person1.svg"
          size="lg"
          alt="person"
          name="James Maxwell"
          designation="HR Manager, GeekyAnts"
          para="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be"
          height="17.7rem"
          width="22rem"
        />

        <ScrollableItems>
          <ReviewCards
            src="/images/Person1.svg"
            size="lg"
            alt="person"
            name="John Robort"
            designation="HR Manager, GeekyAnts"
            para="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be"
            height="17.7rem"
            width="22rem"
          />
          <ReviewCards
            src="/images/Person1.svg"
            size="lg"
            alt="person"
            name="Yashika Max"
            designation="HR Manager, GeekyAnts"
            para="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be"
            height="17.7rem"
            width="22rem"
          />
        </ScrollableItems>
      </ReviewCardsStyling>
    </ReviewStyling>
  );
};

export default Review;
