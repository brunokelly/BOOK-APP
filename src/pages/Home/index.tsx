import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import SearchBar from "../../components/SearchBar";
import {
  ContentSearch,
  NewBookSection,
  Section,
  SubTtile,
  Title,
} from "./style";
import { FiSearch } from "react-icons/fi";
import NewBookContent from "../../components/NewBookContent";

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((async) => {
    try {
      formRef.current?.setErrors({});
    } catch (err) {}
  }, []);

  return (
    <Section>
      {/*SEARCH BAR SECTION */}
      <ContentSearch>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <SearchBar name="search" icon={FiSearch} placeholder="Search Book" />
        </Form>
      </ContentSearch>

      <Title>
        <h1>
          Hi, <h1> Mehmed Al Fatih</h1>
        </h1>
      </Title>

      {/*DISCOVER NEW BOOK SECTION */}
      <SubTtile>
        <h2>Discover new book</h2>

        <a>More</a>
      </SubTtile>
      <NewBookSection>
        <NewBookContent />
        <NewBookContent />
      </NewBookSection>

      {/*CURRENTLY READING SECTION */}
      <SubTtile>
        <h2>Currently Reading</h2>
      </SubTtile>
    </Section>
  );
};

export default Home;
