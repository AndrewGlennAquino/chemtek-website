import Hero from "../../components/hero/Hero";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
