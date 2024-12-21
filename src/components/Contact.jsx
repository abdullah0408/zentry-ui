import React from "react";
import AnimatedTitle from "./AnimatedTitle"; // Custom animated title component
import Button from "./Button"; // Reusable button component

// ImageClipBox: Reusable component for displaying clipped images
const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="Decorative element" />
    </div>
  );
};

const Contact = () => {
  return (
    // Main container for the Contact section
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      {/* Section with background, text, and clipped images */}
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left-side clipped images for decoration */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
          />
        </div>

        {/* Top-right clipped images for decoration */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman-partial.webp"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.webp"
          />
        </div>

        {/* Centered text content */}
        <div className="flex flex-col items-center text-center">
          {/* Small description above the title */}
          <p className="font-general mb-5 text-[10px] uppercase">Join Zentry</p>

          {/* Animated title */}
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* Call-to-action button */}
          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
