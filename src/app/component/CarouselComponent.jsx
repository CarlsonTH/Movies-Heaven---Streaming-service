// CarouselComponent.jsx
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const slides = [
  {
    title: "Titre de la diapositive 1",
    image:
      "https://www.numerama.com/wp-content/uploads/2023/07/design-sans-titre-1-1.jpg",
  },
  {
    title: "Titre de la diapositive 2",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  },

  {
    title: "conecer",
    image:
      "http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg",
  },
];

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => setIndex((index + 1) % slides.length),
  });

  return (
    <div>
      <h1>{slides[index].title}</h1>
      <animated.div style={props}>
        <img src={slides[index].image} alt={`Slide ${index + 1}`} />
      </animated.div>
    </div>
  );
};

export default CarouselComponent;
