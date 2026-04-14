"use client";

import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 40px; /* Додав трохи відступу зверху, щоб відділити від банера */
  gap: 40px;
  width: 100%;
  background: #FFFFFF;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-gabriela), serif;
  font-weight: 400;
  font-size: 34px;
  color: #000000;
  margin: 0;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  align-items: stretch;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 400px;
    width: 100%;
  }
`;

export const InfoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 14px;
  background: #FFFFFF;
  border: 1px solid #E9E3D9;
  border-radius: 20px;
`;

export const InfoCardTitle = styled.h3`
  font-family: var(--font-gabriela), serif;
  font-weight: 400;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const InfoCardText = styled.p`
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: #000000;
  margin: 0;
`;

export const FactsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
`;

export const FactCard = styled.div<{ $variant: 'solid' | 'outline' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  gap: 20px;
  flex: 1;
  min-width: 280px;
  border-radius: 20px;
  
  background: ${({ $variant }) => ($variant === 'solid' ? '#F7F3E7' : 'transparent')};
  border: ${({ $variant, theme }) => ($variant === 'outline' ? `1px solid ${theme.colors.primary}` : 'none')};
`;

export const FactTitleGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FactTitle = styled.h4`
  font-family: var(--font-gabriela), serif;
  font-weight: 400;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const FactText = styled.p`
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: #000000;
  margin: 0;
`;