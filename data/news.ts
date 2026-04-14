"use client";

import { useTranslations } from "next-intl";

export interface NewsItem {
  id: number;
  title: string;
  shortDesc: string;
  fullText: string;
  date: string;
  time: string;
  views: number;
  image?: string;
}

export const useNews = (): NewsItem[] => {
  const t = useTranslations("NewsData");

  const rawNewsData: NewsItem[] = [
    {
      id: 1,
      title: t("1_title"),
      shortDesc: t("1_short"),
      fullText: t("1_full"),
      date: "01.12.2025",
      time: "16:30",
      views: 40,
    },
    {
      id: 2,
      title: t("2_title"),
      shortDesc: t("2_short"),
      fullText: t("2_full"),
      date: "07.10.2025",
      time: "12:00",
      views: 125,
    },
    {
      id: 3,
      title: t("3_title"),
      shortDesc: t("3_short"),
      fullText: t("3_full"),
      date: "10.01.2026",
      time: "09:15",
      views: 89,
    },
    {
      id: 4,
      title: t("4_title"),
      shortDesc: t("4_short"),
      fullText: t("4_full"),
      date: "15.02.2026",
      time: "14:00",
      views: 65,
    },
    {
      id: 5,
      title: t("5_title"),
      shortDesc: t("5_short"),
      fullText: t("5_full"),
      date: "20.02.2026",
      time: "10:00",
      views: 112,
    },
    {
      id: 6,
      title: t("6_title"),
      shortDesc: t("6_short"),
      fullText: t("6_full"),
      date: "25.02.2026",
      time: "15:30",
      views: 204,
    },
    {
      id: 7,
      title: t("7_title"),
      shortDesc: t("7_short"),
      fullText: t("7_full"),
      date: "02.03.2026",
      time: "11:15",
      views: 78,
    },
    {
      id: 8,
      title: t("8_title"),
      shortDesc: t("8_short"),
      fullText: t("8_full"),
      date: "05.03.2026",
      time: "09:00",
      views: 340,
    },
    {
      id: 9,
      title: t("9_title"),
      shortDesc: t("9_short"),
      fullText: t("9_full"),
      date: "12.03.2026",
      time: "13:45",
      views: 95,
    },
    {
      id: 10,
      title: t("10_title"),
      shortDesc: t("10_short"),
      fullText: t("10_full"),
      date: "18.03.2026",
      time: "10:30",
      views: 56,
    },
    {
      id: 11,
      title: t("11_title"),
      shortDesc: t("11_short"),
      fullText: t("11_full"),
      date: "22.03.2026",
      time: "17:00",
      views: 188,
    },
    {
      id: 12,
      title: t("12_title"),
      shortDesc: t("12_short"),
      fullText: t("12_full"),
      date: "28.03.2026",
      time: "11:00",
      views: 210,
    },
    {
      id: 13,
      title: t("13_title"),
      shortDesc: t("13_short"),
      fullText: t("13_full"),
      date: "04.04.2026",
      time: "08:30",
      views: 145,
    },
    {
      id: 14,
      title: t("14_title"),
      shortDesc: t("14_short"),
      fullText: t("14_full"),
      date: "10.04.2026",
      time: "19:00",
      views: 312,
    }
  ];

  const sortedNewsData = [...rawNewsData].sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('.');
    const [dayB, monthB, yearB] = b.date.split('.');
    
    const dateA = new Date(`${yearA}-${monthA}-${dayA}T${a.time}:00`).getTime();
    const dateB = new Date(`${yearB}-${monthB}-${dayB}T${b.time}:00`).getTime();
    
    return dateB - dateA;
  });

  return sortedNewsData.map((item, index) => ({
    ...item,
    image: `/slide${(index % 3) + 1}.png`
  }));
};