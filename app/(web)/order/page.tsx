import { OrderLoader } from "@/components/order/order-loader";
import { OrderMenu } from "@/components/views/order";
import Link from "next/link";

const OrderPage = () => {
  return (
    <div className="w-full bg-gray-100 pb-6">
      <OrderLoader />
      <div className="container padding pt-16 flex flex-col">
        <div className="w-full flex items-center justify-start gap-x-2">
          <Link href={"/"} className="italic text-main-color font-bold">
            Home
          </Link>
          <span className="italic text-main-color">{`>`}</span>
          <Link href={"/order"} className="italic text-main-color font-medium">
            Order Gir Kesar
          </Link>
        </div>
        <h2 className="w-full text-left border-b-2 border-dotted border-heading-color text-heading-color mt-8 pb-4 text-xl font-bold">
          Gir Kesar Mango Season 2024
        </h2>
        <p className="text-sm text-gray-900 pt-2">
          અમે 2024 ની સિઝનના ઓર્ડર લેવાનું ચાલુ કરી દીધું છે.
        </p>
        <div className="my-2"></div>
        <OrderMenu />
      </div>
    </div>
  );
};

export default OrderPage;
