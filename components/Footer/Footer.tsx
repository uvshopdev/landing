"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
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
          <a href="/" onClick={scrollToTop} aria-label="На головну" style={{ display: 'block', width: 'max-content' }}>
            <FooterLogo>
              <Image src="/logo-white.png" fill alt="Мандрівна крамниця" style={{ objectFit: 'contain' }} />
            </FooterLogo>
          </a>
          <Description>
            «Мандрівна крамниця» — це простір, де зустрічаються гастрономія, 
            історія та дух подорожей. Ми відроджуємо атмосферу давнього Подолу — 
            місця, де перетиналися міжнародні торгові шляхи.
          </Description>
        </InfoBlock>

        <ContactsBlock>
          <BlockTitle>Контакти</BlockTitle>
          <ContactItem><Mail size={16} /> support@gmail.com</ContactItem>
          <ContactItem><Phone size={16} /> +380 XXXXXXXXX</ContactItem>
        </ContactsBlock>

        <NavBlock>
          <BlockTitle>Навігація</BlockTitle>
          <NavGrid>
            <a href="#about">Про нас</a>
            <a href="#loyalty">Програма лояльності</a>
            <a href="#map">Мапа залу</a>
            <a href="#news">Новини</a>
          </NavGrid>
        </NavBlock>

        <RightActions>
          <PolicyBtn onClick={() => setIsPolicyOpen(true)}>
            <span>Умови та Політика конфіденційності</span>
            <div>?</div>
          </PolicyBtn>
        </RightActions>
      </FooterBody>

      <FooterBottom>
        <Copyright>© 2026 Мандрівна крамниця. Всі права захищено</Copyright>
        <BottomRight>
          <RouteButton 
            href="https://www.google.com/maps/search/?api=1&query=Контрактова+площа,+9,+Київ,+Україна"
            target="_blank"
            rel="noopener noreferrer"
          >
            Прокласти маршрут
          </RouteButton>
          <SocialLinks>
            <Link href="/" aria-label="Instagram"><Instagram size={24} /></Link>
            <Link href="/" aria-label="Facebook"><Facebook size={24} /></Link>
            <Link href="/" aria-label="Viber"><MessageCircle size={24} /></Link>
            <Link href="/" aria-label="Telegram"><Send size={24} /></Link>
          </SocialLinks>
        </BottomRight>
      </FooterBottom>

      {isPolicyOpen && (
        <ModalOverlay onClick={() => setIsPolicyOpen(false)}>
          <PolicyModalContainer onClick={(e) => e.stopPropagation()}>
            
            <PolicyCloseBtn onClick={() => setIsPolicyOpen(false)}>
              &#10005;
            </PolicyCloseBtn>

            <PolicyModalHeader>
              <PolicyMainTitle>Умови та Політика конфіденційності</PolicyMainTitle>
            </PolicyModalHeader>

            <PolicyScrollArea>
              <PolicySection>
                <PolicySectionTitle>1. Загальна інформація</PolicySectionTitle>
                <PolicyText>
                  Ця Політика конфіденційності визначає порядок збору, зберігання, обробки та використання персональних даних користувачів веб-сайту та веб-застосунку «Мандрівна Крамниця».
                  <br /><br />
                  Ми дотримуємось вимог та принципів GDPR — прозорості, безпеки та мінімізації даних. Користуючись нашим сайтом, створюючи акаунт та реєструючись у програмі лояльності «Hermes», ви підтверджуєте, що ознайомлені з цією Політикою та погоджуєтесь із нею.
                </PolicyText>
              </PolicySection>

              <PolicySection>
                <PolicySectionTitle>2. Які дані ми збираємо</PolicySectionTitle>
                <PolicyText>
                  Ми збираємо лише ті дані, які необхідні для роботи сервісу та програми лояльності:
                </PolicyText>
                <PolicyList>
                  <PolicyListItem>Персональна інформація (електронна адреса, дата народження, гендер)</PolicyListItem>
                  <PolicyListItem>Ім’я</PolicyListItem>
                  <PolicyListItem>Номер телефону (для реєстрації та авторизації через SMS)</PolicyListItem>
                  <PolicyListItem>Дані транзакцій і нарахованих миль</PolicyListItem>
                  <PolicyListItem>Дані про статус у програмі лояльності</PolicyListItem>
                  <PolicyListItem>Історію покупок</PolicyListItem>
                </PolicyList>
              </PolicySection>

              <PolicySection>
                <PolicySectionTitle>3. Використання cookies</PolicySectionTitle>
                <PolicyText>
                  Наш сайт використовує мінімально необхідні cookies, які забезпечують коректну роботу сервісу та авторизації. Ми не використовуємо рекламні чи аналітичні куки, якщо ви окремо не погодитесь на них.
                  <br /><br />
                  Необхідні cookies забезпечують роботу сайту та не можуть бути вимкнені. До них належать сесійні куки (зберігають тимчасові технічні дані — ідентифікатор вашої сесії) та кука з рефреш-токеном, що використовується для продовження вашої авторизованої сесії без повторного введення коду з SMS. Ця кука є захищеною та недоступна для сторонніх сайтів.
                </PolicyText>
              </PolicySection>

              <PolicySection>
                <PolicySectionTitle>4. Як ми використовуємо ваші дані</PolicySectionTitle>
                <PolicyText>
                  Ваші персональні дані використовуються виключно для:
                </PolicyText>
                <PolicyList>
                  <PolicyListItem>реєстрації та авторизації у програмі лояльності «Hermes»;</PolicyListItem>
                  <PolicyListItem>нарахування, зберігання та списання миль;</PolicyListItem>
                  <PolicyListItem>роботи інтерактивної карти країн та ігрових бонусів;</PolicyListItem>
                  <PolicyListItem>оформлення замовлень у веб-магазині;</PolicyListItem>
                  <PolicyListItem>покращення якості сервісу та обслуговування клієнтів.</PolicyListItem>
                </PolicyList>
                <PolicyText>
                  Ми не передаємо ваші дані третім особам, окрім випадків, коли це необхідно для роботи технологічних сервісів (SMS-відправка, CRM-інтеграція) і лише за захищеним протоколом.
                </PolicyText>
              </PolicySection>
            </PolicyScrollArea>

          </PolicyModalContainer>
        </ModalOverlay>
      )}
    </FooterWrapper>
  );
};

export default Footer;