import { IoPlayCircleSharp } from "react-icons/io5";
import img from "../../../../image/about_12_1.jpg";
import shape from "../../../../image/about_12_1_shape.png";
import business from "../../../../image/about_12_2.jpg";
import visitor from "../../../../image/about_12_3.jpg";
import shapeTwo from "../../../../image/about_12_shape.png";
import { MdOutlineCloudDownload } from "react-icons/md";
const About = () => {
  return (
    <section className="wrap-container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-40 lg:gap-x-[230px] items-center">
      <div className="relative lg:max-h-96">
      <img className="rounded-3xl relative z-10 w-full" src={img} alt="" />
      
      {/* Shape Image */}
      <div className="absolute -top-9 right-10 md:right-15 lg:-right-4 animate-spin-slow  z-20">
        <img src={shape} className="w-20 md:w-full" alt="" />
      </div>
      
      {/* Business Image */}
      <div className="absolute top-24 left-0 animate-bounce-slow z-20">
        <img src={business} className="rounded-r-xl max-w-28 sm:max-w-48 md:max-w-full" alt="" />
      </div>
      
      {/* Visitor Image */}
      <div className="absolute -bottom-10 lg:-bottom-40 right-10 animate-bounce-slow sm:right-28 md:right-48 lg:-right-28 z-20">
        <img src={visitor} className="rounded-xl shadow-xl max-w-28 sm:max-w-48 md:max-w-full" alt="" />
      </div>
      
      {/* Shape Two Image */}
      <div className="absolute -top-2 hidden lg:flex lg:-right-[252px]">
        <img src={shapeTwo} alt="" />
      </div>
    </div>
        <div className="lg:max-h-96">
          <p className="uppercase text-[#3E66F3] font-semibold flex items-center gap-3">
            Who We Are <p className="w-11 bg-[#3E66F3] h-[2px]"></p>
          </p>
          <h2 className="my-4 text-3xl md:text-4xl font-bold md:leading-tight">
            We’re Building Modern And Hight Quality
            <span className="text-[#3E66F3]">Software</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#737887]">
            IT companies stay abreast of emerging technologies and industry
            trends to remain competitive and provide innovative solutions to
            their clients. This includes trends such as artificial intelligence,
            machine learning, Internet of Things (IoT), blockchain, edge
            computing, and 5G networks.
          </p>
          <h3 className="text-[18px] md:text-xl text-[#3E66F3] font-semibold mt-8">
            We are making every business grow!
          </h3>
          <div className="space-y-3 mt-8 text-[#737887]">
            <div className="flex items-center">
              <div className="bg-[#EFF1F9] p-2 rounded-lg">
                <input
                  id="checkbox2"
                  type="checkbox"
                  className="hidden peer"
                  defaultChecked
                />
                <label
                  htmlFor="checkbox2"
                  className="relative  flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-[#3E66F3] rounded-md overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-[#3E66F3]"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </label>
              </div>
              <p className="  ml-4">Super user and easy to use interface</p>
            </div>

            <div className="flex items-center">
              <div className="bg-[#EFF1F9] p-2 rounded-lg">
                <input
                  id="checkbox3"
                  type="checkbox"
                  className="hidden peer"
                  defaultChecked
                />
                <label
                  htmlFor="checkbox3"
                  className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-[#3E66F3] rounded-md overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-[#3E66F3]"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </label>
              </div>
              <p className=" ml-4">Easiest way to grow your business in days</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium tracking-tighter text-black hover:text-white bg-transparent rounded-full group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#3E66F3] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span className="relative uppercase text-sm flex items-center gap-2"><IoPlayCircleSharp size={18}/> View Demo</span>
            </a>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium tracking-tighter text-black hover:text-white bg-transparent rounded-full group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#3E66F3] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span className="relative uppercase text-sm flex items-center gap-2"><MdOutlineCloudDownload size={18}/> Download app</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
