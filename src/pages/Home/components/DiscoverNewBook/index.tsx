import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../../../services/api";

import { IBook, IBookReponse } from "../../../../models";

import { ReadNow } from "../../../../assets/icons";
import { Circle, Rectangle, Triangle } from "../../../../assets/shapes";
import { Container, InfosContent, NewBookSection } from "./style";

//import CircleImage from "../../../../assets/img/Circle.png";

const DiscoverNewBook: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const discoverNow = useCallback(async () => {
    try {
      await api
        .get<IBookReponse>(
          `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&maxResults=3`
        )
        .then((response) => setBooks(response.data.items || null));

      books.forEach((book) => {
        book.volumeInfo.title =
          book.volumeInfo.title.length < 20
            ? book.volumeInfo.title
            : book.volumeInfo.title.slice(20);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  useMemo(() => {
    discoverNow();
  }, [discoverNow]);

  return (
    <NewBookSection>
      {!!books &&
        books.map((book) => (
          <Link key={book.id} to={`/detail/${book.id}`}>
            <Container>
              <Triangle
                styles={{
                  position: "absolute",
                  left: "69.95%",
                  top: "13.73%",
                }}
              />
              <Rectangle
                styles={{
                  position: "absolute",
                  left: "64.37%",
                  top: "68.7%",
                }}
              />
              <Circle
                styles={{
                  position: "absolute",
                  left: "60.94%",
                  top: "17.07%",
                }}
              />
              <InfosContent>
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors}l</h2>

                <h3>
                  <ReadNow /> 120+ Read now
                </h3>
              </InfosContent>

              <img alt="book" src={book.volumeInfo.imageLinks?.thumbnail}></img>
            </Container>
          </Link>
        ))}
    </NewBookSection>
  );
};

export default DiscoverNewBook;
