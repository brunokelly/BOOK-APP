import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: auto;

  justify-content: space-between;
  row-gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 100px);
    padding: 10px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 100px);
  }

  a {
    width: fit-content;
    display: flex;
  }
`;

export const BookFromSearch = styled.div`
  width: 105px;
  height: auto;
  display: inline-table;

  img {
    height: 153px;
    width: auto;
    display: inline-flex;
  }

  h1 {
    font-size: 12px;
    color: #313131;
    font-weight: 700;
  }

  h2 {
    font-size: 10px;
    font-family: "Roboto", sans-serif;
    color: #313131;
    font-weight: 900;
  }
`;
