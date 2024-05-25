import React from "react";
import styled from "@emotion/styled";

const ImageCard = styled.img`
  width: 350px; 
  height: 300px; 
  object-fit: cover;
  border-radius: 12px;
  margin: 10px;
`;

const Card = ({ image }) => {
  return <ImageCard src={image} alt="image" />;
};

export default Card;
