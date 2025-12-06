// Library imports
import { motion } from "motion/react";

/**
 * Social media component that takes a link, image source, and alt
 *
 * @param props href, src, alt
 */
export const SocialMedia = ({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className="bg-aqua w-12 h-12 p-3 rounded-full flex justify-center items-center"
      whileHover={{ scale: 1.1 }}
    >
      <img src={src} alt={alt} className="w-full h-full" />
    </motion.a>
  );
};
