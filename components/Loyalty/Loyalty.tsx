"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
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

const Loyalty = () => {
  const t = useTranslations("Loyalty");
  const [activeImageId, setActiveImageId] = useState(0);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const galleryImages = [
    { id: 0, src: "/loyalty-map.png", alt: t("gallery_map") },
    { id: 1, src: "/loyalty-coffee.png", alt: t("gallery_coffee") },
    { id: 2, src: "/loyalty-friends.png", alt: t("gallery_friends") }
  ];

  const accordionData = [
    {
      id: 0,
      title: t("acc0_title"),
      content: t("acc0_content")
    },
    {
      id: 1,
      title: t("acc1_title"),
      content: t("acc1_content")
    },
    {
      id: 2,
      title: t("acc2_title"),
      content: t("acc2_content")
    },
    {
      id: 3,
      title: t("acc3_title"),
      content: (
        <>
          <div>{t("acc3_desc_top")}</div>
          <ListTextGroup>
            <div><strong>{t("acc3_lvl1")}</strong> {t("acc3_lvl1_desc")}</div>
            <div><strong>{t("acc3_lvl2")}</strong> {t("acc3_lvl2_desc")}</div>
            <div><strong>{t("acc3_lvl3")}</strong> {t("acc3_lvl3_desc")}</div>
            <div><strong>{t("acc3_lvl4")}</strong> {t("acc3_lvl4_desc")}</div>
          </ListTextGroup>
          <div>{t("acc3_desc_bottom")}</div>
        </>
      )
    },
    {
      id: 4,
      title: t("acc4_title"),
      content: (
        <ListTextGroup>
          <div><strong>{t("acc4_b1")}</strong> {t("acc4_b1_desc")}</div>
          <div><strong>{t("acc4_b2")}</strong> {t("acc4_b2_desc")}</div>
          <div><strong>{t("acc4_b3")}</strong> {t("acc4_b3_desc")}</div>
        </ListTextGroup>
      )
    },
    {
      id: 5,
      title: t("acc5_title"),
      content: t("acc5_content")
    },
    {
      id: 6,
      title: t("acc6_title"),
      content: t("acc6_content")
    }
  ];

  return (
    <LoyaltySection id="loyalty">
      <SectionHeader>
        <Title>{t("title")}</Title>
        <PrimaryButton
          href="https://shop.webshining.space/auth?state=%2Fprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("button")}
        </PrimaryButton>
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
                aria-label={t("view_image", { alt: image.alt })}
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
                  <AccordionText as="div">{item.content}</AccordionText>
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