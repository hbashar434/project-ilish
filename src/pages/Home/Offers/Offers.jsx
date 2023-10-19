import React, { useEffect } from "react";
import OffersCard from "../../../components/OffersCard/OffersCard";
import { useTimer } from "react-timer-hook";

const MyTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp,
  });

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      const newExpiryTime = new Date();
      newExpiryTime.setSeconds(newExpiryTime.getSeconds() + 172800);
      restart(newExpiryTime);
    }
  }, [seconds, minutes, hours, days, restart]);

  return (
    <div className="my-text-primary font-semibold text-lg md:text-sm lg:text-3xl flex gap-1">
      <span className="flex flex-col text-center">
        {days} <span className=" text-xs font-light">DAYS</span>
      </span>
      :
      <span className="flex flex-col text-center">
        {hours} <span className=" text-xs font-light">HOURS</span>
      </span>
      :
      <span className="flex flex-col text-center">
        {minutes} <span className=" text-xs font-light">MINUTES</span>
      </span>
      :
      <span className="flex flex-col text-center">
        {seconds} <span className=" text-xs font-light">SECONDS</span>
      </span>
    </div>
  );
};

const CountDown = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 172800);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
};

const firstCard = (
  <div className="flex flex-col justify-center items-center gap-3 my-text-primary">
    <h3 className="text-xl font-semibold text-gray-200">Best Deals</h3>
    <h1 className="text-3xl font-bold">Sale of the Month</h1>
    <div>{<CountDown />}</div>
  </div>
);

const secondCard = (
  <div className="flex flex-col justify-center items-center gap-3 my-text-primary">
    <h3 className="text-xl font-semibold text-gray-200">Deal of the Day</h3>
    <h1 className="text-3xl font-bold">Seasonal Savings</h1>
    <p className="font-semibold text-xl">
      Up to
      <span className="bg-green-800 text-amber-500 ml-2 py-1 px-2 rounded-lg">
        40% OFF
      </span>
    </p>
  </div>
);

const thirdCard = (
  <div className="flex flex-col justify-center items-center gap-3 my-text-primary">
    <h3 className="text-xl font-semibold text-gray-200">Fresh Catches</h3>
    <h1 className="text-3xl font-bold">Best of the Sea</h1>
    <p className="font-semibold text-xl">
      Started at
      <span className=" ml-2 text-yellow-500">900 BDT</span>
    </p>
  </div>
);

const firstCardImg = "https://i.ibb.co/9W0NSVv/ilish-img3.jpg";
const secondCardImg = "https://i.ibb.co/w75hJSC/ilish-img1.jpg";
const thirdCardImg = "https://i.ibb.co/p3qyhwX/ilish-img2.jpg";

const Offers = () => {
  return (
    <div className="my-24 px-4 flex flex-col md:flex-row justify-center gap-6 items-center">
      <OffersCard image={firstCardImg}>{firstCard}</OffersCard>
      <OffersCard image={secondCardImg}>{secondCard}</OffersCard>
      <OffersCard image={thirdCardImg}>{thirdCard}</OffersCard>
    </div>
  );
};

export default Offers;
