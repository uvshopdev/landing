"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  GallerySection,
  GalleryHeader,
  GalleryTitle,
  EmblaContainer,
  EmblaViewport,
  EmblaSlide,
  ControlsContainer,
  NavigationButton,
  DotsContainer,
  DotButton,
} from "./Gallery.css";

// Масив з нашими картинками
const slides = [
  { id: 1, src: "/gallery-1.png", alt: "Інтер'єр крамниці 1" },
  { id: 2, src: "/gallery-2.png", alt: "Інтер'єр крамниці 2" },
  { id: 3, src: "/gallery-3.png", alt: "Інтер'єр крамниці 3" },
];

const Gallery = () => {
  // Ініціалізація каруселі
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Функції для гортання кнопками
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  // Функція для кліку по точці
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // Слідкуємо за зміною активного слайду
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <GallerySection id='gallery'>
      <GalleryHeader>
        <GalleryTitle>Фотогалерея</GalleryTitle>
      </GalleryHeader>

      <EmblaContainer ref={emblaRef}>
        <EmblaViewport>
          {slides.map((slide) => (
            <EmblaSlide key={slide.id}>
              <Image
                src={slide.src}
                fill
                alt={slide.alt}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </EmblaSlide>
          ))}
        </EmblaViewport>
      </EmblaContainer>

      <ControlsContainer>
        <NavigationButton onClick={scrollPrev} disabled={prevBtnDisabled} aria-label="Попереднє фото">
          <ArrowLeft size={20} strokeWidth={2} />
        </NavigationButton>

        <DotsContainer>
          {slides.map((_, index) => (
            <DotButton
              key={index}
              $active={index === selectedIndex}
              onClick={() => scrollTo(index)}
              aria-label={`Перейти до фото ${index + 1}`}
            />
          ))}
        </DotsContainer>

        <NavigationButton onClick={scrollNext} disabled={nextBtnDisabled} aria-label="Наступне фото">
          <ArrowRight size={20} strokeWidth={2} />
        </NavigationButton>
      </ControlsContainer>
    </GallerySection>
  );
};

export default Gallery;