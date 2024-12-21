import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  // Reference to the image container for mouse interactions
  const frameRef = useRef(null);

  // Animation duration and easing function for smooth transitions
  const animationDuration = 0.3;
  const animationEase = "power1.inOut";

  // Function to handle mouse movement and apply tilt/rotation effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    // Ensure the element exists before applying any transformations
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the rotation based on mouse position within the element
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Apply the calculated rotation to the element using GSAP for smooth animation
    gsap.to(element, {
      duration: animationDuration,
      rotateX,
      rotateY,
      transformPerspective: 500, // Adds depth to the 3D effect
      ease: animationEase, // Smooth animation easing
    });
  };

  // Reset the rotation when the mouse leaves the element
  const handleMouseLeave = () => {
    const element = frameRef.current;

    // Reset the rotation and perspective to original state using GSAP
    gsap.to(element, {
      duration: animationDuration,
      rotateX: 0,
      rotateY: 0,
      ease: animationEase,
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        {/* Subtitle for the section */}
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          {/* Animated title for the story */}
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                {/* Image with mouse interaction effects */}
                <img
                  onMouseMove={handleMouseMove} // Apply mouse move effect
                  onMouseLeave={handleMouseLeave} // Reset on mouse leave
                  ref={frameRef} // Attach ref for GSAP animation
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            {/* Rounded corners effect */}
            <RoundedCorners />
          </div>
        </div>

        {/* Section for description and action button */}
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            {/* Button to discover the prologue */}
            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
