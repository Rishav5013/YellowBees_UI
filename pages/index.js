import Layout from "../layout/layout";
import Container from "../element/container";
import HeroSection from "../sections/HeroSection/heroSection";
import BannerItems from "../sections/Banner/BannerItems";
import Card from "../sections/Card/index";
import Feature from "../sections/Feature";
import HireSection from "../sections/HireSection";
import Review from "../sections/Review";
import TechSolutions from "../sections/TechSolutions";
import Team from "../sections/Team";
import AccordionSection from "../sections/AccordionSection";
import ConnectUs from "../sections/ConnectUs";


export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <HeroSection />
          <BannerItems />
          <Card />
          <Feature />
          <HireSection />
          <Review />
          <TechSolutions />
          <Team />
          <AccordionSection />
          <ConnectUs />
        </Container>
      </Layout>
    </>
  );
}
