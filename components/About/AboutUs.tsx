"use client";

import Image from "next/image";
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
  return (
    <AboutSection>
      <SectionTitle>Про нас</SectionTitle>
      
      <AboutContent>
        {/* Верхня частина з фото та текстовими картками */}
        <TopSection>
          <ImageWrapper>
            <Image 
              src="/about-store.png" 
              fill 
              alt="Інтер'єр Мандрівної крамниці" 
              style={{ objectFit: 'cover' }} 
            />
          </ImageWrapper>
          
          <InfoCardsContainer>
            <InfoCard>
              <InfoCardTitle>Початок історії</InfoCardTitle>
              <InfoCardText>
                «Мандрівна Крамниця» народилася на Подолі — місці, де століттями перетиналися 
                торговельні шляхи та культури. Тут, серед вузьких вуличок, дерев’яних лавок і 
                запаху прянощів, мандрівники з різних куточків світу обмінювалися не лише 
                товарами, а й історіями, смаками та традиціями. Саме ця атмосфера відкриттів і 
                стала основою нашого бренду.
              </InfoCardText>
            </InfoCard>

            <InfoCard>
              <InfoCardTitle>Наша ідея</InfoCardTitle>
              <InfoCardText>
                Ми взяли за основу дух стародавніх подорожей та перенесли його у сучасність. 
                Наша крамниця — це місце, де кожна покупка перетворюється на маленьку 
                мандрівку, а кожен товар має свою історію. Тут можна знайти сири з Франції, спеції 
                з Близького Сходу, шоколад з Іспанії чи каву з далеких країн — усе, що дозволяє 
                відчути світ на смак.
              </InfoCardText>
            </InfoCard>

            <InfoCard>
              <InfoCardTitle>Філософія</InfoCardTitle>
              <InfoCardText>
                Наша філософія проста: подорожі надихають, а кожен смак може відкрити нову 
                історію. Ми віримо, що гастрономія — це універсальна мова, яка поєднує людей, 
                культури та часи. «Мандрівна Крамниця» — це не просто місце покупок. Це порт 
                для тих, хто шукає нові емоції, любить відкривати світ і знаходить красу у 
                дрібницях. Ми створюємо простір, де кожен відвідувач відчуває тепло, увагу та 
                атмосферу справжньої мандрівки.
              </InfoCardText>
            </InfoCard>
          </InfoCardsContainer>
        </TopSection>

        {/* Нижня частина з картками фактів */}
        <FactsSection>
          <FactCard $variant="solid">
            <FactTitleGroup>
              <Clock size={36} strokeWidth={1.5} />
              <FactTitle>10 років</FactTitle>
            </FactTitleGroup>
            <FactText>
              Вже десять років ми збираємо смаки світу та передаємо 
              атмосферу подорожей у кожному продукті
            </FactText>
          </FactCard>

          <FactCard $variant="outline">
            <FactTitleGroup>
              <MapPin size={36} strokeWidth={1.5} />
              <FactTitle>40 країн</FactTitle>
            </FactTitleGroup>
            <FactText>
              Наші товари приїжджають із більш ніж сорока країн — від сімейних 
              фермерських господарств до далеких культур
            </FactText>
          </FactCard>

          <FactCard $variant="solid">
            <FactTitleGroup>
              <Store size={36} strokeWidth={1.5} />
              <FactTitle>1 магазин</FactTitle>
            </FactTitleGroup>
            <FactText>
              Один магазин на Подолі, але тисячі мандрівок усередині. 
              Кожен наш гість відкриває світ по-новому
            </FactText>
          </FactCard>

          <FactCard $variant="outline">
            <FactTitleGroup>
              <Users size={36} strokeWidth={1.5} />
              <FactTitle>8000 клієнтів</FactTitle>
            </FactTitleGroup>
            <FactText>
              Понад вісім тисяч мандрівників уже спробували наші продукти, 
              отримали тепло, автентику та маленькі відкриття
            </FactText>
          </FactCard>
        </FactsSection>

      </AboutContent>
    </AboutSection>
  );
};

export default AboutUs;