import React from "react";
import Image from "next/image";

import AppButton from "../Reusable/Button";

const GallerySection = () => {
  return (
    <div className="lg:py-16 py-10">
      <div className=" mx-auto px-4 sm:px-12 2xl:px-14">
        <h2 className="text-3xl font-bold text-black sm:text-4xl mb-8 text-left">
          GALLERY
        </h2>
        <p className="mt-2 lg:text-lg text-mobile text-black text-left mb-12 max-w-full sm:max-w-[80%] 2xl:max-w-[60%]">
          Get a glimpse of this 'Cote d'Azur' themed community that brings the
          spirit of the sun-kissed French Riviera to Tilal Al Ghaf.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-12">
          <div className=" overflow-hidden col-span-full">
            <Image
              src="/galleryone.png"
              width={1200}
              height={600}
              alt="Gallery One"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="  relative">
            <Image
              src="/gallerytwo.png"
              width={500}
              height={600}
              alt="Gallery Two"
              className="w-full h-full object-cover"
            />
            <Image
              src="/everyday.png"
              width={300}
              height={200}
              alt="everyday"
              className=" absolute top-[-40px] 2xl:top-[-50px] left-[-19px]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className=" overflow-hidden">
              <Image
                src="/gallerythree.png"
                width={500}
                height={300}
                alt="Gallery Three"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden">
              <Image
                src="/galleryfour.png"
                width={500}
                height={300}
                alt="Gallery Four"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" relative col-span-full">
        <div className=" mx-auto px-4 sm:px-12 2xl:px-14 mt-6 2xl:mt-12">
          <Image
            src="/galleryfive.png"
            width={1200}
            height={600}
            alt="Gallery Five"
            className="w-full h-full object-cover"
          />
          <div className="mt-6 flex justify-center lg:justify-end">
            <AppButton text="Download Renders" />
          </div>
        </div>

        <Image
          src="/dance.png"
          width={300}
          height={497}
          alt="everyday"
          className=" absolute lg:block hidden top-[-40px] h-[97%] 2xl:h-[94%] right-0"
        />
      </div>
    </div>
  );
};

export default GallerySection;
