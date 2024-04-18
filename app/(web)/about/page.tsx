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
              The Alphonso mango is a foreign fruit that came to India through
              Goa along with Alfonso De Albuquerque, the Portuguese explorer and
              military strategist who led many Portuguese invasions in the
              1600s. From Goa, the Alphonso mango traveled to different places
              like Ratnagiri, other Konkan region and southern side of India as
              well.
            </p>
            <p className="text-sm sm:text-base text-justify leading-[1.7] text-main-color px-2">
              The Devgad Alphonso gained distinctiveness and favorable
              characteristics like the pleasant fruity smell, no fiber,
              extremely aromatic and sweet taste, becoming popular among buyers.
              The distinctiveness comes from the geographical conditions of
              Devgad as the same is not observed in other varieties grown
              elsewhere.
            </p>
            <p className="text-sm sm:text-base text-justify leading-[1.7] text-main-color px-2">
              In the early 90’s, growers brought grafts from Ratnagiri to Devgad
              for experimentation. As Devgad is majorly hard laterite rock below
              (termed as jambha dagad locally), it was difficult to plant the
              grafts. Growers uprooted existing trees of other species that had
              grown in cracks on the laterite rock and planted Alphonso grafts
              in its place. The planted grafts survived and produced Alphonso
              mangoes that tasted very different from mangoes of the Ratnagiri
              region. This was attributed to the typical weather conditions and
              soil characteristics in the geographical region of Devgad. Between
              1920 and 1930 Devgad Mango Growers engaged in marketing efforts,
              by sending their Alphonso mangoes via passenger boats to Mumbai.
              Mumbaikars recognized the unique taste of Devgad, along with its
              sweet taste, thick pulp, and extremely pleasant fruity flavor, and
              the fruit became popular.
            </p>
            <p className="text-sm sm:text-base text-justify leading-[1.7] text-main-color px-2">
              The fruit from Devgad came to be popularly known as Devgad Hapus
              in Mumbai and fetched premium prices due to its growing demand and
              popularity. It was at this time that Devgad Alphonso started
              gaining consumer goodwill to become a brand name thereby acquiring
              commercial importance. It was apparent from the growing demand and
              popularity of Devgad Alphonso that the distinctiveness of Devgad
              Alphonso was a result of the typical climatic conditions and soil
              characteristics of Devgad region which are different than even
              nearby regions like Ratnagiri.
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-y-4 w-full my-6 lg:my-0">
            <div className="flex flex-col gap-y-4 w-full p-6 bg-slate-50 rounded-md shadow-md">
              <h2 className="text-main-color font-bold px-2 text-base xs:text-lg md:text-xl ">
                Order Devgad Mangoes with 3 easy steps
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
            <div className="p-2 relative w-full min-h-[600px] border border-black rounded-md shadow-md">
              <Image
                src={"/images/about/makes.png"}
                alt="Makes"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
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
