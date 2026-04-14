"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import { 
  FooterWrapper, FooterBody, InfoBlock, FooterLogo, Description, 
  ContactsBlock, BlockTitle, ContactItem, NavBlock, NavGrid, 
  RightActions, PolicyBtn, FooterBottom, Copyright, BottomRight, 
  RouteButton, SocialLinks 
} from "./Footer.css";
// import { useExtracted } from "next-intl";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBody>
        
        <InfoBlock>
          <FooterLogo>
            <Image src="/logo-white.png" fill alt="Мандрівна крамниця" style={{ objectFit: 'contain' }} />
          </FooterLogo>
          <Description>
            «Мандрівна крамниця» — це простір, де зустрічаються гастрономія, 
            історія та дух подорожей. Ми відроджуємо атмосферу давнього Подолу — 
            місця, де перетиналися міжнародні торгові шляхи, — щоб ви могли 
            відчути себе мандрівником стародавніх часів і отримати неповторний досвід покупок.
          </Description>
        </InfoBlock>

        <ContactsBlock>
          <BlockTitle>Контакти</BlockTitle>
          <ContactItem>
            <Mail size={16} /> support@gmail.com
          </ContactItem>
          <ContactItem>
            <Phone size={16} /> +380 XXXXXXXXX
          </ContactItem>
        </ContactsBlock>

        <NavBlock>
          <BlockTitle>Навігація</BlockTitle>
          <NavGrid>
            <Link href="/">Про нас</Link>
            <Link href="/">Програма лояльності</Link>
            <Link href="/">Новини</Link>
            <Link href="/">Мапа залу</Link>
          </NavGrid>
        </NavBlock>

        <RightActions>
          <PolicyBtn href="/policy">
            Умови та Політика конфіденційності
            <div>?</div>
          </PolicyBtn>
        </RightActions>

      </FooterBody>

      <FooterBottom>
        <Copyright>© 2026 Мандрівна крамниця. Всі права захищено</Copyright>
        <BottomRight>
          <RouteButton type="button">Прокласти маршрут</RouteButton>
          <SocialLinks>
            <Link href="/" aria-label="Instagram"><Instagram size={24} /></Link>
            <Link href="/" aria-label="Facebook"><Facebook size={24} /></Link>
            <Link href="/" aria-label="Viber"><MessageCircle size={24} /></Link>
            <Link href="/" aria-label="Telegram"><Send size={24} /></Link>
          </SocialLinks>
        </BottomRight>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;