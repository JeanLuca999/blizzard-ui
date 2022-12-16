import styled from "styled-components";

export const Gif = styled.img`
  position: absolute;
  display: none;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: ease 0.4s;
`;

export const Poster = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: ease 0.4s;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 28rem;
  width: 100%;
  height: 15.8rem;

  :hover,
  :focus {
    ${Poster} {
      opacity: 0;
    }

    ${Gif} {
      display: block;
      opacity: 1;
    }
  }
`;
