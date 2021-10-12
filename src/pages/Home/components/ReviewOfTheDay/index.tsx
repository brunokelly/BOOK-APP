import React from "react";

import { Container } from "./style";

const Review: React.FC = () => {
  return (
    <Container>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vBzBgewl4ac?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

export default Review;
