import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 62.5rem;
  position: relative;
  background-image: radial-gradient(
    73.1% 73.1% at 52.6% 25.14%,
    rgba(2, 2, 3, 0) 0%,
    #020203 100%
  );
  mix-blend-mode: unset;
`;

export const BannerImage = styled.img`
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Container = styled.div`
  display: grid;
  height: calc(62.5rem - 8rem);
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin-top: 7rem;
`;

export const ContentText = styled.div``;

export const ContentIcons = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  width: 80%;
  max-width: 56.2rem;
  font-weight: 700;
  line-height: 110%;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
`;

export const CTA = styled.button`
  font-family: inherit;
  border: 0;
  background-color: #00aeff;
  border-radius: 4px;
  padding: 1.4rem 3.2rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: contain;
  transition: ease 0.4s;
  cursor: pointer;
  filter: grayscale(100%);

  :focus,
  :focus-within {
    filter: none;
  }
`;
