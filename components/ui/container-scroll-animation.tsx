"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.95] : [1.1, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div
      ref={containerRef}
      className="h-[70rem] md:h-[65rem] flex items-center justify-center relative"
    >
      {/* Ambient Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a227]/10 via-transparent to-transparent blur-[180px]" />

      <div
        className="py-16 md:py-20 w-full relative"
        style={{ perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />

        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto text-center z-20 mb-8"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="relative max-w-5xl -mt-16 mx-auto h-[34rem] md:h-[42rem] w-full p-[1px] rounded-[34px]
      bg-gradient-to-b from-[#c9a227]/60 via-transparent to-transparent"
    >
      {/* Card Body */}
      <div
        className="h-full w-full rounded-[34px] border border-[10px] border-white/50 
        bg-black/60 backdrop-blur-2xl 
        shadow-[0_30px_80px_rgba(0,0,0,0.8)] p-6 md:p-10 overflow-hidden"
      >
        {children}
      </div>
    </motion.div>
  );
};
