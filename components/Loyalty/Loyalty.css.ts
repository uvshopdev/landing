import styled from "styled-components";

export const LoyaltySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 40px;
  gap: 40px;
  width: 100%;
  background: #FFFFFF;
  scroll-margin-top: 20px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-gabriela), serif;
  font-weight: 400;
  font-size: 34px;
  color: #000000;
  margin: 0;
`;

export const PrimaryButton = styled.a`
  font-family: var(--font-montserrat), sans-serif;
  background: ${({ theme }) => theme.colors.primary} !important;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px !important;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  cursor: pointer;
  
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight} !important;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 30px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  min-width: 45%;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  min-height: 400px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  padding: 30px;
  background: #FFFFFF;
  
  img {
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ThumbnailsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  height: 147px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 15px;
    height: 100px;
  }
`;

export const ThumbnailWrapper = styled.button<{ $isActive: boolean }>`
  position: relative;
  flex: 1;
  height: 100%;
  border: 1px solid ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : theme.colors.secondary)};
  border-radius: 16px;
  padding: 16px;
  background: #FFFFFF;
  cursor: pointer;
  transition: border-color 0.3s ease;

  img {
    border-radius: 8px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  flex: 1;
  min-width: 50%;
  width: 100%;
`;

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  overflow: hidden;
`;

export const AccordionHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  text-align: left;
`;

export const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: #FFFFFF;
`;

export const AccordionTitleText = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #000000;
`;

export const ChevronIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  
  svg {
    stroke-width: 3px;
  }
`;

export const AccordionContentWrapper = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s ease;
`;

export const AccordionInnerContent = styled.div`
  overflow: hidden;
`;

export const AccordionText = styled.div`
  padding: 0 20px 20px 76px;
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    padding: 0 15px 15px 15px;
  }
`;

export const ListTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`;