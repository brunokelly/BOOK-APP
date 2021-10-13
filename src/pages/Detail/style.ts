import styled from "styled-components";
import { CircleTwo, Circle } from "../../assets/img";

export const HeaderSection = styled.div`
  display: flex;
  background-color: #fff6e5;
  border-bottom-right-radius: 50%;

  height: 300px;
  justify-content: center;

  background-image: url(${Circle});
  background-repeat: no-repeat;
  background-position-x: 105%;
  background-position-y: -22%;
`;

export const SectionDetail = styled.div`
  height: 100vh;
  padding: 40px 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 946px;

  display: flex;
  flex-direction: column;

  > * {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  span > * {
    width: 30px;
  }

  h1 {
    font-family: "SF Pro", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0.5px;
    text-align: left;
  }

  h2 {
    font-family: "SF Pro", sans-serif;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1px;
    text-align: left;
    color: #ff6978;
  }

  > p {
    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    line-height: 25px;
    padding-bottom: 100px;

    letter-spacing: 0.2px;

    color: rgba(49, 49, 49, 0.6);
    z-index: -1;

    white-space: pre-line;
  }
`;

export const FooterBar = styled.div`
  width: 330px;
  height: 56px;
  padding: 20px 20px;
  bottom: 0.5px;
  position: fixed;

  display: flex;
  align-self: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  z-index: -1;

  gap: 50px;
  a {
    text-decoration: none;
    color: #3f4043;
    font-weight: 700;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-self: center;
    gap: 5px;

    span {
      align-self: center;
      justify-self: center;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 200px;

  display: flex;
  align-self: center;
  justify-content: center;
  position: relative;

  background-image: url(${CircleTwo});
  background-repeat: no-repeat;
  background-position: right 79%;

  background-size: 20%;
  img {
    height: 234px;
    width: 151px;

    border-radius: 0px;
    justify-self: center;
    align-self: center;

    z-index: 1;
  }
`;
