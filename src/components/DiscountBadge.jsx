// components/DiscountBadge.jsx
import React, { useEffect, useState } from "react";

const DiscountBadge = ({ discount, endsAt }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!endsAt) return;

    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(endsAt);
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endsAt]);

  if (!discount) return null;

  return (
    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow z-10">
      {discount}% OFF
      {endsAt && (
        <div className="text-[10px] font-medium mt-1 text-yellow-200">
          ⏳ {timeLeft}
        </div>
      )}
    </div>
  );
};

export default DiscountBadge;
