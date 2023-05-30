export function Content() {
  return (
    <div className="mt-16 container flex flex-col gap-y-14">
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-7">
        <div className="flex-1 flex flex-col gap-y-5">
          <h2 className="text-3xl font-bold text-blue-950">Automated Reports & Widget Alerts</h2>
          <p className="text-cyan-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
            pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
            Vitae et, tortor pulvinar risus pulvinar sit amet.
          </p>
        </div>

        <div className="flex-1 rounded-3xl shadow-xl">
          <img src="/src/assets/content-1.png" alt="content-1" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-7">
        <div className="flex-1 flex flex-col gap-y-5">
          <h2 className="text-3xl font-bold text-blue-950">
            Fully customizable to address your needs{" "}
          </h2>
          <p className="text-cyan-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
            pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
            Vitae et, tortor pulvinar risus pulvinar sit amet.
          </p>
        </div>

        <div className="flex-1 rounded-3xl shadow-xl md:order-first">
          <img src="/src/assets/content-2.png" alt="content-1" />
        </div>
      </div>

      <div className="flex flex-col gap-y-7 md:flex-row md:gap-x-4">
        <div className="flex-1 flex flex-col gap-y-5">
          <h2 className="text-3xl font-bold text-blue-950">Pre-built Dashboard Templates</h2>
          <p className="text-cyan-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
            pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
            Vitae et, tortor pulvinar risus pulvinar sit amet.
          </p>
        </div>

        <div className="flex-1 rounded-3xl shadow-xl">
          <img src="/src/assets/content-3.png" alt="content-1" />
        </div>
      </div>
    </div>
  );
}
