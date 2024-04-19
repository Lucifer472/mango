import ImageSlider from "@/components/about/image-slider";
import { InfoSvg } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="w-full py-6">
      <div className="w-full container padding flex flex-col pt-10 sm:pt-14">
        <div className="w-full flex items-center justify-start gap-x-2">
          <Link
            href={"/"}
            className="italic text-main-color font-bold text-xs xs:text-sm sm:text-base"
          >
            Home
          </Link>
          <span className="italic text-main-color">{`>`}</span>
          <Link
            href={"/about"}
            className="italic text-main-color font-medium text-xs xs:text-sm sm:text-base"
          >
            About Us
          </Link>
        </div>
        <h2 className="w-full text-left text-heading-color mt-4 text-xl sm:text-2xl lg:text-4xl font-bold">
          About Gir Kesar Mango
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-4 w-full mt-4">
          <div className="col-span-2 w-full flex flex-col gap-y-4">
            <ImageSlider />
            <div className="flex items-center justify-center w-full ">
              <Link
                href={"/order"}
                className="py-3 rounded-md text-white bg-secondary-color font-semibold hover:shadow-md hover:underline w-[240px] text-center"
              >
                Order Mangoes
              </Link>
            </div>
            <p className="text-sm sm:text-base text-justify leading-[1.7] text-main-color px-2">
              Gir Kesar mango is a variety of mango that originated in the Gir
              region of Gujarat, a state in western India. The mango is named
              after the Gir forest, which is the only natural habitat of the
              Asiatic lion and is located in the Junagadh district of Gujarat.
            </p>
            <p className="text-sm sm:text-base text-justify leading-[1.7] text-main-color px-2">
              The history of Gir Kesar mango can be traced back to the early
              1930s when Wazir Saleh Mohammad from Vanthali, Gujarat discovered
              a seedling that produced a unique variety of mangoes with a sweet
              aroma and bright orange color. He named the mango Kesar, which
              means saffron in Hindi, due to its intense aroma and color.
            </p>
            <p className="text-sm sm:text-base text-justify leading-[1.7] text-main-color px-2">
              Over time, the Gir Kesar mango gained popularity among farmers and
              consumers due to its unique flavor and texture. In 2011, the
              Government of India granted the Geographical Indication (GI) tag
              to the Gir Kesar mango, recognizing its unique qualities and
              characteristics that are directly linked to its geographical
              origin in the Gir region of Gujarat.
            </p>
            <p className="text-sm sm:text-base text-justify leading-[1.7] text-main-color px-2">
              Today, Gir Kesar mangoes are considered one of the most premium
              and sought-after varieties of mango in India and around the world,
              and are enjoyed for their sweet, aromatic flavor and smooth
              texture.
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-y-4 w-full my-6 lg:my-0">
            <div className="flex flex-col gap-y-4 w-full p-6 bg-slate-50 rounded-md shadow-md">
              <h2 className="text-main-color font-bold px-2 text-base xs:text-lg md:text-xl ">
                Order Gir Kesar Mangoes with 3 easy steps
              </h2>
              <div className="flex flex-col items-start relative w-full gap-y-4 about-step-before">
                <p className="flex items-center justify-start gap-x-2 z-10 relative">
                  <span className="w-10 h-10 text-center leading-[2.5rem] bg-background-color rounded-full font-semibold text-main-color">
                    1
                  </span>
                  <span className="text-base sm:text-xl md:text-xl font-semibold text-main-color">
                    Select Grade for Gir Kesar
                  </span>
                </p>
                <p className="flex items-center justify-start gap-x-2 z-10 relative">
                  <span className="w-10 h-10 text-center leading-[2.5rem] bg-background-color rounded-full font-semibold text-main-color">
                    2
                  </span>
                  <span className="text-base sm:text-xl md:text-xl font-semibold text-main-color">
                    Select Quantity for Gir Kesar
                  </span>
                </p>
                <p className="flex items-center justify-start gap-x-2 z-10 relative">
                  <span className="w-10 h-10 text-center leading-[2.5rem] bg-background-color rounded-full font-semibold text-main-color">
                    3
                  </span>
                  <span className="text-base sm:text-xl md:text-xl font-semibold text-main-color">
                    Fill Delivery Address
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center w-full ">
                <Link
                  href={"/order"}
                  className="py-3 rounded-md text-white bg-secondary-color font-semibold hover:shadow-md hover:underline w-[240px] text-center"
                >
                  Order Mangoes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[450px] py-4 relative">
          <div className="container padding flex flex-col items-start justify-center gap-y-4 h-full">
            <h2
              className={`text-main-color text-center sm:text-left w-full font-bold text-2xl sm:mt-12`}
            >
              Why Gir Kesar Mango?
            </h2>
            <p className="text-justify hidden sm:block">{`
          Gir Kesar, a small village in Maharashtra state produces the world’s best Alphonso mango. However, the traders in the market cheat customers by selling inferior mangoes from other regions by labelling them as Gir Kesar Hapus. Gir Kesar Mango is a project by Gir Kesar Taluka Mango Grower’s Co-operative Society Limited, to give you the best original Gir Kesar Mango (Gir Kesar Hapus) directly from our farms in Gir Kesar. Buy from Gir Kesar Mango and get the best fruit home-delivered, with a guarantee of our trust.
          `}</p>
            <div className="flex flex-wrap items-center justify-evenly gap-4 w-full sm:mt-12">
              {InfoSvg.map((i, index) => (
                <div
                  className="flex flex-col items-center justify-center py-4 px-2 bg-slate-50 shadow-md rounded-md w-[150px] h-[150px]"
                  key={index}
                >
                  <Image
                    src={`/images/icons/${index + 1}.png`}
                    alt={i}
                    width={50}
                    height={50}
                  />
                  <span className="text-center text-xl">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
