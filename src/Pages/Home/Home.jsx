import Banner from "./components/Banner";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
        <About />
        <FAQ></FAQ>
        <WhyChooseUs></WhyChooseUs>
      </div>
    </div>
  );
};

export default Home;
