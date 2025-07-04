import AboutThree from "../components/AboutThree";
import BannerThree from "../components/BannerThree";
import BlogTwo from "../components/BlogTwo";
import BrandTwo from "../components/BrandTwo";
import ChatBot from "../components/chatbot/ChatBot";
import ChooseUsOne from "../components/ChooseUsOne";
import ChooseUsTwo from "../components/ChooseUsTwo";
import CounterTwo from "../components/CounterTwo";
import EventOne from "../components/EventOne";
import FacultyOne from "../components/FacultyOne";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import HeaderOne from "../components/HeaderOne";
import HeroSection from "../components/hero/HeroSection";
import InfoTwo from "../components/InfoTwo";
import MobileMenu from "../components/mobilemenu/MobileMenu";
import Navbar from "../components/Navbar";
import TestimonialsThree from "../components/TestimonialsThree";
import TopBar from "../components/TopBar";
import VideoOne from "../components/VideoOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const HomePageThree = () => {
  return (
    <>
  
      

      {/* Animation */}
      {/* <Animation /> */}

      {/* BannerThree */}
      {/* <BannerThree /> */}
      <HeroSection />

      {/* InfoTwo */}
      {/* <InfoTwo /> */}

      {/* AboutThree */}
      <AboutThree read={true} />


      {/* VideoOne */}
      <VideoOne />

      {/* CounterTwo */}
      <CounterTwo />

      {/* FacultyOne */}
      {/* <FacultyOne /> */}

      {/* ChooseUsTwo */}
      {/* <ChooseUsTwo /> */}
      <ChooseUsOne />

      {/* TestimonialsThree */}
      {/* <TestimonialsThree /> */}

      {/* EventOne */}
      {/* <EventOne /> */}

      {/* BlogTwo */}
      {/* <BlogTwo /> */}

      {/* BrandTwo */}
      {/* <BrandTwo /> */}

      {/* FooterThree */}
      
    </>
  );
};

export default HomePageThree;
