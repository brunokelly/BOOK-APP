import styled from "styled-components";

export const ContentSearch = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.div`
  h1 {
    display: flex;
    align-items: baseline;
    font-size: 24px;
    font-weight: 400;
    white-space: pre;

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
