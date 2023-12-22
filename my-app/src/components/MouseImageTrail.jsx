import React, { useRef } from "react";
import { useAnimate } from "framer-motion";
import HeroSection from "./HeroSection";

export const Example = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      emojis={["💪", "🏋️‍♂️", "🤸‍♂️", "🚴‍♀️", "🧘‍♂️", "🏊‍♀️", "🏃‍♂️", "🤾‍♀️"]}
    >
      <HeroSection />
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  emojis,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const emojiRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextEmoji();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextEmoji = () => {
    const emojiIndex = emojiRenderCount.current % emojis.length;
    const selector = `[data-mouse-move-index="${emojiIndex}"]`;
    const el = document.querySelector(selector);

    if (el) {
      el.style.top = `${lastRenderPosition.current.y}px`;
      el.style.left = `${lastRenderPosition.current.x}px`;
      el.style.zIndex = emojiRenderCount.current.toString();

      const rotation = Math.random() * rotationRange;

      animate(
        selector,
        {
          opacity: [0, 1],
          transform: [
            `translate(-50%, -25%) scale(0.5) ${
              emojiIndex % 2
                ? `rotate(${rotation}deg)`
                : `rotate(-${rotation}deg)`
            }`,
            `translate(-50%, -50%) scale(1) ${
              emojiIndex % 2
                ? `rotate(-${rotation}deg)`
                : `rotate(${rotation}deg)`
            }`,
          ],
        },
        { type: "spring", damping: 15, stiffness: 200 }
      );

      animate(
        selector,
        {
          opacity: [1, 0],
        },
        { ease: "linear", duration: 0.5, delay: 5 }
      );

      emojiRenderCount.current = emojiRenderCount.current + 1;
    }
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {emojis.map((emoji, index) => (
        <span
          className="pointer-events-none absolute left-0 top-0 text-6xl" // Adjust size as needed
          key={index}
          data-mouse-move-index={index}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default Example;
