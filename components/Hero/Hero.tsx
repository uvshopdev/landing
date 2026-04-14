"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { 
  HeroSection, 
  HeroContent, 
  TextBlock, 
  TextContainer, 
  TitleGroup, 
  PreTitle, 
  Title, 
  Description, 
  HeroButton, 
  ImageBlock, 
  TornEdge 
} from "./Hero.css";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <HeroSection id='hero'>
      <HeroContent>
        <TextBlock>
          <TextContainer>
            <TitleGroup>
              <PreTitle>{t('pre_title')}</PreTitle>
              <Title>
                {t.rich('title', {
                  br: () => <br />
                })}
              </Title>
            </TitleGroup>
            <Description>
              {t('description')}
            </Description>
          </TextContainer>
          <HeroButton as="a" href="#about" type="button">
            {t('button')}
          </HeroButton>
        </TextBlock>
        <ImageBlock>
          <Image 
            src="/hero-collage.png" 
            fill 
            alt={t('img_alt')} 
            style={{ objectFit: 'contain', objectPosition: 'center' }} 
            priority 
          />
        </ImageBlock>
      </HeroContent>
      <TornEdge />
    </HeroSection>
  );
};

export default Hero;