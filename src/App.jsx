import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    // Main container for the app with full height and width
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Navbar component */}
      <Navbar />

      {/* Hero section, typically the first thing users see */}
      <Hero />

      {/* About section */}
      <About />

      {/* Features section */}
      <Features />

      {/* Story section */}
      <Story />

      {/* Contact section */}
      <Contact />

      {/* Footer component */}
      <Footer />
    </main>
  );
};

export default App;
