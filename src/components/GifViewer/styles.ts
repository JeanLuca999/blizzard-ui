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

export const PlayIcon = styled.img`
  width: 1.8rem;
  height: 1.4rem;
  object-fit: contain;
  object-position: center;
  padding-left: 2px;
`;

export const PausedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.1rem;
  height: 5.1rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(20%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: ease 0.4s;
`;

export const PlayingContainer = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.1rem;
  height: 5.1rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    162.58deg,
    rgba(0, 174, 255, 0.9) 11.94%,
    rgba(0, 174, 255, 0.45) 95.55%
  );
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

    ${PausedContainer} {
      opacity: 0;
    }

    ${PlayingContainer} {
      opacity: 1;
    }
  }
`;
