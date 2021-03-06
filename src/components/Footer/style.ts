import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  height: 60px;
  background-color: #ffffff;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 80px;
  z-index: 10;
`;

export const Button = styled.button`
  border: none;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #313131;
  }
`;
