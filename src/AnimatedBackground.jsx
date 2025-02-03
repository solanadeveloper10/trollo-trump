import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const randomRange = (min, max) => Math.random() * (max - min) + min;

const AnimatedBackground = () => {
  const [images, setImages] = useState([]);
  const imageUrl = "/face_static.webp";

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => [
        ...prev,
        {
          id: Date.now(),
          size: randomRange(30, 700),
          x: randomRange(0, window.innerWidth),
          y: randomRange(0, window.innerHeight),
        },
      ]);

      // Remove images after a short time
      setTimeout(() => {
        setImages((prev) => prev.slice(1));
      }, 3000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container">
      <AnimatePresence>
        {images.map(({ id, size, x, y }) => (
          <motion.img
            key={id}
            src={imageUrl}
            className="animated-image"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x, y }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.5 }}
            style={{ width: size, height: size }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBackground;
