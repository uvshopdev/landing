"use client";

import Link from "next/link";
import styled from "styled-components";

export const Content = styled.header`
  width: 100%;
  padding: 12px 40px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  
  position: sticky;
  top: 0;
  z-index: 1000;
  will-change: height;
`;

export const Bar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ul {
    display: flex;
    gap: 0px; 
    align-items: center;
  }

  li {
    border-radius: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 48px;
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const PrimaryButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  cursor: pointer;
  
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: #FFFFFF;
  }
`;