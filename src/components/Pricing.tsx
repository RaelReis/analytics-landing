import { Carousel } from "./Carousel";

const PRICING_DATA = [
  {
    title: "Standard",
    description: "up to 3 users",
    price: 29,
  },
  {
    title: "Standard",
    description: "up to 20 users",
    price: 99,
  },
  {
    title: "Standard",
    description: "up to 200 users",
    price: 299,
  },
];

export function Pricing() {
  return (
    <div className="mt-16 pt-28 lg:pt-40 bg-footer bg-cover bg-right bg-top min-h-screen">
      <div className="container md:text-center">
        <h2 className="font-bold text-3xl text-white">Pricing Plans</h2>
        <p className="mt-5 text-cyan-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
          pellentesque volutpat est.{" "}
        </p>
      </div>

      <Carousel
        listData={PRICING_DATA}
        render={(data) => (
          <div className="min-w-[280px] rounded-3xl p-9 bg-white flex flex-col text-center">
            <h2 className="font-bold text-2xl text-blue-950">Standard</h2>
            <span>{data.title}</span>

            <div className="mt-7 h-[1px] bg-gray-300" />

            <span className="text-[60px] text-blue-950 font-bold h-auto">
              <span className="text-3xl">$</span>
              {data.price}
            </span>

            <span className="text-sm">per month</span>

            <button className="mt-9 rounded-full py-3 bg-pink-600 text-white">Order</button>
          </div>
        )}
      />
    </div>
  );
}
