"use client";

import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  background: #F6F3EC;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 120px;
  gap: 40px;
  flex: 1;
  min-width: 50%;

  @media (max-width: 1200px) {
    padding: 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 520px;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PreTitle = styled.span`
  font-family: var(--font-gabriela), serif;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;

export const Title = styled.h1`
  font-family: var(--font-gabriela), serif;
  font-weight: 400;
  font-size: 46px;
  line-height: 1.1;
  color: #000000;
`;

export const Description = styled.p`
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: #000000;
`;

export const HeroButton = styled.button`
  font-family: var(--font-montserrat), sans-serif;
  background: ${({ theme }) => theme.colors.primary} !important;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 14px;
  padding: 14px 26px !important;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight} !important;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  flex: 1;
  min-width: 50%;
  min-height: 500px;
`;

export const TornEdge = styled.div`
  width: 100%;
  height: 281px;
  background: url('/torn-edge.png') no-repeat center bottom;
  background-size: 100% 100%; /* Замінили cover на точні 100% */
  margin-top: auto;
  z-index: 2;

  /* Щоб на мобільних пристроях рваний край пропорційно зменшувався і не займав пів екрана */
  @media (max-width: 1024px) {
    height: 150px;
  }
  @media (max-width: 768px) {
    height: 80px;
  }
`;