"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronRight, Clock, Calendar, Eye, Facebook, Send, Instagram, Music2 } from "lucide-react";
import { useNews, NewsItem } from "../../data/news"; 
import {
  NewsSection, NewsHeader, NewsTitle, SeeAllBtn, NewsGrid, NewsCard,
  CardImage, CardTitle, CardDesc, CardFooter, DateBadge, ReadMoreBtn,
  ModalOverlay, ModalContent, CloseModal, LeftColumn, RightColumn, 
  ColumnHeader, ScrollableArea, MetaRow, MetaBadge, ShareIcons, 
  FullImage, FullText
} from "./News.css";

// Словник для співставлення ID новини та відповідного фото з папки public/news_photo/
const newsImages: Record<number, string> = {
  1: "/news_photo/asian-products-restock.png",
  2: "/news_photo/matcha-master-class.png",
  3: "/news_photo/oriental-spices.png",
  4: "/news_photo/autumn-update.png",
  5: "/news_photo/exotic-fruit-delivery.png",
  6: "/news_photo/olive-oil-tasting.png",
  7: "/news_photo/japanese-sweets-mochi-pocky.png",
  8: "/news_photo/seafood-discount.png",
  9: "/news_photo/soy-sauce-guide.png",
  10: "/news_photo/maple-syrup.png",
  11: "/news_photo/sushi-rice-tips.png",
  12: "/news_photo/bbq-kits.png",
  13: "/news_photo/coffee-roast.png",
  14: "/news_photo/easter-schedule.png",
};

const News = () => {
  const t = useTranslations("News");
  const newsData = useNews();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isAllNewsOpen, setIsAllNewsOpen] = useState(false);

  useEffect(() => {
    if (selectedNews || isAllNewsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedNews, isAllNewsOpen]);

  return (
    <NewsSection id="news">
      <NewsHeader>
        <NewsTitle>{t("title")}</NewsTitle>
        <SeeAllBtn onClick={() => setIsAllNewsOpen(true)}>
          {t("see_all")} <ChevronRight size={16} />
        </SeeAllBtn>
      </NewsHeader>

      <NewsGrid>
        {newsData.slice(0, 4).map((item) => (
          <NewsCard key={item.id}>
            <CardImage $src={newsImages[item.id] || item.image || ""} />
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.shortDesc}</CardDesc>
            <CardFooter>
              <DateBadge>{item.date}</DateBadge>
              <ReadMoreBtn onClick={() => setSelectedNews(item)}>
                {t("read_more")} <span><ChevronRight size={18} /></span>
              </ReadMoreBtn>
            </CardFooter>
          </NewsCard>
        ))}
      </NewsGrid>

      {/* МОДАЛКА: ДЕТАЛЬНА НОВИНА */}
      {selectedNews && (
        <ModalOverlay onClick={() => setSelectedNews(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseModal onClick={() => setSelectedNews(null)} aria-label={t("close_modal")}>&#10005;</CloseModal>
            
            <LeftColumn>
              <ColumnHeader>
                <NewsTitle style={{ fontSize: '34px' }}>{selectedNews.title}</NewsTitle>
                <MetaRow>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <MetaBadge><Clock size={20} /> {selectedNews.time}</MetaBadge>
                    <MetaBadge><Calendar size={20} /> {selectedNews.date}</MetaBadge>
                    <MetaBadge><Eye size={20} /> {selectedNews.views}</MetaBadge>
                  </div>
                  <ShareIcons>
                    <a href="https://www.facebook.com/?locale=uk_UA" target="_blank" rel="noopener noreferrer" aria-label={t("share_facebook")} style={{ color: 'inherit', display: 'flex' }}>
                      <Facebook size={24} style={{ cursor: 'pointer' }} />
                    </a>
                    <a href="https://www.instagram.com/?hl=uk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'inherit', display: 'flex' }}>
                      <Instagram size={24} style={{ cursor: 'pointer' }} />
                    </a>
                    <a href="https://www.tiktok.com/?lang=uk-UA" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: 'inherit', display: 'flex' }}>
                      <Music2 size={24} style={{ cursor: 'pointer' }} />
                    </a>
                    <a href="https://telegram.org/?setln=uk" target="_blank" rel="noopener noreferrer" aria-label={t("share_telegram")} style={{ color: 'inherit', display: 'flex' }}>
                      <Send size={24} style={{ cursor: 'pointer' }} />
                    </a>
                  </ShareIcons>
                </MetaRow>
              </ColumnHeader>
              <ScrollableArea>
                <FullImage src={newsImages[selectedNews.id] || selectedNews.image || ""} alt={selectedNews.title} />
                <FullText style={{ whiteSpace: 'pre-wrap' }}>{selectedNews.fullText}</FullText>
              </ScrollableArea>
            </LeftColumn>

            <RightColumn>
              <ColumnHeader>
                <NewsTitle style={{ fontSize: '28px' }}>{t("similar_news")}</NewsTitle>
              </ColumnHeader>
              <ScrollableArea>
                {newsData.filter(n => n.id !== selectedNews.id).map(item => (
                  <NewsCard key={item.id} style={{ width: '100%', minWidth: 'auto', maxWidth: 'none' }}>
                     <CardImage $src={newsImages[item.id] || item.image || ""} />
                     <CardTitle>{item.title}</CardTitle>
                     <CardFooter>
                      <DateBadge>{item.date}</DateBadge>
                      <ReadMoreBtn onClick={() => setSelectedNews(item)}>
                        {t("read_more")} <span><ChevronRight size={18} /></span>
                      </ReadMoreBtn>
                    </CardFooter>
                  </NewsCard>
                ))}
              </ScrollableArea>
            </RightColumn>

          </ModalContent>
        </ModalOverlay>
      )}

      {/* МОДАЛКА: ВСІ НОВИНИ */}
      {isAllNewsOpen && (
        <ModalOverlay onClick={() => setIsAllNewsOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseModal onClick={() => setIsAllNewsOpen(false)} aria-label={t("close_modal")}>&#10005;</CloseModal>
            
            <LeftColumn style={{ width: '100%', flex: 'none', height: '100%' }}>
              <ColumnHeader>
                <NewsTitle style={{ fontSize: '34px' }}>{t("all_news")}</NewsTitle>
              </ColumnHeader>
              <ScrollableArea>
                <NewsGrid>
                  {newsData.map((item) => (
                    <NewsCard key={item.id}>
                      <CardImage $src={newsImages[item.id] || item.image || ""} />
                      <CardTitle>{item.title}</CardTitle>
                      <CardDesc>{item.shortDesc}</CardDesc>
                      <CardFooter>
                        <DateBadge>{item.date}</DateBadge>
                        <ReadMoreBtn onClick={() => { setSelectedNews(item); setIsAllNewsOpen(false); }}>
                          {t("read_more")} <span><ChevronRight size={18} /></span>
                        </ReadMoreBtn>
                      </CardFooter>
                    </NewsCard>
                  ))}
                </NewsGrid>
              </ScrollableArea>
            </LeftColumn>

          </ModalContent>
        </ModalOverlay>
      )}
    </NewsSection>
  );
};

export default News;