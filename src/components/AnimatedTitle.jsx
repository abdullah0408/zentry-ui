import React, { useRef, useEffect } from "react"; // Import React hooks
import gsap from "gsap"; // Import GSAP for animations

const AnimatedTitle = ({ title, containerClass }) => {
  // Reference to the container element
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context to scope animations
    const ctx = gsap.context(() => {
      // Define a timeline for the title animation
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Element that triggers the animation
          start: "100 bottom", // Animation starts when the element is near the bottom of the viewport
          end: "center bottom", // Animation ends when the center of the element reaches the bottom of the viewport
          toggleActions: "play none none reverse", // Play animation on scroll down, reverse on scroll up
        },
      });

      // Animate each word in the title
      titleAnimation.to(".animated-word", {
        opacity: 1, // Fade-in effect
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)", // Remove initial transformations
        ease: "power2.inOut", // Smooth easing
        stagger: 0.02, // Stagger the animations of the words slightly
      });
    }, containerRef);

    // Cleanup function to revert GSAP animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    // Container for the animated title
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {/* Split the title into lines and render each as a separate div */}
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {/* Split each line into words and render them as spans */}
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              // Render words with HTML safely using dangerouslySetInnerHTML
              dangerouslySetInnerHTML={{ __html: word }}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
