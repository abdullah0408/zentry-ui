import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

// List of navigation items
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  // States to manage navbar visibility, audio playing status, and indicator
  const [LastScrollY, setLastScrollY] = useState(0); // Keeps track of the last scroll position
  const [isNavVisible, setIsNavVisible] = useState(true); // Controls navbar visibility
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Controls audio play/pause
  const [isIndicatorActive, setIsIndicatorActive] = useState(false); // Controls indicator animation

  // Access current scroll position
  const { y: currentScrollY } = useWindowScroll();

  // Effect to handle navbar visibility based on scroll position
  useEffect(() => {
    // When scroll is at the top, show the navbar
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    }
    // If scrolling down, hide navbar
    else if (currentScrollY > LastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    }
    // If scrolling up, show navbar
    else if (currentScrollY < LastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    // Update the last scroll position for future comparisons
    setLastScrollY(currentScrollY);
  }, [currentScrollY, LastScrollY]);

  // GSAP animation for navbar visibility transitions
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100, // Slide navbar up/down
      opacity: isNavVisible ? 1 : 0, // Fade in/out
      duration: 0.2, // Animation duration
    });
  }, [isNavVisible]);

  // Refs to access navbar container and audio element
  const navContainerRef = useRef(null);
  const audioElemetRef = useRef(null);

  // Function to toggle the audio playing state and indicator active state
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev); // Toggle audio play/pause
    setIsIndicatorActive((prev) => !prev); // Toggle indicator animation
  };

  // Effect to control audio playback when isAudioPlaying state changes
  useEffect(() => {
    if (isAudioPlaying) {
      audioElemetRef.current.play(); // Play audio if audio is active
    } else {
      audioElemetRef.current.pause(); // Pause audio if audio is inactive
    }
  }, [isAudioPlaying]);

  return (
    // Navbar container with transition animations
    <div
      ref={navContainerRef}
      className="m-5 fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:insert-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        {/* Navbar */}
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Products button */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation items and audio control button */}
          <div className="flex h-full items-center">
            {/* Display navigation items on medium and larger screens */}
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Button to toggle audio and animation indicator */}
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              {/* Hidden audio element with loop */}
              <audio
                ref={audioElemetRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />

              {/* Animated indicator lines */}
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
