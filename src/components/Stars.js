import React, { useEffect } from "react";
import star_7 from "../img/icons/star-7.svg";

const calculateMovement = (mouseX, mouseY, starX, starY, index) => {
  let movementX = 0;
  let movementY = 0;

  if (index === 0) {
    movementX = -(mouseX - starX) / 25;
    movementY = -(mouseY - starY) / 25;
  } else if (index === 1) {
    movementX = (mouseX - starX) / 50;
    movementY = -(mouseY - starY) / 50;
  } else if (index === 2) {
    movementX = (mouseX - starX) / 100;
    movementY = -(mouseY - starY) / 100;
  }

  return { movementX, movementY };
};

export default function Stars() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const stars = document.querySelectorAll(".star-bg");

      stars.forEach((star, index) => {
        const starRect = star.getBoundingClientRect();
        const starCenterX = starRect.left + starRect.width / 2;
        const starCenterY = starRect.top + starRect.height / 2;

        const { movementX, movementY } = calculateMovement(
          mouseX,
          mouseY,
          starCenterX,
          starCenterY,
          index
        );

        star.style.transform = `translate(${movementX}px, ${movementY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const starData = [
    { className: "star-bg star-bg-1", index: 0 },
    { className: "star-bg star-bg-2", index: 1 },
    { className: "star-bg star-bg-3", index: 2 },
  ];

  return (
    <>
      {starData.map((star) => (
        <img
          key={star.index}
          className={star.className}
          src={star_7}
          alt=""
        />
      ))}
    </>
  );
}
