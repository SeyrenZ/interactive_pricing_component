"use client";
import React, { useEffect, useState } from "react";
import "./component.css";
import { CheckIcon } from "@/public";
const Pricing = () => {
  const DATA = [
    {
      pageView: "10K",
      monthlyPrice: 8,
      yearlyPrice: 72.0,
    },
    {
      pageView: "50K",
      monthlyPrice: 12,
      yearlyPrice: 108,
    },
    {
      pageView: "100K",
      monthlyPrice: 16,
      yearlyPrice: 144,
    },
    {
      pageView: "500K",
      monthlyPrice: 24,
      yearlyPrice: 216,
    },
    {
      pageView: "1M",
      monthlyPrice: 36,
      yearlyPrice: 320,
    },
  ];

  const [priceValue, setPriceValue] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${
        (priceValue * 100) / (DATA.length - 1) - priceValue
      }% 100%`,
    };
  };
  const handleInputChange = (e: any) => {
    setPriceValue(e.target.valueAsNumber);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col items-center gap-y-32">
      {/* Header */}
      <div className="flex flex-col items-center gap-y-3">
        <div className="text-4xl font-extrabold text-[#293356]">
          Simple, traffic-based pricing
        </div>
        <div className="text-lg text-[#858fad]">
          Sign-up for our 30-day trial. No credit card required
        </div>
      </div>
      {/* Pricing Component */}
      <div className="w-[650px] h-auto p-12 pt-14 rounded-lg bg-white shadow-xl flex flex-col gap-y-[50px]">
        {/* Price Value */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold  text-[#858fad] tracking-widest">
            {DATA[priceValue].pageView} PAGEVIEWS
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-5xl font-bold text-[#293356]">
              $
              {!isChecked
                ? DATA[priceValue].monthlyPrice
                : DATA[priceValue].yearlyPrice}
            </span>
            <span className="text-lg text-[#858fad] font-bold">
              {!isChecked ? "/ month" : "/ year"}
            </span>
          </div>
        </div>
        <div className="slider-container">
          <input
            min={0}
            max={DATA.length - 1}
            step={1}
            value={priceValue}
            type="range"
            onChange={handleInputChange}
            style={getBackgroundSize()}
            id="mySlider"
          />
        </div>
        {/* yearly billing */}
        <div className="flex justify-end pr-8 items-center gap-x-4">
          <div className="text-md text-[#858fad] font-bold">
            Monthly Billing
          </div>
          <label className="switch">
            <input type="checkbox" onChange={handleCheckboxChange} />
            <span className="slider round"></span>
          </label>
          <div className="text-md text-[#858fad] font-bold">Yearly billing</div>
          <div className="p-0.5 px-2 rounded-xl text-sm text-[#ff8c66] bg-[#ff8c66] bg-opacity-20">
            25% discount
          </div>
        </div>
        <hr className="w-full" />
        {/* footer */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-4 ">
              <CheckIcon className="w-3" />
              <div className="text-md text-[#858fad] font-medium">
                Unlimited websites
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <CheckIcon className="w-3" />
              <div className="text-md text-[#858fad] font-medium">
                100% data owndership
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <CheckIcon className="w-3" />
              <div className="text-md text-[#858fad] font-medium">
                Email reports
              </div>
            </div>
          </div>
          <button className="w-56 h-14 p-5 rounded-[50px] bg-[#293356] hover:bg-[#1b2139] text-white text-md font-medium flex items-center justify-center">
            Start my Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
