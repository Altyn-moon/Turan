import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface CurtainsProps {
  progress: MotionValue<number>;
}

export default function Curtains({ progress }: CurtainsProps) {
  const leftX = useTransform(
    progress,
    [0.01, 0.03, 0.05, 0.14, 0.16],
    ["-100%", "0%", "0%", "0%", "-100%"]
  );
  const rightX = useTransform(
    progress,
    [0.01, 0.03, 0.05, 0.14, 0.16],
    ["100%", "0%", "0%", "0%", "100%"]
  );
  const scale = useTransform(
    progress,
    [0.01, 0.03, 0.05, 0.14, 0.16],
    [1.5, 1, 1, 1, 1.5]
  );
  const opacity = useTransform(
    progress,
    [0.01, 0.03, 0.05, 0.14, 0.14, 0.16],
    [0, 1, 0, 0, 1, 0]
  );

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen z-30 pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 origin-right"
        style={{ x: leftX, scale }}
      >
        <Image
          src="/nature/left.webp"
          alt="Лес левая часть"
          fill
          className="object-cover w-full h-full select-none pointer-events-none"
          draggable={false}
          priority
        />
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 origin-left"
        style={{ x: rightX, scale }}
      >
        <Image
          src="/nature/right.webp"
          alt="Лес правая часть"
          fill
          className="object-cover w-full h-full select-none pointer-events-none"
          draggable={false}
          priority
        />
      </motion.div>
    </motion.div>
  );
}
