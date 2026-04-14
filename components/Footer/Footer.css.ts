"use client";

import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px 40px;
  gap: 40px;
  flex-wrap: wrap;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 490px;
`;

export const FooterLogo = styled.div`
  position: relative;
  width: 98.63px;
  height: 76.44px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
`;

export const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BlockTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  
  svg {
    color: #FFFFFF;
  }
`;

export const NavBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px 20px;
  
  a {
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const RightActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 72px;
  align-self: flex-start;
`;

export const PolicyBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 3px;

  div {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-top: 1px solid #FFFFFF;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Copyright = styled.div`
  font-weight: 500;
  font-size: 12px;
`;

export const BottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const RouteButton = styled.button`
  background: #FFFFFF !important;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px !important;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary} !important;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  a {
    color: #FFFFFF;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;