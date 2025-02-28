import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const UserCounter = ({ targetNumber = 500, label = 'Products' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
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
        {count}+
      </motion.div>
      <div className="text-lg text-textBlack text-left">{label}</div>
    </div>
  );
};

const UserCounterList = () => {
  return (
    <div className="md:flex md:flex-wrap md:justify-center md:items-center grid grid-cols-2 lg:gap-[115px] gap-[30px] h-full lg:py-[100px] py-[30px]">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="w-1/2 md:w-auto flex justify-center">
          <UserCounter targetNumber={500} label="Products" />
        </div>
      ))}
    </div>
  );
};

export default UserCounterList;
