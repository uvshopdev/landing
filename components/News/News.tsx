"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Clock, Calendar, Eye, Facebook, Send, MessageCircle } from "lucide-react";
import { newsData, NewsItem } from "../../data/news"; 
import {
  NewsSection, NewsHeader, NewsTitle, SeeAllBtn, NewsGrid, NewsCard,
  CardImage, CardTitle, CardDesc, CardFooter, DateBadge, ReadMoreBtn,
  ModalOverlay, ModalContent, CloseModal, LeftColumn, RightColumn, 
  ColumnHeader, ScrollableArea, MetaRow, MetaBadge, ShareIcons, 
  FullImage, FullText
} from "./News.css";

const News = () => {
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
        <NewsTitle>Новини</NewsTitle>
        <SeeAllBtn onClick={() => setIsAllNewsOpen(true)}>
          Переглянути все <ChevronRight size={16} />
        </SeeAllBtn>
      </NewsHeader>

      <NewsGrid>
        {newsData.slice(0, 4).map((item) => (
          <NewsCard key={item.id}>
            <CardImage $src={item.image || ""} />
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.shortDesc}</CardDesc>
            <CardFooter>
              <DateBadge>{item.date}</DateBadge>
              <ReadMoreBtn onClick={() => setSelectedNews(item)}>
                Читати далі <span><ChevronRight size={18} /></span>
              </ReadMoreBtn>
            </CardFooter>
          </NewsCard>
        ))}
      </NewsGrid>

      {/* МОДАЛКА: ДЕТАЛЬНА НОВИНА */}
      {selectedNews && (
        <ModalOverlay onClick={() => setSelectedNews(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseModal onClick={() => setSelectedNews(null)}>&#10005;</CloseModal>
            
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
                    <Facebook size={24} style={{ cursor: 'pointer' }} />
                    <Send size={24} style={{ cursor: 'pointer' }} />
                    <MessageCircle size={24} style={{ cursor: 'pointer' }} />
                  </ShareIcons>
                </MetaRow>
              </ColumnHeader>
              <ScrollableArea>
                <FullImage src={selectedNews.image || ""} alt={selectedNews.title} />
                <FullText>{selectedNews.fullText}</FullText>
              </ScrollableArea>
            </LeftColumn>

            <RightColumn>
              <ColumnHeader>
                <NewsTitle style={{ fontSize: '28px' }}>Схожі новини</NewsTitle>
              </ColumnHeader>
              <ScrollableArea>
                {newsData.filter(n => n.id !== selectedNews.id).map(item => (
                  <NewsCard key={item.id} style={{ width: '100%', minWidth: 'auto', maxWidth: 'none' }}>
                     <CardImage $src={item.image || ""} />
                     <CardTitle>{item.title}</CardTitle>
                     <CardFooter>
                      <DateBadge>{item.date}</DateBadge>
                      <ReadMoreBtn onClick={() => setSelectedNews(item)}>
                        Читати далі <span><ChevronRight size={18} /></span>
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
            <CloseModal onClick={() => setIsAllNewsOpen(false)}>&#10005;</CloseModal>
            
            <LeftColumn style={{ width: '100%', flex: 'none', height: '100%' }}>
              <ColumnHeader>
                <NewsTitle style={{ fontSize: '34px' }}>Всі новини</NewsTitle>
              </ColumnHeader>
              <ScrollableArea>
                <NewsGrid>
                  {newsData.map((item) => (
                    <NewsCard key={item.id}>
                      <CardImage $src={item.image || ""} />
                      <CardTitle>{item.title}</CardTitle>
                      <CardDesc>{item.shortDesc}</CardDesc>
                      <CardFooter>
                        <DateBadge>{item.date}</DateBadge>
                        <ReadMoreBtn onClick={() => { setSelectedNews(item); setIsAllNewsOpen(false); }}>
                          Читати далі <span><ChevronRight size={18} /></span>
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