import React from "react";
import RegistrationForm from "../Forms/RegistrationForm";
import Image from "next/image";

const RegisterNow = () => {
  return (
    <div className="bg-white py-12 relative">
      <div className=" mx-auto  sm:pl-12 2xl:pl-14">
        <div className="grid grid-cols-1 relative md:grid-cols-2 gap-12 items-center">
          <div className="">
            <h2 className="text-3xl bold text-primary sm:text-4xl text-center mb-8">
              Register Now
            </h2>

            <RegistrationForm />
          </div>

          <div className="flex justify-around  flex-col h-full">
            <Image
              src="/footer/yellow-pattern.png"
              alt="Yellow Pattern"
              width={400}
              height={200}
              className="absolute lg:top-[-5%] lg:w-[400px] lg:h-[200px] w-[100px] h-[100px] top-[-20px] right-0 "
            />
            <div className="  flex items-center justify-start relative z-10">
              <div className="text-black font-bold text-[50px] 2xl:text-[70px] leading-[1.1] text-left p-4">
                <h3 className=" ">THE BEST </h3>
                <p className="">DEALS</p>
                <p className="">ARE THE</p>
                <p className=" font-bold">RESULTS</p>
                <p className="">OF OUR</p>
                <p className="text-primary font-bold">EXPERTISE</p>
              </div>
            </div>
            {/* Contact Info */}
            <div
              className="mt-12 text-left lg:ml-0 ml-4"
              style={{ color: "#838383" }}
            >
              <p className="text-lg" style={{ color: "#121212" }}>
                Contact us today
              </p>
              <p className="text-lg" style={{ color: "#121212" }}>
                +971 56 604 5684
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
