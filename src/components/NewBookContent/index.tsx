import React from "react";

import { Container, InfosContent } from "./style";

const NewBookContent: React.FC = () => {
  return (
    <Container>
      <InfosContent>
        <h1>Hooked</h1>
        <h2>Nir Fal</h2>
        <h3>120+ Read now</h3>
      </InfosContent>

      <img
        alt="book"
        src="https://images-na.ssl-images-amazon.com/images/I/41q7gZyFigL._SX342_SY445_QL70_ML2_.jpg"
      ></img>
    </Container>
  );
};

export default NewBookContent;
