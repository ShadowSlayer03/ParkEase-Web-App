"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import TestimonialCard from "@/components/global/TestimonialCard";

const HorizontalScrollCarousel = ({ testimonials }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [transformValues, setTransformValues] = useState(["1%", "-50%"]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 500;
    setTransformValues(["1%", isSmallScreen ? "-82%" : "-50%"]);
  }, []);

  return (
    <section ref={targetRef} className="relative h-[250vh] w-full">
      <div className="sticky top-20 flex h-[80vh] items-center overflow-hidden">
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], transformValues),
          }}
          className="flex gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              stars={testimonial.stars}
              text={testimonial.text}
              userName={testimonial.userName}
              designation={testimonial.designation}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
