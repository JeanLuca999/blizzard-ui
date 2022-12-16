import styled from "styled-components";

type BaseButtonProps = {
  padding?: string;
};
export const Outlined = styled.button<BaseButtonProps>`
  border-radius: 3px;
  font-family: inherit;
  font-weight: 500;
  color: #fff;
  border: 2px solid #fff;
  padding: ${({ padding }) => (padding ? padding : "1rem 1.6rem")};
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease;

  :hover,
  :focus {
    background-color: #fff;
    color: #000;
  }
`;

export const Fill = styled.button<BaseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  font-family: inherit;
  border: 0;
  background-color: var(--cta-color);
  border-radius: 4px;
  padding: 1.4rem 3.2rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  cursor: pointer;
  transition: 0.4s ease;
  :hover,
  :focus {
    background-color: var(--cta-hover);
  }
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
`;