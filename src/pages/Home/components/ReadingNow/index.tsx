import React from "react";
import { Link } from "react-router-dom";
import { BookCharpter, Circle, Rectangle } from "../../../../assets/shapes";
import { BookCurrentlyReading } from "../../../../mocks";

import { Container, Infos, ReadingNowSection, Section } from "./style";

const ReadingNow: React.FC = () => {
  return (
    <ReadingNowSection>
      <Section>
        <img
          alt={BookCurrentlyReading.volumeInfo.title}
          src={BookCurrentlyReading.volumeInfo.imageLinks.thumbnail}
        />
        <Link
          key={BookCurrentlyReading.id}
          to={`/detail/${BookCurrentlyReading.id}`}
        >
          <Container>
            <Circle
              styles={{
                position: "absolute",
                left: "79.95%",
                top: "-9.27%",
              }}
            />
            <Rectangle
              styles={{
                position: "absolute",
                left: "90.95%",
                top: "70.73%",
              }}
            />
            <Infos>
              <h1>{BookCurrentlyReading.volumeInfo.title}</h1>
              <h2>By {BookCurrentlyReading.volumeInfo.authors}</h2>
              <p>
                <BookCharpter /> Charpter <strong>2</strong> from 9
              </p>
            </Infos>
          </Container>
        </Link>
      </Section>
    </ReadingNowSection>
  );
};

export default ReadingNow;
