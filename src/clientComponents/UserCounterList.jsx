import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const formatNumber = (num) => {
  if (typeof num === "string") return num; // Return fixed strings like "24/7"
  if (num >= 1000) return (num / 1000).toFixed(0) + "k"; // Convert large numbers
  return num;
};

const UserCounter = ({ targetNumber, label }) => {
  const [count, setCount] = useState(
    typeof targetNumber === "string" ? targetNumber : 0
  );

  useEffect(() => {
    if (typeof targetNumber === "string") return; // Skip animation for fixed strings

    let start = 0;
    const duration = 2000; // Animation duration in ms
    const increment = targetNumber / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [targetNumber]);

  return (
    <div className="flex flex-col items-start w-[50%] md:w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:text-[73.4px] text-[54.39px] font-bold text-[#FA9508]"
      >
        {formatNumber(count)}+
      </motion.div>
      <div className="text-lg text-textBlack text-left">{label}</div>
    </div>
  );
};

const UserCounterList = () => {
  const stats = [
    { targetNumber: 500, label: "Products" },
    { targetNumber: 100000, label: "Happy Customers" },
    { targetNumber: 50000, label: "Orders Delivered" },
    { targetNumber: "24/7", label: "Customer Support" }, // Show 24/7 as a fixed value
  ];

  return (
    <div className="md:flex md:flex-wrap md:justify-center md:items-center grid grid-cols-2 lg:gap-[115px] gap-[30px] h-full lg:py-[100px] py-[30px]">
      {stats.map((stat, index) => (
        <div key={index} className="w-1/2 md:w-auto flex justify-center">
          <UserCounter targetNumber={stat.targetNumber} label={stat.label} />
        </div>
      ))}
    </div>
  );
};

export default UserCounterList;
