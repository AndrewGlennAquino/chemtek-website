import Hero from "../../components/hero/Hero";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import WhyChooseUs from "../../components/why-choose-us/WhyChooseUs";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
