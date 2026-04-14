"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import {
  LoyaltySection,
  SectionHeader,
  Title,
  PrimaryButton,
  ContentWrapper,
  GalleryContainer,
  MainImageWrapper,
  ThumbnailsRow,
  ThumbnailWrapper,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  HeaderLeft,
  IconCircle,
  AccordionTitleText,
  ChevronIcon,
  AccordionContentWrapper,
  AccordionInnerContent,
  AccordionText,
  ListTextGroup
} from "./Loyalty.css";

const galleryImages = [
  { id: 0, src: "/loyalty-map.png", alt: "Мапа відкритих країн" },
  { id: 1, src: "/loyalty-coffee.png", alt: "Кава паспорт" },
  { id: 2, src: "/loyalty-friends.png", alt: "Реферальна програма" }
];

const accordionData = [
  {
    id: 0,
    title: "Нарахування миль за кожну покупку",
    content: "Ви можете отримати 1 милю за кожні 100 грн зі здійсненого замовлення. Милі накопичуються автоматично після реєстрації."
  },
  {
    id: 1,
    title: "Можливість оплачувати милями",
    content: "1 миля = 1 грн. Ви завжди можете списати частину або всю суму покупки."
  },
  {
    id: 2,
    title: "Мапа відкритих країн та віртуальні печатки",
    content: "Купуєш товари з певної країни — відкриваєш її на своїй мапі. Кожна нова країна = печатка + 20 бонусних миль."
  },
  {
    id: 3,
    title: "Рівні статусів мандрівника",
    content: (
      <>
        <div>Карта мандрівника має 4 статуси, які відкривають додаткові привілеї:</div>
        <ListTextGroup>
          <div><strong>Турист</strong> — старт для всіх (до 50 накопичених миль за рік)</div>
          <div><strong>Дослідник</strong> — 50+ миль за рік</div>
          <div><strong>Мандрівник</strong> — 150+ миль за рік</div>
          <div><strong>Посол мандрів</strong> — 300+ миль за рік</div>
        </ListTextGroup>
        <div>Чим вищий статус — тим більше бонусів, переваг і персональних пропозицій.</div>
      </>
    )
  },
  {
    id: 4,
    title: "Щотижневі й сезонні бонуси",
    content: (
      <ListTextGroup>
        <div><strong>Travel Tuesday</strong> — x2 милі на імпортні товари щовівторка</div>
        <div><strong>Країна місяця</strong> — +20% миль за покупки товарів місяця</div>
        <div><strong>Сезонні виклики</strong> — тимчасові бонуси, тематичні акції, святкові сюрпризи</div>
      </ListTextGroup>
    )
  },
  {
    id: 5,
    title: "Реферальна програма",
    content: "Запроси друга — отримай 50 миль і безкоштовну каву після його першої покупки."
  },
  {
    id: 6,
    title: "Кава паспорт 6 + 1",
    content: "При покупці 6 кав 7-ма кава — подарунок від нас."
  }
];

const Loyalty = () => {
  const [activeImageId, setActiveImageId] = useState(0);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <LoyaltySection>
      <SectionHeader>
        <Title>Програма лояльності</Title>
        <PrimaryButton type="button">Стати мандрівником</PrimaryButton>
      </SectionHeader>

      <ContentWrapper>
        <GalleryContainer>
          <MainImageWrapper>
            <Image
              src={galleryImages[activeImageId].src}
              fill
              alt={galleryImages[activeImageId].alt}
              style={{ objectFit: "contain", padding: "30px" }}
              priority
            />
          </MainImageWrapper>
          <ThumbnailsRow>
            {galleryImages.map((image) => (
              <ThumbnailWrapper
                key={image.id}
                $isActive={activeImageId === image.id}
                onClick={() => setActiveImageId(image.id)}
                type="button"
                aria-label={`Переглянути ${image.alt}`}
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                  style={{ objectFit: "contain", padding: "16px" }}
                />
              </ThumbnailWrapper>
            ))}
          </ThumbnailsRow>
        </GalleryContainer>

        <AccordionContainer>
          {accordionData.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionHeader onClick={() => toggleAccordion(item.id)}>
                <HeaderLeft>
                  <IconCircle>
                    <Check size={20} strokeWidth={3} />
                  </IconCircle>
                  <AccordionTitleText>{item.title}</AccordionTitleText>
                </HeaderLeft>
                <ChevronIcon $isOpen={openAccordionId === item.id}>
                  <ChevronDown size={24} />
                </ChevronIcon>
              </AccordionHeader>
              <AccordionContentWrapper $isOpen={openAccordionId === item.id}>
                <AccordionInnerContent>
                  <AccordionText>{item.content}</AccordionText>
                </AccordionInnerContent>
              </AccordionContentWrapper>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </ContentWrapper>
    </LoyaltySection>
  );
};

export default Loyalty;