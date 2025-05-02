import React from "react";
import TextBox from "../Reusable/TextBox";
import Image from "next/image";
import FinanceForm from "../Forms/FinanceForm";

const PaymentPlan = () => {
  return (
    <div className="lg:py-16 py-10  flex flex-col items-center justify-center">
      <div className=" w-full mx-auto px-4 sm:px-12 2xl:px-14">
        <h2 className="text-3xl font-bold  sm:text-4xl mb-8 text-left text-black">
          Payment Plan
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className=" w-full  lg:w-1/2 ">
          <div className="lg:w-[80%] text-center mx-auto lg:gap-10 gap-4 grid grid-cols-1">

        
            <TextBox title="DURING CONSTRUCTION" content="60%" />
            <TextBox title="ON HANDOVER" content="40%" />
            </div>
          </div>

          <div className="lg:w-1/2 relative rounded-lg overflow-hidden">
            <Image
              src="/form-bg.png"
              alt="Form Background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="relative z-10">
              <FinanceForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
