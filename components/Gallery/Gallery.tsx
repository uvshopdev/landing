"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
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

const Gallery = () => {
  const t = useTranslations("Gallery");
  
  const slides = [
    { id: 1, src: "/gallery-1.png", alt: t('alt_1') },
    { id: 2, src: "/gallery-2.png", alt: t('alt_2') },
    { id: 3, src: "/gallery-3.png", alt: t('alt_3') },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

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
        <GalleryTitle>{t('title')}</GalleryTitle>
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
        <NavigationButton onClick={scrollPrev} disabled={prevBtnDisabled} aria-label={t('prev_label')}>
          <ArrowLeft size={20} strokeWidth={2} />
        </NavigationButton>

        <DotsContainer>
          {slides.map((_, index) => (
            <DotButton
              key={index}
              $active={index === selectedIndex}
              onClick={() => scrollTo(index)}
              aria-label={t('dot_label', { index: index + 1 })}
            />
          ))}
        </DotsContainer>

        <NavigationButton onClick={scrollNext} disabled={nextBtnDisabled} aria-label={t('next_label')}>
          <ArrowRight size={20} strokeWidth={2} />
        </NavigationButton>
      </ControlsContainer>
    </GallerySection>
  );
};

export default Gallery;