import React from "react";
import { Circle, Rectangle } from "../../../../assets/shapes";

import { Container, Infos, ReadingNowSection, Section } from "./style";

const ReadingNow: React.FC = () => {
  return (
    <ReadingNowSection>
      <Section>
        <img
          alt="book"
          src="https://images-na.ssl-images-amazon.com/images/I/41q7gZyFigL._SX342_SY445_QL70_ML2_.jpg"
        />

        <Container>
          <Circle
            styles={{
              position: "absolute",
              left: "69.95%",
              top: "13.73%",
            }}
          />
          <Rectangle
            styles={{
              position: "absolute",
              left: "69.95%",
              top: "13.73%",
            }}
          />
          <Infos>
            <h1>Originals</h1>
            <h2>By Adam</h2>
            <h3>Charpter </h3>
          </Infos>
        </Container>
      </Section>
    </ReadingNowSection>
  );
};

export default ReadingNow;
