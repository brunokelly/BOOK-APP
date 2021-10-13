import styled from "styled-components";

import Circle from "../../../../assets/img/Circle.png";

export const NewBookSection = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;

export const InfosContent = styled.div`
  color: white;

  width: 60%;
  display: flex;
  flex-direction: column;

  h1 {
    letter-spacing: 2px;
    font-size: 27px;
    font-family: "Playfair Display", serif;
  }

  h2 {
    font-style: italic;
    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 2px;
    font-weight: 400;
  }

  h3 {
    font-family: "SF Pro", sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin-top: auto;
    justify-self: center;
    white-space: pre;
    display: flex;
  }
`;

export const Container = styled.div`
  height: fit-content;
  min-height: 190px;
  min-width: 340px;
  width: fit-content;

  border-radius: 5px;
  padding: 17px 20px 17px 20px;
  margin: 0px 10px 0 10px;

  background: #00173d;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  position: relative;

  background-image: url(${Circle});
  background-repeat: no-repeat;
  background-position-y: 113%;
  background-position-x: -14%;

  img {
    height: 111px;
    width: 72px;
    border-radius: 3px;

    align-self: center;
  }
`;
