"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ShaderBackground from "@/components/ShaderBackground";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            transition: { duration: 2.4, times: [0, 0.06, 0.65, 1], ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed top-0 left-0 z-40 pointer-events-none overflow-hidden"
        >
          <ShaderBackground />
        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
