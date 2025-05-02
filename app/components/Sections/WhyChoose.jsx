import React from "react";
import Image from "next/image";
import AppButton from "../Reusable/Button";

const WhyChooseUs = () => {
  return (
    <div className="lg:py-16 py-10 bg-white">
      <div className="flex lg:flex-row gap-10 flex-col items-center">
        <div className="lg:w-1/2 lg:pl-0 pl-4 sm:pl-6 ">
          <Image
            src="/whymain.png"
            width={600}
            height={400}
            alt="Why Choose Us"
            className="w-full h-full "
          />
        </div>

        <div className="lg:w-1/2  pr-4 sm:pr-12 2xl:pr-14 lg:pl-0 pl-4 sm:pl-6">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-4">
            WHY CHOOSE US?
          </h2>
          <p className="mt-2 lg:text-md text-mobile 2xl:text-lg text-black">
            Plagette 32 is a place of unparalleled uniqueness, where exclusive
            bungalows and club villas with direct access to a serene sandy
            lagoon beach and crystalline waters await. At the heart of Plagette
            32 is an iconic club designed with a playful rhythm and surrounded
            by its own private gardens. Each home boasts its own outdoor patio
            and pool, thoughtfully blending into the natural topography,
            creating an intimate retreat where wonder unfolds. The intricate
            designs are characterized by organic color palettes and Zen
            influences, offering a sense of personal well-being and in
            collaboration with an international multidisciplinary team of
            architects, planners, designers such as Nabil Gholam Architects and
            Bergaman Design House.
          </p>
          <div className="flex justify-center lg:justify-end mt-6">
            <AppButton text="LEARN MORE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
