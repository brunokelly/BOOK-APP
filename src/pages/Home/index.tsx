import React, { useCallback, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import SearchBar from "../../components/SearchBar";
import { ContentSearch, Section, SubTtile, Title } from "./style";
import { FiSearch } from "react-icons/fi";

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [teste, setteste] = useState();

  const handleSubmit = useCallback(
    (async) => {
      try {
        formRef.current?.setErrors({});
      } catch (err) {}
    },
    [teste]
  );

  return (
    <Section>
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

      <SubTtile>
        <h2>Discover new book</h2>

        <a>More</a>
      </SubTtile>
    </Section>
  );
};

export default Home;
