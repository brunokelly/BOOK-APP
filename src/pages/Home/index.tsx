import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { FiSearch } from "react-icons/fi";

import {
  Container,
  ContainerReadingNow,
  ContentSearch,
  InfosContent,
  InfosReadingNow,
  ReadingNowSection,
  SectionReadingNow,
  SubTtile,
  Title,
} from "./style";
import { Section } from "../../styles/global";

import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((async) => {
    try {
      formRef.current?.setErrors({});
    } catch (err) {}
  }, []);

  return (
    <>
      <Section>
        {/*SEARCH BAR SECTION */}
        <ContentSearch>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <SearchBar
              name="search"
              icon={FiSearch}
              placeholder="Search Book"
            />
          </Form>
        </ContentSearch>

        <Title>
          <p>
            <h1>
              Hi, <strong> Mehmed Al Fatih</strong>
            </h1>
          </p>
        </Title>

        {/*DISCOVER NEW BOOK SECTION */}
        <SubTtile>
          <h2>Discover new book</h2>

          <a href="/#">More</a>
        </SubTtile>

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

        {/*CURRENTLY READING SECTION */}
        <SubTtile>
          <h2>Currently Reading</h2>
        </SubTtile>

        <ReadingNowSection>
          <SectionReadingNow>
            <img
              alt="book"
              src="https://images-na.ssl-images-amazon.com/images/I/41q7gZyFigL._SX342_SY445_QL70_ML2_.jpg"
            />
            <ContainerReadingNow>
              <InfosReadingNow>
                <h1>Originals</h1>
                <h2>By Adam</h2>
                <h3>Charpter </h3>
              </InfosReadingNow>
            </ContainerReadingNow>
          </SectionReadingNow>
        </ReadingNowSection>

        {/*REVIEW OF THE DAY*/}
        <SubTtile>
          <h2>Review of the day</h2>

          <a href="/#">All Videos</a>
        </SubTtile>
      </Section>

      <Footer />
    </>
  );
};

export default Home;
