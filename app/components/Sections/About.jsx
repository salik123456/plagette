import React from "react";
import Image from "next/image";
import TextBox from "../Reusable/TextBox";

const AboutSection = () => {
  return (
    <div className="lg:py-16 py-8 lg:pt-24 bg-white">
      <div className=" mx-auto pl-4 sm:pl-12 2xl:pl-14">
        <div className="lg:grid lg:grid-cols-[70%_30%] lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              PLAGETTE 32
            </h2>
            <p className="mt-2 lg:text-lg text-mobile text-black">
              Tilal Al Ghaf
            </p>
            <div className="mt-6 text-black ">
              <p className="lg:text-[22px] text-mobile 2xl:text-lg max-w-[90%]">
                Plagette 32 by Majid Al Futtaim is a tribute to the elegance of
                "La Belle vie," drawing inspiration from the sophisticated
                ambiance of the French Riviera, beautifully brought to life
                within the Tilal Al Ghaf community. Comprising of{" "}
                <strong className="font-semibold">
                  4 Water Bungalows and 28 Club Villas
                </strong>{" "}
                featuring 4 and 5 bedroom layouts, Plagette 32 redefines the
                standards of luxury living in Dubai. These residences seamlessly
                integrate with the natural surroundings and the ever-changing
                hues of the lagoon, creating a captivating visual symphony.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 relative">
            <div className="relative rounded-md overflow-hidden h-full w-full">
              <Image
                src="/about-person-bg.png"
                alt="About Person Background"
                className="right-0 absolute h-full top-0 w-full"
                objectFit="cover"
                width={300}
                height={400}
              />
            </div>
            <div className="absolute bottom-15 left-[-123px] z-10 h-full">
              <Image
                src="/aboutpersons.png"
                width={300}
                height={500}
                alt="About Persons"
                className="h-[122%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-30 mt-0  mx-auto px-4 sm:px-12 2xl:px-14 grid grid-cols-1 md:grid-cols-3 lg:gap-15 gap-6 2xl:30">
        <TextBox title="STARTING PRICE" content="AED 7.5M" />
        <TextBox title="HANDOVER" content="2026" />
        <TextBox title="PAYMENT PLAN" content="60/40" />
      </div>
    </div>
  );
};

export default AboutSection;
