import React from "react";
import Image from "next/image";
import AppButton from "../Reusable/Button";

const LocationSection = () => {
  return (
    <div className="lg:py-16 py-10 ">
      <div className=" mx-auto px-4 sm:px-12 2xl:px-14 ">
        <h2 className="text-3xl font-bold  sm:text-4xl mb-4 text-black">
          LOCATION
        </h2>
        <p className="mt-2 lg:text-md text-mobile 2xl:text-lg  text-black">
          Plagette 32 boasts an incredibly convenient location, placing you mere
          steps away from all your needs. Situated just a short 25-minute drive
          from Dubai International Airport and a mere 15-minute journey from the
          world-renowned Mall of the Emirates, this new sanctuary offers
          effortless access to Dubai's most prominent destinations.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col items-center mt-4">
        <div className="lg:w-1/2 w-full  lg:pl-4 sm:pl-12 2xl:pl-14 lg:pr-20 ">
          <div className="grid grid-cols-2 lg:text-left text-center  gap-4">
            <div>
              <h3 className="text-xl 2xl:text-[50px] font-semibold text-primary uppercase tracking-wider">
                10 Mins
              </h3>
              <p className="mt-1 lg:text-md text-mobile font-medium text-black">
                City Centre Me'aisem
              </p>
            </div>
            <div>
              <h3 className="text-xl 2xl:text-[50px]  font-semibold text-primary uppercase tracking-wider">
                25 Mins
              </h3>
              <p className="mt-1 lg:text-md text-mobile font-medium text-black">
                Downtown Dubai
              </p>
            </div>
            <div>
              <h3 className="text-xl 2xl:text-[50px]  font-semibold text-primary uppercase tracking-wider">
                15 Mins
              </h3>
              <p className="mt-1 lg:text-md text-mobile font-medium text-black">
                Mall of Emirates
              </p>
            </div>
            <div>
              <h3 className="text-xl 2xl:text-[50px]  font-semibold text-primary uppercase tracking-wider">
                25 Mins
              </h3>
              <p className="mt-1 lg:text-md text-mobile font-medium text-black">
                Al Maktoum Airport
              </p>
            </div>
            <div>
              <h3 className="text-xl 2xl:text-[50px]  font-semibold text-primary uppercase tracking-wider">
                15 Mins
              </h3>
              <p className="mt-1 lg:text-md text-mobile font-medium text-black">
                Kempinski Hotel
              </p>
            </div>
            <div>
              <h3 className="text-xl 2xl:text-[50px] font-semibold text-primary uppercase tracking-wider">
                30 Mins
              </h3>
              <p className="mt-1 lg:text-md text-mobile font-medium text-black">
                DXB Airport
              </p>
            </div>
          </div>
          <div className="mt-12 lg:text-left text-center">
            <AppButton text={"LEARN MORE"} />
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:pl-8 pl-0 sm:pl-6">
          <Image
            src="/locationmain.png"
            width={600}
            height={400}
            alt="Location"
            className="w-full h-auto object-cover lg:p-0 p-4 lg:mt-0 mt-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
