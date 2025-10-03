import React from "react";
import Aboutus from "../page/Aboutus";
import Faq from "../page/Faq";
import Chatbutton from "../page/Chatbutton";
import ArrowUp from "../page/ArrowUp";
import Footer from "../page/Footer";
import TopBar from "./TopBar";
import Header from "./header";
import HeroSlider from "./HeroSlider";
import TestimonialSection from "./TestimonialSection";
import Blog from "./Blog";
import Image_section from "./Image_section";
import Whatweare from "./Whatweare";
import EnquiryPopup from "./Enquiry";
// import ScrollToTopButton from './ArrowUp'; 

function Home(props) {
  return (
    <div>
      <HeroSlider />
      <Image_section />
      <Whatweare />
      <Faq />
      <Aboutus />
      <TestimonialSection />   
      <Blog />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
