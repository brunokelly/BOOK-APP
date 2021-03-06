import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const SearchBar: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={inputRef} {...rest} defaultValue={defaultValue} />
    </Container>
  );
};

export default SearchBar;
