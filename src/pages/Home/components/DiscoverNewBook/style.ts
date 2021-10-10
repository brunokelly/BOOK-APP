import styled from "styled-components";

export const NewBookSection = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;

export const InfosContent = styled.div`
  color: white;

  width: 60%;
  height: 100%;

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
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  position: relative;
  img {
    height: 111px;
    width: 72px;
    border-radius: 3px;

    align-self: center;
  }
`;
