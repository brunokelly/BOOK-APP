import styled from "styled-components";

import Circle from "../../../../assets/img/Circle.png";

export const ReadingNowSection = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;

  img {
    height: 20%;
    width: auto;
    border-radius: 0px;

    position: absolute;
    align-self: center;
    padding-left: 19px;
    z-index: 1;
  }
`;

export const Container = styled.div`
  background: #eef5db;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  border-radius: 0px 3px 3px 0px;

  height: 100px;
  width: 50%;
  min-width: 330px;
  padding-left: 130px;

  gap: 10px;

  display: flex;
  align-self: center;
  position: relative;
  overflow: hidden;

  background-image: url(${Circle});
  background-repeat: no-repeat;
  background-position-y: 233%;
  background-position-x: 134%;
  h1 {
    letter-spacing: 2px;
    font-size: 27px;
    font-family: "Playfair Display", sans-serif;
    color: #2a2b26;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
    color: #74776d;
  }

  p {
    font-family: "SF Pro", sans-serif;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-top: auto;
    color: #2a2b26;
    white-space: pre;
    strong {
      font-weight: 600;
      color: #ff6781;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
