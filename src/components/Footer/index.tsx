import React from "react";
import { FooterSection } from "./style";

const Footer: React.FC = ({ children }) => {
  return (
    <>
      <FooterSection>{children}</FooterSection>
    </>
  );
};

export default Footer;
