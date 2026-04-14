"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { setLocaleCookie } from "@/app/actions";
import { type Locale, locales, localesDisplay } from "@/i18n";
import { LocaleSelector } from "./LocaleSelector.css";
import { Bar, Content, Left, Logo, Right, PrimaryButton, LangButton } from "./TopBar.css";

import { useRouter } from "next/navigation";

const TopBar = () => {
    const locale = useLocale() as Locale;
    const [selected, setSelected] = useState<Locale>(locale);
    const [localeActive, setLocaleActive] = useState<boolean>(false);
    const t = useTranslations("TopBar");

    const onChange = async (locale: Locale) => {
        setLocaleActive(false);
        setSelected(locale);
        setLocaleCookie(locale);
    };

    const router = useRouter();

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState({}, "", "/");
    };

    return (
        <Content>
            <Bar>
                <Left>
                    <Logo href="/" onClick={scrollToTop} aria-label={t('home_aria')}>
                        <Image 
                            src="/logo.png" 
                            width={65} 
                            height={48} 
                            alt={t('logo_alt')} 
                            priority 
                            style={{ objectFit: 'contain' }} 
                        />
                    </Logo>
                    <ul>
                        <li>
                            <Link href="#about">{t('about')}</Link>
                        </li>
                        <li>
                            <Link href="#loyalty">{t('loyalty')}</Link>
                        </li>
                        <li>
                            <Link href="#map">{t('map')}</Link>
                        </li>
                        <li>
                            <Link href="#news">{t('news')}</Link>
                        </li>
                        <li>
                            <a href="https://shop.webshining.space/" target="_blank" rel="noopener noreferrer">
                                {t('shop')}
                            </a>
                        </li>
                    </ul>
                </Left>
                <Right>
                    <PrimaryButton 
                        href="https://shop.webshining.space/auth?state=%2Fprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('become_traveler')}
                    </PrimaryButton>

                    <LangButton
                        type="button"
                        aria-label={t('change_locale')}
                        onClick={() => setLocaleActive(!localeActive)}
                    >
                        {localesDisplay[selected][0]}
                        {localeActive ? (
                            <ChevronUp size={16} strokeWidth={2} />
                        ) : (
                            <ChevronDown size={16} strokeWidth={2} />
                        )}
                    </LangButton>
                    
                    <LocaleSelector $active={localeActive}>
                        {locales.map((l) => (
                            <li key={l}>
                                <button type="button" onClick={() => onChange(l)}>
                                    {localesDisplay[l][1]}
                                </button>
                            </li>
                        ))}
                    </LocaleSelector>
                </Right>
            </Bar>
        </Content>
    );
};

export default TopBar;