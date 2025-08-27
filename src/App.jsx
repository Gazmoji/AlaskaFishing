import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TripsGrid from "./components/TripsGrid";
import KenaiHighlight from "./components/KenaiHighlight";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <KenaiHighlight />
      <TripsGrid />
      <Booking />
      <Footer />
    </>
  );
}
