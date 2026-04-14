"use client";

import styled from "styled-components";

export const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 0px; 
  gap: 40px;
  width: 100%;
  background: #FFFFFF;
`;

export const GalleryHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 40px;
  width: 100%;
`;

export const GalleryTitle = styled.h2`
  font-family: var(--font-gabriela), serif;
  font-weight: 400;
  font-size: 34px;
  color: #000000;
  margin: 0;
`;

export const EmblaContainer = styled.div`
  width: 100%;
  overflow: hidden; /* Приховує слайди, які виходять за межі */
`;

export const EmblaViewport = styled.div`
  display: flex;
  /* Це забезпечує плавне гортання */
  touch-action: pan-y pinch-zoom;
`;

export const EmblaSlide = styled.div`
  position: relative;
  flex: 0 0 100%; /* Кожен слайд займає 100% ширини контейнера */
  min-width: 0;
  height: 500px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 48px;
  width: 100%;
  margin-top: 10px;
`;

export const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary} !important;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0 !important;
  
  svg {
    color: #FFFFFF;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryLight} !important;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const DotButton = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  padding: 0 !important;
  border: none !important;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : '#E5E5E5')} !important;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.primaryLight)} !important;
  }
`;