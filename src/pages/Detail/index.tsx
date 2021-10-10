import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useRouteMatch } from "react-router";

import api from "../../services/api";

import { IBook, IDetailParams } from "../../models";

import { FooterBar, HeaderSection, SectionDetail } from "./style";
import { BackButton, BookOpen, HeadPhone, Share } from "../../assets/icons";

const Detail: React.FC = () => {
  const [bookDetail, setBookDetail] = useState<IBook>();
  const { params } = useRouteMatch<IDetailParams>();

  let history = useHistory();

  useEffect(() => {
    try {
      api
        .get(`https://www.googleapis.com/books/v1/volumes/${params.detail}`)
        .then((response) => {
          setBookDetail(response.data || null);
        });
    } catch (err) {
      console.error(err);
    }
  }, [params.detail]);

  return (
    <>
      <HeaderSection>
        <SectionDetail>
          <Link to="/#" onClick={history.goBack}>
            <span>
              <BackButton />
            </span>
          </Link>

          {bookDetail && (
            <>
              <img
                alt="book"
                src={bookDetail.volumeInfo.imageLinks?.thumbnail}
              />
              <h1>
                <strong>{bookDetail.volumeInfo.title}</strong>:{" "}
                {bookDetail.volumeInfo.subtitle}
              </h1>
              <h2>{bookDetail.volumeInfo.authors}</h2>
              <h3>{bookDetail.volumeInfo.description}</h3>
            </>
          )}

          <FooterBar>
            <a href="/#">
              <BookOpen />
              <p>Read</p>
            </a>
            <a href="/#">
              <HeadPhone />
              <p>Listen</p>
            </a>
            <a href="/#">
              <Share />
              <p>Share</p>
            </a>
          </FooterBar>
        </SectionDetail>
      </HeaderSection>
    </>
  );
};

export default Detail;
