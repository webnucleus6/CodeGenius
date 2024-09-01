import Banner from "./components/Banner";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
        <About />
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
