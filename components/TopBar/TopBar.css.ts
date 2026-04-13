"use client";

import Link from "next/link";
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;

  padding: 15px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  will-change: height;
`;

export const Bar = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Left = styled.div`
  display: flex;
  gap: 40px;

  ul {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const Right = styled.div`
  position: relative;

  display: flex;
  justify-self: end;

  & button {
    display: flex;
    gap: 10px;
    padding: 0 15px;
  }
`;
