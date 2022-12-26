import styled from "styled-components";
import * as V from "styles/variables";
import background from "assets/modal-background.png";

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  z-index: 4;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000;
  width: 90%;
  max-width: 69rem;
  height: 60rem;
  padding: 2.4rem;
  padding-top: 6rem;
`;

export const Image = styled.img`
  object-fit: contain;
  margin: 0 auto;
  display: block;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.6rem;
  max-width: 42.6rem;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const InputText = styled.input`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 4px;
  background-color: #fff;
  color: rgba(54, 56, 66, 0.8);
  padding: 1.6rem 1.2rem;
  outline: 0;
  height: 4.8rem;
  width: 100%;
  max-width: 42.6rem;
  border-width: 2px;
  transition: ease 0.4s;
  line-height: 2.2rem;

  ::placeholder {
    font-size: 1.5rem;
  }

  :hover,
  :focus {
    border-color: ${V.HOVER_COLOR};
    color: #000;
  }

  :last-of-type {
    margin-bottom: 0.8rem;
  }
`;

export const SocialContainer = styled.div`
  max-width: 42.6rem;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const SocialText = styled.span`
  display: block;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  column-gap: 1.6rem;
  justify-content: center;
  margin-top: 1.6rem;
`;

export const IconWrapper = styled.div`
  padding: 1.2rem 1.4rem;
  background-color: #fff;
  cursor: pointer;
`;

export const LinkText = styled.span`
  color: ${V.PRIMARY_COLOR};
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: underline;

  :hover,
  :focus {
    color: ${V.HOVER_COLOR};
  }
`;

export const AccountTextContainer = styled.div`
  max-width: 42.6rem;
  margin: 0 auto;
  margin-top: 3.5rem;
`;

export const AccountText = styled.p`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.6rem;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
  object-fit: contain;
  cursor: pointer;
`;
