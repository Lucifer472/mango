import { OrderLoader } from "@/components/order/order-loader";
import { CashDeliveryAnimation } from "@/components/views/cash-delivery-animation";
import { OrderSlider } from "@/components/views/order-image-slider";
import { OrderSummery } from "@/components/views/order-summary";
import { SecondDetailForm } from "@/components/views/second-order-details";

const Order2Page = () => {
  return (
    <section className="w-full h-full bg-white">
      <OrderLoader />
      <OrderSlider />
      <div className="container padding flex flex-col">
        <h2 className="text-3xl font-semibold w-full text-center mt-4">
          જામવાળા ગીરની પ્રખ્યાત કેસર કેરી સીધું ખેડૂતો દ્વારા વેચાણ
        </h2>
        <CashDeliveryAnimation />
        <SecondDetailForm />
        <h3 className="my-6 text-2xl font-medium w-full text-center">
          કાર્બાઇડ તેમજ કેમિકલ ફ્રી 100% ગેરેન્ટેડ
        </h3>
        <OrderSummery />
      </div>
    </section>
  );
};

export default Order2Page;
