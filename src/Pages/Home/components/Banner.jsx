
import BannerLeft from "./BannerLeft";
import Globe from "./Globe";

const Banner = () => {
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-5 items-center justify-between h-[600px] ">
      <div className="w-full md:w-[50%]">
        <BannerLeft />
      </div>
      <div className="w-full md:w-[50%]">
        <Globe />
      </div>
    </div>
  );
};

export default Banner;
