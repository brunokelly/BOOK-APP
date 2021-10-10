import styled from "styled-components";

export const ContentSearch = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.div`
  h1 {
    display: flex;
    font-size: 24px;
    font-weight: 400;

    strong {
      font-weight: 600;
      color: #ff6781;
    }
  }
`;

export const SubTtile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  h2 {
    letter-spacing: 0.5px;
    font-size: 24px;
    font-weight: 400;
  }

  a {
    text-align: right;
    font-size: 16px;
    color: #4abdf1;
    text-align: right;
  }
`;

export const NewBookSection = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;

export const ReadingNowSection = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  height: fit-content;
  min-width: 272px;
  width: fit-content;

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

    align-self: center;
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

export const SectionReadingNow = styled.div`
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

export const ContainerReadingNow = styled.div`
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

export const InfosReadingNow = styled.div`
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
    top: calc(50% - 12px / 2);
  }
`;
