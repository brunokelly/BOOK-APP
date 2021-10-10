import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ReadNow } from "../../../../assets/icons";
import { Circle, Rectangle, Triangle } from "../../../../assets/shapes";
import { IBook, IBookReponse } from "../../../../models";
import api from "../../../../services/api";
import { Container, InfosContent, NewBookSection } from "./style";

const DiscoverNewBook: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const discoverNow = useCallback(async () => {
    try {
      await api
        .get<IBookReponse>(
          `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&maxResults=3`
        )
        .then((response) => setBooks(response.data.items || null));
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
                style={{
                  position: "absolute",
                  left: "61.95%",
                  top: "2.73%",
                }}
              />
              <Rectangle
                style={{
                  position: "absolute",
                  left: "53.37%",
                  top: "68.7%",
                }}
              />
              <Circle
                style={{
                  position: "absolute",
                  left: "52.94%",
                  top: "10.07%",
                }}
              />
              <InfosContent>
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors}l</h2>

                <h3>
                  <ReadNow /> 120+ Read now
                </h3>
              </InfosContent>

              <img alt="book" src={book.volumeInfo.imageLinks.thumbnail}></img>
            </Container>
          </Link>
        ))}
    </NewBookSection>
  );
};

export default DiscoverNewBook;
