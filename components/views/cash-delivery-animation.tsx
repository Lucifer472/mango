export const CashDeliveryAnimation = () => {
  return (
    <span className="w-full text-center font-medium block mt-6 text-xl relative">
      Cash on Delivery
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible w-[calc(100% + 20px)] h-[calc(100% + 20px)] flex"
      >
        <path
          className="stroke-animation"
          style={{
            strokeWidth: "6px",
            stroke: "red",
            strokeDasharray: "0 1500",
            animation: "elementor-headline-dash forwards 2s infinite",
            animationDelay: "2s",
          }}
          fill="none"
          d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
        ></path>
      </svg>
    </span>
  );
};
