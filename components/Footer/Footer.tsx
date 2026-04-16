"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, Instagram, Facebook, MessageCircle, Send, Music2 } from "lucide-react";
import { 
  FooterWrapper, FooterBody, InfoBlock, FooterLogo, Description, 
  ContactsBlock, BlockTitle, ContactItem, NavBlock, NavGrid, 
  RightActions, PolicyBtn, FooterBottom, Copyright, BottomRight, 
  RouteButton, SocialLinks,
  ModalOverlay, PolicyModalContainer, PolicyCloseBtn, PolicyModalHeader, 
  PolicyMainTitle, PolicyScrollArea, PolicySection, PolicySectionTitle, PolicyText,
  PolicyList, PolicyListItem
} from "./Footer.css";

const Footer = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const t = useTranslations("Footer");

  useEffect(() => {
    if (isPolicyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isPolicyOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  return (
    <FooterWrapper>
      <FooterBody>
        <InfoBlock>
          <a href="/" onClick={scrollToTop} aria-label={t('logo_alt')} style={{ display: 'block', width: 'max-content' }}>
            <FooterLogo>
              <Image src="/logo-white.png" fill alt={t('logo_alt')} style={{ objectFit: 'contain' }} />
            </FooterLogo>
          </a>
          <Description>
            {t('description')}
          </Description>
        </InfoBlock>

        <ContactsBlock>
          <BlockTitle>{t('contacts_title')}</BlockTitle>
          <ContactItem><Mail size={16} /> support@gmail.com</ContactItem>
          <ContactItem><Phone size={16} /> +380 XXXXXXXXX</ContactItem>
        </ContactsBlock>

        <NavBlock>
          <BlockTitle>{t('nav_title')}</BlockTitle>
          <NavGrid>
            <a href="#about">{t('nav_about')}</a>
            <a href="#loyalty">{t('nav_loyalty')}</a>
            <a href="#map">{t('nav_map')}</a>
            <a href="#news">{t('nav_news')}</a>
          </NavGrid>
        </NavBlock>

        <RightActions>
          <PolicyBtn onClick={() => setIsPolicyOpen(true)}>
            <span>{t('privacy_policy')}</span>
            <div>?</div>
          </PolicyBtn>
        </RightActions>
      </FooterBody>

      <FooterBottom>
        <Copyright>{t('copyright')}</Copyright>
        <BottomRight>
          <RouteButton 
            href="https://www.google.com/maps/search/?api=1&query=Контрактова+площа,+9,+Київ,+Україна"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('build_route')}
          </RouteButton>
          <SocialLinks>
            <a href="https://www.instagram.com/?hl=uk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/?locale=uk_UA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.tiktok.com/?lang=uk-UA" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Music2 size={24} />
            </a>
            <a href="https://telegram.org/?setln=uk" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Send size={24} />
            </a>
            <a href="https://www.viber.com/ua/" target="_blank" rel="noopener noreferrer" aria-label="Viber">
              <MessageCircle size={24} />
            </a>
          </SocialLinks>
        </BottomRight>
      </FooterBottom>

      {isPolicyOpen && (
        <ModalOverlay onClick={() => setIsPolicyOpen(false)}>
          <PolicyModalContainer onClick={(e) => e.stopPropagation()}>
            
            <PolicyCloseBtn onClick={() => setIsPolicyOpen(false)}>
              ✕
            </PolicyCloseBtn>

            <PolicyModalHeader>
              <PolicyMainTitle>{t('privacy_policy')}</PolicyMainTitle>
            </PolicyModalHeader>

            <PolicyScrollArea>
              <PolicySection>
                <PolicySectionTitle>{t('policy_title1')}</PolicySectionTitle>
                <PolicyText>
                  {t.rich('policy_text1', { br: () => <br /> })}
                </PolicyText>
              </PolicySection>

              <PolicySection>
                <PolicySectionTitle>{t('policy_title2')}</PolicySectionTitle>
                <PolicyText>{t('policy_text2')}</PolicyText>
                <PolicyList>
                  <PolicyListItem>{t('policy_list2_item1')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list2_item2')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list2_item3')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list2_item4')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list2_item5')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list2_item6')}</PolicyListItem>
                </PolicyList>
              </PolicySection>

              <PolicySection>
                <PolicySectionTitle>{t('policy_title3')}</PolicySectionTitle>
                <PolicyText>
                  {t.rich('policy_text3', { br: () => <br /> })}
                </PolicyText>
              </PolicySection>

              <PolicySection>
                <PolicySectionTitle>{t('policy_title4')}</PolicySectionTitle>
                <PolicyText>{t('policy_text4')}</PolicyText>
                <PolicyList>
                  <PolicyListItem>{t('policy_list4_item1')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list4_item2')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list4_item3')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list4_item4')}</PolicyListItem>
                  <PolicyListItem>{t('policy_list4_item5')}</PolicyListItem>
                </PolicyList>
                <PolicyText>{t('policy_text4_end')}</PolicyText>
              </PolicySection>
            </PolicyScrollArea>

          </PolicyModalContainer>
        </ModalOverlay>
      )}
    </FooterWrapper>
  );
};

export default Footer;