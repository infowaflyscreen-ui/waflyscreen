import React from "react";
import Footer from "./page/Footer";
import TopBar from "./page/TopBar";
import { Outlet } from "react-router-dom";
import ChatButton from "./page/Chatbutton";
import ArrowUp from "./page/ArrowUp";
import EnquiryPopup from "./page/Enquiry";
import HeroSlider from "./page/HeroSlider";
import Header from "./page/Header";

export default function Layout() {
  return (
    <>
      {/* <TopBar /> */}
      <Header />      
      <main>
        <Outlet /> {/* renders the current route here */}
      </main>
            {/* <EnquiryPopup /> */}
      
      <ChatButton />
      <ArrowUp />
      <Footer />
    </>
  );
}
