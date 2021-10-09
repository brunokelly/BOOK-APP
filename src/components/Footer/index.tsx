import React from "react";
import { Button, FooterSection } from "./style";
import { Book } from "@material-ui/icons";
import { HomeWorkOutlined } from "@material-ui/icons";

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Button>
        <HomeWorkOutlined />
        <a href="/#">Home</a>
      </Button>
      <Button>
        <Book />
        <a href="/#">Libaries</a>
      </Button>
      <Button>
        <a href="/#">Profile</a>
      </Button>
    </FooterSection>
  );
};

export default Footer;
