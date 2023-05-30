import featureOne from "../assets/feature-1.svg";
import featureTwo from "../assets/feature-2.svg";
import featureThree from "../assets/feature-3.svg";

export function Features() {
  return (
    <div className="container mt-12">
      <div className="text-start md:text-center">
        <h2 className="font-bold text-3xl text-blue-950">Main Features</h2>
        <p className="mt-5 text-cyan-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
          pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
          Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row md:gap-x-4 gap-y-9">
        <div className="flex md:flex-col md:items-center md:text-center gap-x-7">
          <div className="min-w-[60px]">
            <img src={featureOne} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="md:py-4 font-bold text-base text-blue-950">Monitoring 24/7</h3>
            <span className="text-cyan-800">
              Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Elementum nisi aliquet
              volutpat.
            </span>
          </div>
        </div>
        <div className="flex md:flex-col md:items-center md:text-center gap-x-7">
          <div className="min-w-[60px]">
            <img src={featureTwo} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="md:py-4 font-bold text-base text-blue-950">Widget System</h3>
            <span className="text-cyan-800">
              Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar
              risus pulvinar.
            </span>
          </div>
        </div>
        <div className="flex md:flex-col md:items-center md:text-center gap-x-7">
          <div className="min-w-[60px]">
            <img src={featureThree} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="md:py-4 font-bold text-base text-blue-950">Best Performance</h3>
            <span className="text-cyan-800">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet
              volutpat.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
