import React from "react";
import Image from "next/image";
import BrochureForm from "../Forms/BrochureForm";

const BrochureSection = () => {
  return (
    <section className="relative pt-20 pb-30 sm:px-12 2xl:px-14  mx-auto">
      <h2 className="text-3xl font-bold text-black sm:text-4xl lg:mb-8 pl-4 lg:pl-0 mb-16 text-left">
        BROCHURE
      </h2>

      <div
        className="relative bg-cover bg-center h-auto lg:h-[74vh] flex flex-col md:flex-row items-start p-5 lg:p-10"
        style={{ backgroundImage: "url(/brochure-bg.png)" }}
      >
        <div className="w-full md:w-1/2 z-20 max-w-md">
          <div className="mb-4 bg-white p-4 text-center">
            <span className="text-md uppercase block ">
              Plagette 32 Brochure
            </span>
          </div>
          <BrochureForm />
        </div>

        <div className="absolute lg:block hidden right-[-13%] bottom-[-5%] z-10 w-1/2">
          <Image
            src="/brochure-right.png"
            alt="Brochure Right"
            width={400}
            className="w-full"
            height={300}
          />
        </div>

        <div className="absolute top-[-10%] right-0 z-10">
          <Image src="/step.png" alt="Steps Text" width={500} height={110} />
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
