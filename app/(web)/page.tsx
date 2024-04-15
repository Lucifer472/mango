import { Testimonial } from "@/components/views/testimonial";
import { InfoBox, InfoSvg, OriginalVsFake, cities } from "@/constant";
import { Baloo_2 } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const baloo = Baloo_2({ subsets: ["latin"] });

const myFont = localFont({
  src: "../../public/fonts/SF-Pro-Rounded-Medium.woff2",
});

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <div className="relative w-full h-[600px] sm:h-[800px] bg-[url('/images/home-2.png')] mt-12 sm:bg-[url('/images/home-1.png')] bg-contain sm:bg-cover bg-top sm:bg-center bg-no-repeat home-before">
        <div className="h-full flex items-center justify-center container padding">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex items-center justify-start border-b-2 mt-40 border-dotted border-heading-color">
              <h2
                className={`${baloo.className} text-2xl xs:text-4xl sm:text-[36px] font-bold text-heading-color max-w-96`}
              >
                100% Authentic Gir Kesar Mangoes
              </h2>
              <figure className="w-[150px] h-[75px] xs:w-[250px] xs:h-[150px]  relative">
                <Image
                  src={"/images/stamp.svg"}
                  alt="Stamp"
                  fill
                  className="object-contain"
                />
              </figure>
            </div>
            <p className="text-main-color pt-4 font-semibold">
              - Buy the world&apos;s best Gir Kesar mangoes. <br /> - Carbide &
              Chemical Free, GUARANTEED! <br /> - From the farmers, by the
              farmers!
            </p>
            <div className="flex items-center justify-start sm:flex-wrap w-full overflow-x-auto overflow-y-hidden sm:overflow-hidden gap-4 pt-4">
              {InfoBox.map((i) => (
                <div
                  key={i.label}
                  className="flex flex-col items-center justify-center px-4 py-1 border-2 border-gray-300 rounded-md font-semibold text-main-color"
                >
                  <span className="text-nowrap">{i.label}</span>
                  <span className="text-nowrap">{i.title}</span>
                </div>
              ))}
            </div>
            <Link
              href={`https://web.whatsapp.com/send?phone=+919974835353&text=${encodeURIComponent(
                "મને વધુ માહિતી આપો."
              )}`}
              className="mt-8 px-8 py-4 text-xl text-white font-semibold rounded-full hover:shadow-xl bg-secondary-color w-full text-center"
            >
              Order Kesar Mangoes Now! {`>`}
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[450px] py-4 bg-[#F6F6F6] relative">
        <div className="container padding flex flex-col items-start justify-center gap-y-4 h-full">
          <h2
            className={`${baloo.className} text-main-color text-center sm:text-left w-full font-bold text-2xl sm:mt-12`}
          >
            Why Gir Kesar Mango?
          </h2>
          <p className="text-justify hidden sm:block">{`
          Gir Kesar, a small village in Maharashtra state produces the world’s best Alphonso mango. However, the traders in the market cheat customers by selling inferior mangoes from other regions by labelling them as Gir Kesar Hapus. Gir Kesar Mango is a project by Gir Kesar Taluka Mango Grower’s Co-operative Society Limited, to give you the best original Gir Kesar Mango (Gir Kesar Hapus) directly from our farms in Gir Kesar. Buy from Gir Kesar Mango and get the best fruit home-delivered, with a guarantee of our trust.
          `}</p>
          <div className="flex flex-wrap items-center justify-evenly gap-4 w-full sm:mt-12">
            {InfoSvg.map((i, index) => (
              <div
                className="flex flex-col items-center justify-center py-4 px-2 bg-white rounded-md w-[150px] h-[150px]"
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
      <div className="w-full h-full bg-white py-8">
        <div className="container padding flex flex-col gap-y-4">
          <h2 className="w-full text-center font-semibold text-xl text-main-color">
            How to Identify Original Gir Kesar Mango?
          </h2>
          <div className="grid grid-cols-2 w-full">
            <div className="col-span-1 w-full flex flex-col items-center justify-center gap-y-4">
              <Image
                src={"/images/fake-mango.png"}
                alt="Mango"
                width={100}
                height={100}
                className="object-contain"
                style={{
                  transform: "rotateY(180deg)",
                }}
              />
              <p className="text-center font-semibold text-gray-400">
                Chemically Ripened Mango
              </p>
            </div>
            <div className="col-span-1 w-full flex flex-col items-center justify-center gap-y-4">
              <Image
                src={"/images/original-mango.png"}
                alt="Mango"
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="text-center font-semibold text-secondary-color">
                Original Gir Kesar Mango
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            {OriginalVsFake.map((o, index) => (
              <div
                className="flex items-center justify-center gap-x-6 relative w-full"
                key={index}
              >
                <p className="flex-1 text-center border py-4 px-2 rounded-xl rounded-tl-none border-gray-300 text-gray-400">
                  {o.fake}
                </p>
                <span className="absolute px-3 py-2 bg-white border border-gray-300 rounded-full">
                  {index + 1}
                </span>
                <p className="flex-1 text-center border py-4 px-2 rounded-xl rounded-tr-none border-gray-300 text-secondary-color">
                  {o.original}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gray-100 py-6 container padding">
        <h2 className={`w-full text-center text-2xl ${myFont.className}`}>
          કસ્ટમર નો અભિપ્રાય
        </h2>
        <Testimonial />
      </div>
      <div className="w-full bg-white">
        <div className="container padding flex flex-col py-6">
          <h2 className="w-full text-center font-semibold text-xl text-main-color">
            100 + Cities We Serve, all over India
          </h2>
          <div className="flex items-center justify-center w-full">
            <div className="flex justify-center flex-wrap xs:gap-2 mt-6 ">
              {cities.map((c, index) => (
                <div
                  className="py-2 w-[105px] xs:w-[120px] text-center text-sm border border-gray-300"
                  key={index}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
