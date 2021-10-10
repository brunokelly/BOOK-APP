import React, { useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { FiSearch } from "react-icons/fi";

import {
  Container,
  ContainerReadingNow,
  ContentSearch,
  InfosContent,
  InfosReadingNow,
  NewBookSection,
  ReadingNowSection,
  SectionReadingNow,
  SubTtile,
  Title,
} from "./style";
import { Section } from "../../styles/global";

import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import { IBook, IBookReponse } from "../../models";

import api from "../../services/api";

interface IBookSearch {
  search: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [books, setBooks] = useState<IBook[]>([]);
  const [booksSearch, setBooksSearch] = useState<IBook[]>([]);

  const discoverNow = useCallback(async () => {
    try {
      await api
        .get<IBookReponse>(
          `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&maxResults=3`
        )
        .then((response) => setBooks(response.data.items || null));
    } catch (err) {}
  }, []);

  useMemo(() => {
    discoverNow();
  }, []);

  const handleSubmitSearch = useCallback(async (data: IBookSearch) => {
    try {
      formRef.current?.setErrors({});

      await api
        .get<IBookReponse>(
          `https://www.googleapis.com/books/v1/volumes?q=${data.search}`
        )
        .then((response) => setBooksSearch(response.data.items || null));

      console.log(booksSearch);
    } catch (err) {}
  }, []);

  return (
    <>
      <Section>
        {/*SEARCH BAR SECTION */}
        <ContentSearch>
          <Form ref={formRef} onSubmit={handleSubmitSearch}>
            <SearchBar
              name="search"
              icon={FiSearch}
              placeholder="Search Book"
              type="search"
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

        <NewBookSection>
          {!!books &&
            books.map((book) => (
              <Link key={book.id} to={`/detail/${book.id}`}>
                <Container>
                  <InfosContent>
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>{book.volumeInfo.authors}l</h2>
                    <h3>120+ Read now</h3>
                  </InfosContent>

                  <img
                    alt="book"
                    src={book.volumeInfo.imageLinks.thumbnail}
                  ></img>
                </Container>
              </Link>
            ))}
        </NewBookSection>

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
