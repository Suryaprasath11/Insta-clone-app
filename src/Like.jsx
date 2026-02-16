import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function DoubleClickAnimation({ size = 120, color = "#e0245e" }) {
  const [show, setShow] = useState(false);

  const handleDoubleClick = () => {
    setShow(true);
    setTimeout(() => setShow(false), 800); // hide after animation
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className="relative w-full h-full flex items-center justify-center select-none"
    >
      <AnimatePresence>
        {show && (
          <motion.div
            key="heart"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute"
          >
            <Heart size={size} color={color} fill={color} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
