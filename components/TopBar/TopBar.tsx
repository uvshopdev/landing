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

const TopBar = () => {
    const locale = useLocale() as Locale;
    const [selected, setSelected] = useState<Locale>(locale);
    const [localeActive, setLocaleActive] = useState<boolean>(false);

    const onChange = async (locale: Locale) => {
        setLocaleActive(false);
        setSelected(locale);
        setLocaleCookie(locale);
    };

    return (
        <Content>
            <Bar>
                <Left>
                    <Logo href="/" aria-label="Головна сторінка">
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
                        <li><Link href="/">Про нас</Link></li>
                        <li><Link href="/">Програма лояльності</Link></li>
                        <li><Link href="/">Мапа залу</Link></li>
                        <li><Link href="/">Новини</Link></li>
                        <li><Link href="/">Магазин</Link></li>
                    </ul>
                </Left>
                <Right>
                    <PrimaryButton type="button">
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