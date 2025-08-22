import Hero from "../../components/hero/Hero";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import WhyChooseUs from "../../components/why-choose-us/WhyChooseUs";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import ServiceArea from "../../components/service-area/ServiceArea";
import Equipment from "../../components/equipment/Equipment";

/**
 * Home page component with section components
 */
const Home = () => {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <ServiceArea />
      <Equipment />
      <Testimonials />
    </main>
  );
};

export default Home;
