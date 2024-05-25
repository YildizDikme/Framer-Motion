import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion, useScroll, useTransform } from "framer-motion";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0 0;
`;

const BackgroundImage = styled.img`
  width: 1000px;
  height: 500px;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;

const CenteredText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const TextImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255, 255, 255, 1)", "rgba(250, 117, 248, 1)"]
  );

  return (
    <Container ref={ref}>
      <BackgroundImage src="/number.webp" alt="Background" />
      <CenteredText
        style={{
          color: textColor 
        }}
      >
        Complete documentation of the Framer Motion animation library. A production-ready motion library for React.
      </CenteredText>
    </Container>
  );
};

export default TextImage;
