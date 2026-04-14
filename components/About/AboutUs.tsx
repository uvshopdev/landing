"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Clock, MapPin, Store, Users } from "lucide-react";
import {
  AboutSection,
  SectionTitle,
  AboutContent,
  TopSection,
  ImageWrapper,
  InfoCardsContainer,
  InfoCard,
  InfoCardTitle,
  InfoCardText,
  FactsSection,
  FactCard,
  FactTitleGroup,
  FactTitle,
  FactText
} from "./AboutUs.css";

const AboutUs = () => {
  const t = useTranslations("About");

  return (
    <AboutSection id="about">
      <SectionTitle>{t('title')}</SectionTitle>
      
      <AboutContent>
        <TopSection>
          <ImageWrapper>
            <Image 
              src="/about-store.png" 
              fill 
              alt={t('img_alt')} 
              style={{ objectFit: 'cover' }} 
            />
          </ImageWrapper>
          
          <InfoCardsContainer>
            <InfoCard>
              <InfoCardTitle>{t('history_title')}</InfoCardTitle>
              <InfoCardText>
                {t('history_text')}
              </InfoCardText>
            </InfoCard>

            <InfoCard>
              <InfoCardTitle>{t('idea_title')}</InfoCardTitle>
              <InfoCardText>
                {t('idea_text')}
              </InfoCardText>
            </InfoCard>

            <InfoCard>
              <InfoCardTitle>{t('philosophy_title')}</InfoCardTitle>
              <InfoCardText>
                {t('philosophy_text_p1')}
              </InfoCardText>
              <InfoCardText>
                {t('philosophy_text_p2')}
              </InfoCardText>
            </InfoCard>
          </InfoCardsContainer>
        </TopSection>

        <FactsSection>
          <FactCard $variant="solid">
            <FactTitleGroup>
              <Clock size={36} strokeWidth={1.5} />
              <FactTitle>{t('fact1_title')}</FactTitle>
            </FactTitleGroup>
            <FactText>
              {t('fact1_text')}
            </FactText>
          </FactCard>

          <FactCard $variant="outline">
            <FactTitleGroup>
              <MapPin size={36} strokeWidth={1.5} />
              <FactTitle>{t('fact2_title')}</FactTitle>
            </FactTitleGroup>
            <FactText>
              {t('fact2_text')}
            </FactText>
          </FactCard>

          <FactCard $variant="solid">
            <FactTitleGroup>
              <Store size={36} strokeWidth={1.5} />
              <FactTitle>{t('fact3_title')}</FactTitle>
            </FactTitleGroup>
            <FactText>
              {t('fact3_text')}
            </FactText>
          </FactCard>

          <FactCard $variant="outline">
            <FactTitleGroup>
              <Users size={36} strokeWidth={1.5} />
              <FactTitle>{t('fact4_title')}</FactTitle>
            </FactTitleGroup>
            <FactText>
              {t('fact4_text')}
            </FactText>
          </FactCard>
        </FactsSection>

      </AboutContent>
    </AboutSection>
  );
};

export default AboutUs;