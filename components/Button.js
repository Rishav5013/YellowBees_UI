import Link from "next/link";
import styled from "styled-components";

const Colors = {
  primary: {
    default: "var(--primary)",
    hover: "var(--success)",
    textColor: "var(--white)",
  },
  secondary: {
    default: "var(--secondary)",
    hover: "var(--success)",
    textColor: "var(--white)",
  },
};

const Size = {
  xs: {
    default: "var(--font-size-xs)",
  },
  sm: {
    default: "var(--font-size-sm)",
  },
  md: {
    default: "var(--font-size-md)",
  },
  lg: {
    default: "var(--font-size-lg)",
  },
};

const StyledButton = styled.div`
  background-color: ${(props) => Colors[props.type].default};
  font-size: ${(props) => Size[props.size].default};
  padding: ${(props) => Size[props.size].default};
  border-radius: ${(props) => Size[props.size].default};
  font-weight: 500;
  color: ${(props) => Colors[props.type].textColor};
  border: none;
  &:hover {
    background-color: ${(props) => Colors[props.type].hover};
  }
  font-family: var(--font-family-inter);

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Button = ({ children, type, size, href }) => {
  return (
    <StyledButton
      type={type}
      size={size}
      href={href}
      as={href ? Link : "button"}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "primary",
  size: "md",
  href: "https://www.google.co.in/",
};

export default Button;
