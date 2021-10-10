import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

import api from "../../services/api";

import { IBook, IDetailParams } from "../../models";

import { FiArrowLeft, FiBookOpen, FiHeadphones, FiShare } from "react-icons/fi";
import { FooterBar, HeaderSection, SectionDetail } from "./style";

const Detail: React.FC = () => {
  const [bookDetail, setBookDetail] = useState<IBook>();
  const { params } = useRouteMatch<IDetailParams>();

  useEffect(() => {
    try {
      console.log(
        `https://www.googleapis.com/books/v1/volumes/${params.detail}`
      );
      api
        .get(`https://www.googleapis.com/books/v1/volumes/${params.detail}`)
        .then((response) => {
          setBookDetail(response.data || null);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <HeaderSection>
        <SectionDetail>
          <Link to={`/`}>
            <span>
              <FiArrowLeft />
            </span>
          </Link>
          {bookDetail && (
            <>
              <img
                alt="book"
                src={bookDetail.volumeInfo.imageLinks.thumbnail}
              />
              <h1>
                <strong>{bookDetail.volumeInfo.title}:</strong>{" "}
                {bookDetail.volumeInfo.subtitle}
              </h1>
              <h2>{bookDetail.volumeInfo.authors}</h2>
              <h3>{bookDetail.volumeInfo.description}</h3>
            </>
          )}

          <FooterBar>
            <a href="/#">
              <FiBookOpen />
              <p>Read</p>
            </a>
            <a href="/#">
              <FiHeadphones />
              <p>Listen</p>
            </a>
            <a href="/#">
              <FiShare />
              <p>Share</p>
            </a>
          </FooterBar>
        </SectionDetail>
      </HeaderSection>
    </>
  );
};

export default Detail;
