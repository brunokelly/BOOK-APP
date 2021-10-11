import React, { useCallback, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { debounce } from "lodash";

import api from "../../services/api";

import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import DiscoverNewBook from "./components/DiscoverNewBook";
import ReadingNow from "./components/ReadingNow";
import SearchResult from "./components/SearchResult";

import { Button } from "../../components/Footer/style";
import { HomeIcon, Libraries, Profile } from "../../assets/icons";
import { FiSearch } from "react-icons/fi";
import { IBook, IBookReponse } from "../../models";
import { ContentSearch, SubTtile, Title } from "./style";
import { Section } from "../../styles/global";

interface IBookSearch {
  search: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [booksSearch, setBooksSearch] = useState<IBook[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmitSearch = useCallback(
    debounce(async (search: string) => {
      try {
        if (search !== "") {
          formRef.current?.setErrors({});

          setIsSearching(true);

          await api
            .get<IBookReponse>(
              `https://www.googleapis.com/books/v1/volumes?q=${search}`
            )
            .then((response) => setBooksSearch(response.data.items || null));

          console.log(search);
          console.log(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`
          );
        }
      } catch (err) {
        console.error(err);
      }
    }, 500),
    []
  );

  const handleSearch = useCallback(
    (data: React.ChangeEvent<HTMLInputElement>): void => {
      try {
        if (data.target.value === "") {
          setIsSearching(false);
        } else {
          setIsSearching(true);
          handleSubmitSearch(data.target.value);
        }
      } catch (err) {}
    },
    [setIsSearching, handleSubmitSearch]
  );

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
              onChange={handleSearch}
            />
          </Form>
        </ContentSearch>

        {!isSearching ? (
          <>
            <Title>
              <h1>
                Hi, <strong> Mehmed Al Fatih</strong>
              </h1>
            </Title>

            {/*DISCOVER NEW BOOK SECTION */}
            <SubTtile>
              <h2>Discover new book</h2>

              <a href="/#">More</a>
            </SubTtile>
            <DiscoverNewBook />

            {/*CURRENTLY READING SECTION */}
            <SubTtile>
              <h2>Currently Reading</h2>
            </SubTtile>

            <ReadingNow />

            {/*REVIEW OF THE DAY*/}
            <SubTtile>
              <h2>Review of the day</h2>

              <a href="/#">All Videos</a>
            </SubTtile>
          </>
        ) : (
          <SearchResult booksSearch={booksSearch} />
        )}
      </Section>

      <Footer>
        <Button onClick={() => setIsSearching(false)}>
          <HomeIcon />
          <a href="/#">Home</a>
        </Button>
        <Button>
          <Libraries />
          <a href="/#">Libaries</a>
        </Button>
        <Button>
          <Profile />
          <a href="/#">Profile</a>
        </Button>
      </Footer>
    </>
  );
};

export default Home;
