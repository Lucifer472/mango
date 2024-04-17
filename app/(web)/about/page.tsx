import ImageSlider from "@/components/about/image-slider";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full container padding flex flex-col pt-16">
        <div className="w-full flex items-center justify-start gap-x-2">
          <Link href={"/"} className="italic text-main-color font-bold">
            Home
          </Link>
          <span className="italic text-main-color">{`>`}</span>
          <Link href={"/about"} className="italic text-main-color font-medium">
            About Us
          </Link>
        </div>
        <h2 className="w-full text-left text-heading-color mt-4 text-xl font-bold">
          About Gir Kesar Mango
        </h2>
        <ImageSlider />
        <div className="flex items-center justify-center w-full mt-4">
          <Link
            href={"/order"}
            className="py-3 rounded-md text-white bg-secondary-color font-semibold hover:shadow-md hover:underline w-[240px] text-center"
          >
            Order Mangoes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
