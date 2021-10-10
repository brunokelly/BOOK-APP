import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../../../models";
import { BookFromSearch, Section } from "./style";

interface IBookResult {
  booksSearch: Array<IBook>;
}

const SearchResult: React.FC<IBookResult> = ({ booksSearch }: IBookResult) => {
  return (
    <Section>
      {!!booksSearch &&
        booksSearch.map((book) => (
          <Link key={book.id} to={`/detail/${book.id}`}>
            <BookFromSearch>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />

              <h1>{book.volumeInfo.title}</h1>
              <h2>by {book.volumeInfo.authors}</h2>
            </BookFromSearch>
          </Link>
        ))}
    </Section>
  );
};

export default SearchResult;
