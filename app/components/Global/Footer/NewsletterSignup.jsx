import React from "react";
import Image from "next/image";
import NewsletterForm from "../../Forms/NewsletterForm";

const NewsletterSignup = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className=" w-full mx-auto px-4 sm:px-12 2xl:px-14 text-left">
        <h2 className="text-3xl font-bold mb-2">Sign Up Now.</h2>
        <p className="text-sm mb-6 ">Join us for exclusive access:</p>

        <p className="mb-8  font-medium 2xl:text-lg text-mobile lg:text-md lg:max-w-[90%]">
          Subscribe today to get first hand information about Dubai’s newest
          property releases and the finest real estate deals on the market. Be
          the first to receive exclusive previews of the top developer projects
          and property types.
        </p>

        <div className="flex justify-center mb-4">
          <Image
            src="/footer/email.png"
            alt="Email Icon"
            width={40}
            height={40}
          />
        </div>

        <p className="mb-6 text-sm text-white mx-auto text-center">
          Join over 20,000 members to get weekly updates on <br />
          new off-plan launches and latest news & tips
        </p>

     <NewsletterForm/>

        <p className="text-xs text-white text-center">
          no spams, unsubscribe anytime!
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
