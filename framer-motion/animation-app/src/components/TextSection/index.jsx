import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

const dummyTexts = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  "Elit, sed do eiusmod tempor incididunt ut labore.",
  "Dolore magna aliqua. Ut enim ad minim veniam.",
  "Quis nostrud exercitation ullamco laboris nisi ut.",
  "Aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit.",
  "In voluptate velit esse cillum dolore eu fugiat.",
  "Quis nostrud exercitation ullamco laboris nisi ut.",
  "Aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit.",
  "In voluptate velit esse cillum dolore eu fugiat.",
];

const TextWrapper = ({ children }) => {
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 0]);
  const color = useTransform(scrollYProgress, [0, 1], ["#f2994a", "#f2994a"]);

  return (
    <div ref={textRef}>
      <motion.p style={{ opacity, x, color }}>{children}</motion.p>
    </div>
  );
};

const TextSection = () => {
  return (
    <TextSectionStyled>
      {dummyTexts.map((text, index) => (
        <TextWrapper key={index}>{text}</TextWrapper>
      ))}
    </TextSectionStyled>
  );
};

const TextSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  p {
    font-size: 3rem;
    color: #fff;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export default TextSection;
