import styled from "styled-components";

interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
  };
}

export const MapSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  gap: 40px;
  width: 100%;
  background: #FFFFFF;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
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

export const PrimaryButton = styled.button`
  font-family: var(--font-montserrat), sans-serif;
  background: ${({ theme }: { theme: Theme }) => theme.colors.primary} !important;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px !important;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.primary};
  border-radius: 10px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }: { theme: Theme }) => theme.colors.primaryLight} !important;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  background: #F7F3E7;
  border: 3px solid ${({ theme }: { theme: Theme }) => theme.colors.primary};
  border-radius: 20px;
  overflow: auto;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 1000px;
  aspect-ratio: 1440 / 788;
  background: #F7F3E7;
  padding-bottom: 100px;
`;

export const CoverRect = styled.div<{ $isActive: boolean; $l: string; $r: string; $t: string; $b: string }>`
  position: absolute;
  left: ${({ $l }) => $l};
  right: ${({ $r }) => $r};
  top: ${({ $t }) => $t};
  bottom: ${({ $b }) => $b};
  background: #796453;
  border: 3px solid #3B3028;
  border-radius: 2px;
  opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 2;
`;

export const MapPin = styled.button<{ $isActive: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #3B3028 !important;
  border: none;
  border-radius: 50%;
  color: #FFFFFF;
  font-family: var(--font-gabriela), serif;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  padding: 0 !important;
  opacity: ${({ $isActive }) => ($isActive ? 0 : 1)}; 

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }
`;

export const Popover = styled.div<{ $direction?: 'top' | 'bottom' | 'left' | 'right' }>`
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #E9E3D9;
  border-radius: 16px;
  padding: 20px 30px 20px 20px;
  min-width: 280px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 30;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
  transform: none;

  ${({ $direction }) => (!$direction || $direction === 'top' || $direction === 'bottom') && `
    left: 50%;
    transform: translateX(-50%);
  `}

  ${({ $direction }) => ($direction === 'bottom' || !$direction) && `
    top: 45px; 
  `}

  ${({ $direction }) => $direction === 'top' && `
    bottom: 45px; 
  `}

  ${({ $direction }) => $direction === 'right' && `
    left: 60px; 
    top: -30px;
  `}

  ${({ $direction }) => $direction === 'left' && `
    right: 80px; 
    top: -20px;
  `}
`;

export const PopoverClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const PopoverList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const PopoverItem = styled.li`
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: #000000;
`;