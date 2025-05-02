import React from "react";
import Image from "next/image";
import AppButton from "../Reusable/Button";

const Amenities = () => {
  return (
    <div className="lg:py-16 py-10 bg-white">
      <div className="">
        <div className=" mx-auto px-4 sm:px-12 2xl:px-14">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-8 text-left">
            AMENITIES
          </h2>
          <p className="mt-2 lg:text-md text-mobile 2xl:text-lg text-black mb-6  lg:mb-12">
            Plagette 32 offers a rich tapestry of amenities, blending luxury,
            nature, and serenity for an unmatched waterfront living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 max-w-8xl mx-auto px-4 sm:pl-6 lg:pl-6 2xl:pl-8 lg:pr-0   gap-6 lg:tw-mr-0 col-span-full">
            <div className="flex flex-col">
              <Image
                src="/amenities/amenityone.png"
                width={600}
                height={400}
                alt="Kids Pool"
                className="w-full h-full object-cover"
              />
              <p className="mt-4 text-center  text-black">
                KIDS&apos; POOL
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src="/amenities/amenitytwo.png"
                width={600}
                height={400}
                alt="Private Beach"
                className="w-full h-full object-cover"
              />
              <p className="mt-4 text-center  text-black">
                PRIVATE BEACH
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-full lg:pl-0 lg:pr-6 px-4 ">
            <div className="flex flex-col ">
              <Image
                src="/amenities/amenitythree.png"
                width={600}
                height={400}
                alt="Restaurants"
                className="w-full h-full object-cover"
              />
              <p className="mt-4 text-center  text-black">
                RESTAURANTS
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src="/amenities/amenityfour.png"
                width={600}
                height={400}
                alt="Family Pool"
                className="w-full h-full object-cover"
              />
              <p className="mt-4 text-center  text-black">
                FAMILY POOL
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-12 mt-6 flex justify-center lg:justify-end text-center ">
          <AppButton text="DOWNLOAD BROCHURE" />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
