"use client";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ContactUs = () => {
  return (
    <div className="w-full py-6">
      <div className="container padding flex flex-col">
        <div className="w-full flex items-center justify-start gap-x-2 mt-10 md:mt-12">
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
            Contact Us
          </Link>
        </div>
        <h2 className="w-full text-left text-heading-color mt-4 text-xl sm:text-2xl lg:text-4xl font-bold">
          Contact Us
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-3 w-full mt-6">
          <div className="col-span-2 w-full flex flex-col">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:items-center justify-between w-full py-4 border-b border-main-color">
              <Link
                href={"tel:+919974835353"}
                className="flex items-center justify-start gap-x-2 text-lg font-medium"
              >
                <BsTelephone className="text-xl" />
                <span>+91 9974835353</span>
              </Link>
              <Link
                href={"tel:+919974835353"}
                className="flex items-center justify-start gap-x-2 text-lg font-medium"
              >
                <MdEmail className="text-3xl" />
                <span>truepubmedia@gmail.com</span>
              </Link>
            </div>
            <div className="flex items-center justify-between gap-x-4 w-full py-4">
              <Link
                href={"tel:+919974835353"}
                className="flex gap-x-2 text-lg font-medium"
              >
                <SlLocationPin className="text-xl w-5 h-5" />
                <div className="flex flex-col items-start justify-center gap-y-2">
                  <span className="text-main-color">Main Office Address:</span>
                  <p className="font-light">
                    502,Kabir Shilp,Near Landmark,Kudsan,Gandhinagar,Gujarat
                    382124.
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.4808297947199!2d72.62856219999999!3d23.1757968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b65c08a40c5%3A0x8428dfb396845f49!2sTruepub%20Media%20Solution!5e0!3m2!1sen!2sin!4v1713430396757!5m2!1sen!2sin"
                width="800"
                height="450"
                style={{
                  border: "0",
                }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-span-1 w-full mt-4 md:p-4">
            <div className="w-full bg-slate-50 flex flex-col items-start p-6 rounded-md shadow-md">
              <h2 className="text-2xl text-main-color font-bold">
                Let&apos;s get in touch
              </h2>
              <form
                className="flex flex-col w-full gap-y-4 mt-6"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="px-3 py-2 border-gray-300 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="px-3 py-2 border-gray-300 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Mobile Number*"
                  className="px-3 py-2 border-gray-300 border rounded-md"
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                <textarea
                  cols={5}
                  rows={5}
                  className="resize-none px-3 py-2 border-gray-300 border rounded-md"
                  placeholder="Message*"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-white bg-secondary-color font-semibold hover:shadow-md hover:underline"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
