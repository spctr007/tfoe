import React from "react";
import Navigation from "../navigationComponent/Navigation";
import Header from "../navigationComponent/Header";
import EventsPage from "../eventsComponent/EventsPage";
import ProgramsPage from "../servicesComponent/ProgramsPage";
import AboutPage from "../aboutComponent/AboutPage";
import ContactUs from "../contactUsComponent/ContactUs";
import Footer from "../footerComponent/Footer";
import ProgramsModal from "../servicesComponent/ProgramsModal";

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <EventsPage />
      <ProgramsPage />
      <AboutPage />
      <ContactUs />
      <Footer />
      <ProgramsModal />
    </div>
  );
};

export default MainPage;
