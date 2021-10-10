import React from "react";

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
