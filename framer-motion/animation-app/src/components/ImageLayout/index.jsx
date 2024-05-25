import React, { forwardRef } from "react";
import Card from "../Card";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

const ImageLayoutSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const ImageRow = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
`;

const dummyData1 = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image1.png",
  "/image2.png",
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image1.png",
  "/image2.png",
];

const dummyData2 = [
  "/image2.png",
  "/image1.png",
  "/image4.png",
  "/image3.png",
  "/image2.png",
  "/image1.png",
  "/image4.png",
  "/image3.png",
  "/image2.png",
  "/image1.png",
  "/image4.png",
  "/image3.png",
];

const ImageLayout = forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']); 
  const x2 = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);

  return (
    <ImageLayoutSection ref={ref}>
      <ImageRow style={{ x: x1 }}>
        {dummyData1.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </ImageRow>
      <ImageRow style={{ x: x2 }}>
        {dummyData2.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </ImageRow>
    </ImageLayoutSection>
  );
});

export default ImageLayout;
