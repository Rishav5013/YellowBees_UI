import styled from "styled-components";
import ImageWrapper from "../../element/imageWrapper";
import Heading from "../../element/Heading";
import Text from "../../element/text";

const TechSolutionsStyle = styled.div`
  background-color: #371e0e;
  padding: 4.5rem 3.5rem;
  color: black;
  
  @media (max-width: 425px) {
   padding:1rem;
  }
`;

const SolutionsHeaderStyle = styled.div`
  text-align: center;
  padding-bottom:2rem;
  @media (max-width: 425px) {
   padding:2rem;
  }
`;

const LowerSolutionsStyling = styled.div`
 // border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width:100%;
    margin: 0;
  }
`;
const SolutionsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 31%;
  height: 10%;
  border-radius: 0.5rem;
  flex-direction: row;
  box-sizing: border-box;
  padding: 1.2rem;
  margin-top: 1rem;
  background-color: white;
  align-items: center;
  

  @media (max-width:425px){
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
  }
  `;
const ImgDiv = styled.div`
  width: 12%;
   @media (max-width:425px){
    margin-right:1rem;
  }
`;
const items = [
  {
    src: "/images/web_Img.svg",
    alt: "web_Img",
    txt: "Web Development",
  },
  {
    src: "/images/web_Img.svg",
    alt: "web_Img",
    txt: "UI/UX design",
  },
  {
    src: "/images/web_Img.svg",
    alt: "mobile_Img",
    txt: "Mobile app Development",
  },
  {
    src: "/images/web_Img.svg",
    alt: "quality_Img",
    txt: "Quality Assurance",
  },
  {
    src: "/images/web_Img.svg",
    alt: "business_Img",
    txt: "Business Analyst",
  },
  {
    src: "/images/web_Img.svg",
    alt: "devops_Img",
    txt: "Devops",
  },
  {
    src: "/images/web_Img.svg",
    alt: "web_Img",
    txt: "AI/ML development",
  },
  {
    src: "/images/web_Img.svg",
    alt: "iot_Img",
    txt: "IoT Development",
  },
  {
    src: "/images/web_Img.svg",
    alt: "dataScience_Img",
    txt: "Data Science",
  },
  {
    src: "/images/web_Img.svg",
    alt: "api_Img",
    txt: "API Development",
  },
  {
    src: "/images/web_Img.svg",
    alt: "database_Img",
    txt: "Database Development",
  },
];
const TechSolutions = () => {
  return (
    <TechSolutionsStyle>
      <SolutionsHeaderStyle>
        
        <Heading
          priority="2"
          color="white"
          size={3}
          fontWeight={1}
          lineHeight={2}
        >
          We Offers You The Best Tech Solutions
        </Heading>
      </SolutionsHeaderStyle>

      <LowerSolutionsStyling>
        {items.map((item, index) => {
          return (
            <SolutionsStyle index={index}>
              <ImgDiv>
                <ImageWrapper src={item.src} alt={item.alt} size="sm" />
              </ImgDiv>
              <Text size="lg">{item.txt}</Text>
            </SolutionsStyle>
          );
        })}
      </LowerSolutionsStyling>
    </TechSolutionsStyle>
  );
};
export default TechSolutions;
