"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocale } from "next-intl"; // Тимчасово прибрано useExtracted
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
                    <Logo href="/" onClick={scrollToTop} aria-label="Головна сторінка">
						<Image 
							src="/logo.png" 
							width={65} 
							height={48} 
							alt="Мандрівна крамниця" 
							priority 
							style={{ objectFit: 'contain' }} 
						/>
					</Logo>
                    <ul>
                        <li>
                            <Link href="#about">Про нас</Link>
                        </li>
                        <li>
                            <Link href="#loyalty">Програма лояльності</Link>
                        </li>
                        <li>
                            <Link href="#map">Мапа залу</Link>
                        </li>
                        <li>
                            <Link href="#news">Новини</Link>
                        </li>
                        <li><Link href="/">Магазин</Link></li>
                    </ul>
                </Left>
                <Right>
                    <PrimaryButton 
                        href="https://shop.webshining.space/auth?state=%2Fprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Стати мандрівником
                    </PrimaryButton>

                    <LangButton
                        type="button"
                        aria-label="Змінити мову"
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