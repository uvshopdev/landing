"use client";

import Image from "next/image";
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
  return (
    <HeroSection id='hero'>
      <HeroContent>
        <TextBlock>
          <TextContainer>
            <TitleGroup>
              <PreTitle>Мандрівна крамниця</PreTitle>
              <Title>Гастрономічний порт<br />у серці Подолу</Title>
            </TitleGroup>
            <Description>
              Ми зібрали під одним дахом історії з далеких берегів. Кожен смак — 
              це крок у нову країну, кожна чашка кави — маленька зупинка на 
              маршруті мандрівника. Відкрий для себе Мандрівну Крамницю — 
              місце, де Поділ знову стає перехрестям світів.
            </Description>
          </TextContainer>
          <HeroButton as="a" href="#about" type="button">
            Дізнатися більше
          </HeroButton>
        </TextBlock>
        <ImageBlock>
          <Image 
            src="/hero-collage.png" 
            fill 
            alt="Гастрономічний порт" 
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