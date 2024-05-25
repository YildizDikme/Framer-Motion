import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;
  overflow: hidden;

  iframe {
    max-width: 560px;
    max-height: 315px;
    width: 100%;
    height: 100%;

    @media (max-width: 600px) {
      max-width: 250px;
      max-height: 250px;
    }
  }`;

const VideoSection = () => {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1.5]);

  return (
    <VideoWrapper ref={videoRef}>
      <motion.iframe
        src="https://www.youtube.com/embed/ooLI_tPSn58?si=bZNiLGU2lTZR1u6a"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ scale, width: "100%", height: "100%" }}
      />
    </VideoWrapper>
  );
};

export default VideoSection;
