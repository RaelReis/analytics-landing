export function Hero() {
  return (
    <div className="h-screen w-full bg-hero bg-contain bg-no-repeat pt-24">
      <div className="container flex flex-col md:flex-row">
        <div className="w-fit md:hidden">
          <img src="/src/assets/dashboard.png" alt="dashboard" />
        </div>
        <div className="mt-6 md:mt-28 flex flex-col gap-y-3 md:w-1/2">
          <h1 className="font-bold text-3xl text-white">
            Monitor your business on real-time dashboard
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
            pellentesque volutpat est.{" "}
          </p>
          <button className="mt-6 w-full rounded-full py-4 font-medium bg-pink-600 text-white">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
}
