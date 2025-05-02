import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/heroimg.png')" }}
    >
      <Image
        src="/leftoverlay.png"
        alt="left overlay"
        width={1000}
        height={1000}
        className="absolute left-0 inset-0 w-full h-full object-cover "
      />

      <Image
        src="/bottomoverlay.png"
        alt="bottom overlay"
        width={1000}
        height={250}
        className="absolute bottom-0  w-full  object-cover "
      />

      <div className="relative z-10 lg:flex-row flex-col  mx-auto px-4 sm:px-12 2xl:px-14 flex justify-between items-end h-full">
        <div className="lg:pb-6 lg:pt-0 pt-4 mx-auto  lg:mx-0">
          <Image
            src="/tilal.png"
            width={300}
            height={120}
            alt="Bottom Left Logo"
            className="2xl:w-[380px]"
          />
        </div>

        <div className="pb-10  flex flex-col items-center lg:items-end">
          <div className="">
            <Image
              src="/welcome.png"
              width={600}
              height={200}
              alt="Right Top Image"
            />
          </div>

          <button className="bg-cover bg-center w-70 2xl:w-110 bg-[#91cfc84d] cursor-pointer text-white py-4 text-sm 2xl:text-md px-12 rounded-full mb-4">
            DOWNLOAD BROCHURE
          </button>
          <button className="bg-cover bg-center w-70 2xl:w-110 bg-[#91cfc84d] cursor-pointer text-white py-4 text-sm 2xl:text-md px-12 rounded-full ">
            REGISTER NOW
          </button>
        </div>

        <div className="lg:absolute mx-auto lg:p-0 pb-6 top-14 sm:left-12 left-4 2xl:left-14 ">
          <Image
            src="/mainlogo.png"
            width={180}
            height={70}
            alt="logo"
            className="2xl:w-[330px] 2xl:h-[110px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
