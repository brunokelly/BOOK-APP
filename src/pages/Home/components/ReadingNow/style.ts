import styled from "styled-components";

export const ReadingNowSection = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
  height: 150px;
  display: flex;

  img {
    height: 20%;
    width: auto;
    border-radius: 0px;

    position: absolute;
    align-self: center;
    padding-left: 19px;
  }
`;

export const Container = styled.div`
  background: #eef5db;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  border-radius: 0px 3px 3px 0px;

  height: 100px;
  width: 70%;

  display: flex;
  align-self: center;
  padding-left: 130px;
  gap: 10px;
`;

export const Infos = styled.div`
  h1 {
    letter-spacing: 2px;
    font-size: 27px;
    font-family: "Playfair Display", sans-serif;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
  }

  h3 {
    font-family: "SF Pro", sans-serif;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-content: center;
  }
`;
