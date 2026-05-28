import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBand from "../components/TrustBand";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Templates from "../components/Templates";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBand />
      <Services />
      <Portfolio />
      <Templates />
      <Packages />
      <Process />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
    </>
  );
}
