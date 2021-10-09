import styled from "styled-components";

export const Container = styled.div`
  height: 139px;
  width: 272px;

  border-radius: 5px;
  padding: 17px 20px 17px 20px;
  margin: 0px 10px 0 10px;

  justify-content: space-between;

  background: #00173d;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;

  display: flex;

  img {
    height: 111px;
    width: 72px;
    border-radius: 3px;
  }
`;

export const InfosContent = styled.div`
  color: white;

  width: 50%;
  height: 100%;

  h1 {
    letter-spacing: 2px;
    font-size: 27px;
    font-family: "Playfair Display", serif;
  }

  h2 {
    font-style: italic;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 2px;
    font-weight: 400;
  }

  h3 {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 12px;
    font-weight: 400;
    top: calc(50% - 12px / 2);
  }
`;
