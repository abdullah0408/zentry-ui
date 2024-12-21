import gsap from "gsap"; // Import GSAP for animations
import { useGSAP } from "@gsap/react"; // Custom hook for GSAP integration
import React from "react";
import { ScrollTrigger } from "gsap/all"; // Import GSAP ScrollTrigger plugin for scroll-based animations
import AnimatedTitle from "./AnimatedTitle"; // Custom AnimatedTitle component for text animation

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Using GSAP custom hook for animations
  useGSAP(() => {
    // Initialize GSAP timeline for scroll-triggered animation
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip", // Element that triggers the scroll animation
        start: "center center", // Start when the center of the trigger element reaches the center of the viewport
        end: "+=800 center", // End after scrolling 800px further
        scrub: 0.5, // Smooth scrubbing of the animation tied to the scroll position
        pin: true, // Pin the element during the animation
        pinSpacing: true, // Allow the pinning to have spacing, maintaining the layout
      },
    });

    // Animation: Modify the size and border radius of the mask-clip-path element
    clipAnimation.to(".mask-clip-path", {
      width: "100vw", // Full viewport width
      height: "100vh", // Full viewport height
      borderRadius: 0, // Reset border radius to 0
    });
  });

  return (
    // Main container for the About section
    <div id="about" className="min-h-screen w-screen">
      {/* Section with welcome text and title */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>

        {/* Animated title component */}
        <AnimatedTitle
          title="Disc<b>o</b>ver the World's <br /> l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        {/* Subtext under the title */}
        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p>
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      {/* Scroll-triggered section with background image */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          {/* Background image with absolute positioning and full cover */}
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
