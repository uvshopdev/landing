import styled from "styled-components";

interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
  };
}

export const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 80px 40px;
  gap: 40px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NewsTitle = styled.h2`
  font-family: var(--font-gabriela), serif;
  font-size: 34px;
  color: #3B3028;
  margin: 0;
`;

export const SeeAllBtn = styled.button`
  background: none;
  border: none;
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #3B3028;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover { opacity: 0.7; }
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 30px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const NewsCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 26px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E9E3D9;
  border-radius: 20px;
`;

export const CardImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 179px;
  background: url(${({ $src }) => $src}) center/cover no-repeat;
  border-radius: 14px;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin: 0;
  min-height: 40px;
`;

export const CardDesc = styled.p`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin: 0;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

export const DateBadge = styled.div`
  padding: 10px 20px;
  border: 1px solid #3B3028;
  border-radius: 18px;
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #523C30;
`;

export const ReadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  gap: 20px;
  height: 37px;
  background: #FFFFFF;
  border: 1px solid #3B3028;
  border-radius: 18px;
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #3B3028;
  cursor: pointer;
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 37px;
    height: 37px;
    background: #3B3028;
    border-radius: 50%;
    margin-right: -1px;
    color: white;
  }

  &:hover { background: #F7F3E7; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  background: #FFFFFF;
  border-radius: 30px;
  width: 95%;
  max-width: 1400px;
  height: 90vh;
  position: relative;
  padding: 60px 40px 40px 40px; 
  display: flex;
  flex-direction: row;
  gap: 40px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 20px 20px 20px;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #3B3028;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  transition: opacity 0.2s;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  box-sizing: border-box;
  padding-bottom: 4px;

  &:hover { opacity: 0.8; }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const RightColumn = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E9E3D9;
  padding-left: 24px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    border-left: none;
    padding-left: 0;
    border-top: 1px solid #E9E3D9;
    padding-top: 40px;
    overflow: visible;
  }
`;

export const ColumnHeader = styled.div`
  flex-shrink: 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ScrollableArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #E9E3D9; border-radius: 10px; }

  &::after {
    content: '';
    display: block;
    height: 40px;
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    overflow-y: visible;
    padding-right: 0;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MetaBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  border: 1px solid #3B3028;
  border-radius: 16px;
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #523C30;
`;

export const ShareIcons = styled.div`
  display: flex;
  gap: 20px;
  color: #3B3028;
`;

export const FullImage = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

export const FullText = styled.div`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: #000000;
  white-space: pre-line;
`;