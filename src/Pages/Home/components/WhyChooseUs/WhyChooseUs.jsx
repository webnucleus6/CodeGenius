import choose from "../../../../image/WhyChooseUs/choose_3.jpg";
import title from "../../../../image/WhyChooseUs/title_shape_3.svg";
import feature1 from "../../../../image/WhyChooseUs/choose_feature_1_1.svg";
import feature2 from "../../../../image/WhyChooseUs/choose_feature_1_2.svg";
import feature3 from "../../../../image/WhyChooseUs/choose_feature_1_3.svg";

const WhyChooseUs = () => {
  return (
    <div className="hero py-8">
      <div className="w-full flex flex-col lg:flex-row gap-10 items-center lg:my-16 lg:px-10 md:my-5 md:px-5">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={choose}
            className="w-full rounded-3xl rounded-tl-[80px] rounded-br-[80px] border-r-[30px] shadow-lg"
            alt="Why Choose Us"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0">
          <h4 className="text-lg flex items-center justify-center lg:justify-start gap-2 text-blue-600">
            <span>
              <img src={title} alt="Title Shape" />
            </span>
            Why Choose Us
          </h4>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            Your Trusted Partner For IT Success
          </h2>
          <p className="text-gray-400 mt-4">
            In today's digital landscape, having a strong online presence and
            robust IT infrastructure is crucial for business growth. But with
            so many IT agencies out there, why choose Webteck? Here's why we
            stand out.
          </p>

          {/* Feature 1 */}
          <div className="flex gap-3 my-5 items-center">
            <div className="rounded-full p-3 bg-blue-200 flex-shrink-0">
              <img className="w-[40px]" src={feature1} alt="Client-Centric" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Client-Centric Approach</h3>
              <p className="text-gray-400">
                We take the time to delve into your unique goals, challenges, and
                target audience before crafting any solutions.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-3 my-5 items-center">
            <div className="rounded-full p-3 bg-blue-200 flex-shrink-0">
              <img className="w-[40px]" src={feature2} alt="Proven Success" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Proven Track Record of Success
              </h3>
              <p className="text-gray-400">
                We showcase a curated selection of our best projects across
                various industries, demonstrating our ability.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-3 my-5 items-center">
            <div className="rounded-full p-3 bg-blue-200 flex-shrink-0">
              <img className="w-[40px]" src={feature3} alt="Trusted Experts" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                A Team of Experts You Can Trust
              </h3>
              <p className="text-gray-400">
                Our team comprises passionate and dedicated IT specialists with
                a deep understanding of the latest technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
