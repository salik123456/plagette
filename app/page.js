import Image from "next/image";
import HeroSection from "./components/Sections/Hero";
import AboutSection from "./components/Sections/About";
import GallerySection from "./components/Sections/Gallery";
import WhyChooseUs from "./components/Sections/WhyChoose";
import Amenities from "./components/Sections/Amenities";
import LocationSection from "./components/Sections/Location";
import PaymentPlan from "./components/Sections/PaymentPlan";
import VideoSection from "./components/Sections/VideoSection";
import BrochureSection from "./components/Sections/BrochureSection";
import NewsletterSignup from "./components/Global/Footer/NewsletterSignup";
import RegisterNow from "./components/Sections/RegisterNow";

export default function Home() {
  return (
    <div className="">
 <HeroSection />
 <AboutSection/>
 <GallerySection/>
 <WhyChooseUs/>
 <Amenities/>
 <LocationSection/>
 <PaymentPlan/>
 <VideoSection/>
 <BrochureSection/>
      <footer className="">
 <NewsletterSignup/>
 <RegisterNow/>
      </footer>
    </div>
  );
}
