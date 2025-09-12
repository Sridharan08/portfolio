import { useEffect } from "react";
import { animate } from "animejs";

const useScrollFade = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-up");

      elements.forEach((el) => {
        // Only animate once when element enters viewport
        if (el.getBoundingClientRect().top < window.innerHeight && !el.dataset.animated) {
          el.dataset.animated = "true"; // mark as animated

          animate({
            targets: el,
            opacity: [0, 1],
            translateY: [50, 0],
            easing: "easeOutExpo",
            duration: 1000,
            delay: (el, i) => i * 100
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useScrollFade;
