import styled from "styled-components";

type WrapperProps = {
  isActive: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 16rem;
  position: absolute;
  transition: top 0.4s ease;
  z-index: 2;
  width: 100%;
  min-height: 64rem;
  top: ${({ isActive }) => (isActive ? "0" : "-100%")};
  left: 0;
  background: linear-gradient(
    180deg,
    #020203 0%,
    rgba(14, 17, 23, 0.92) 96.35%,
    rgba(14, 17, 23, 0.9) 100%
  );
  backdrop-filter: blur(6px);
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  place-content: center;
  row-gap: 7rem;
`;

export const ItemImage = styled.img`
  width: 6.9rem;
  height: 6.9rem;
  object-fit: contain;
  object-position: center;
`;

export const ItemText = styled.span`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  color: #9d9d9d;
  text-align: center;
  width: 11ch;
  line-height: 120%;
`;

export const ItemContainer = styled.div`
  justify-self: center;
  width: 100%;
  height: 100%;
  max-width: 15rem;
  aspect-ratio: 2/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  justify-content: center;
  border-radius: 4px;
  padding: 2rem 0;
  cursor: pointer;

  :hover {
    background-color: #000;
    ${ItemText} {
      color: #fff;
    }

    ${ItemImage} {
      transform: scale(1.2);
      position: relative;
      top: -5px;
    }
  }
`;

export const Footer = styled.div`
  padding: 2.4rem;
  background-color: #15171b;
  display: flex;
  column-gap: 6.4rem;
  justify-content: center;
`;

export const FooterItem = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FooterItemText = styled.span`
  display: block;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 600;
`;

export const FooterItemImage = styled.img`
  object-fit: contain;
`;
