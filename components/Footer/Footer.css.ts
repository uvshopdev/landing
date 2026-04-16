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
	margin: 0;
	font-weight: 700;
	font-size: 16px;
	color: #FFFFFF;
`;

export const ContactItem = styled.div`
	display: flex;
	align-items: center;

	a {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		color: #FFFFFF;
		text-decoration: none;
		font-weight: 500;
		font-size: 14px;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.75;
		}
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

export const PolicyBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  
  span {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    font-size: 12px;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
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

export const RouteButton = styled.a`
  background: #FFFFFF !important;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px !important;
  border-radius: 10px;
  
  /* Стилі посилання */
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary} !important;
    border-color: ${({ theme }) => theme.colors.secondary};
    color: #FFFFFF;
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
  z-index: 2000;
  padding: 20px;
`;

export const PolicyModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 600px;
  max-width: 100%;
  height: 700px;
  max-height: 90vh;
  background: #FFFFFF;
  border-radius: 30px;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 30px;
`;

export const PolicyCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  max-width: 32px;
  max-height: 32px;
  flex-shrink: 0;
  
  padding: 0;
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
  font-size: 16px;
  font-weight: bold;
  font-family: sans-serif;
  box-sizing: border-box;
  
  line-height: 1;

  &:hover { opacity: 0.8; }
`;

export const PolicyModalHeader = styled.div`
  padding: 60px 30px 20px 30px;
  background: #FFFFFF;
  z-index: 20;
  flex-shrink: 0;
`;

export const PolicyMainTitle = styled.h2`
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #1A1A1A;
  margin: 0;
`;

export const PolicyScrollArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 0 30px;
  overflow-y: auto;
  
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #E9E3D9; border-radius: 10px; }

  &::after {
    content: '';
    display: block;
    min-height: 30px;
    flex-shrink: 0;
  }
`;

export const PolicySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const PolicySectionTitle = styled.h3`
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #1A1A1A;
  margin: 0;
`;

export const PolicyText = styled.p`
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #1A1A1A;
  margin: 0;
`;

export const PolicyList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
`;

export const PolicyListItem = styled.li`
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #1A1A1A;
  margin: 0;
  position: relative;
  padding-left: 20px; 
  
  &::before {
    content: '•';
    position: absolute;
    left: 8px; 
    top: 0;
    color: #1A1A1A;
  }
`;