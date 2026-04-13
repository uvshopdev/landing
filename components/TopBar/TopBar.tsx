"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useExtracted, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { setLocaleCookie } from "@/app/actions";
import { type Locale, locales, localesDisplay } from "@/i18n";
import { LocaleSelector } from "./LocaleSelector.css";
import { Bar, Content, Left, Logo, Right } from "./TopBar.css";

const TopBar = () => {
	const t = useExtracted("navigation");

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
					<Logo href="/" aria-label={t("Shop")}>
						<Image src="/logo.png" width={40} height={40} alt="" priority />
					</Logo>
					<ul>
						<li>
							<Link href="/">{t("About us")}</Link>
						</li>
						<li>
							<Link href="/">{t("Loyalty program")}</Link>
						</li>
						<li>
							<Link href="/">{t("Hall map")}</Link>
						</li>
						<li>
							<Link href="/">{t("News")}</Link>
						</li>
						<li>
							<Link href="/">{t("Shop")}</Link>
						</li>
					</ul>
				</Left>
				<Right>
					<button
						type="button"
						aria-label={t("Change locale")}
						onClick={() => setLocaleActive(!localeActive)}
					>
						{localesDisplay[selected][0]}
						{localeActive ? (
							<ChevronUp size={20} strokeWidth={1} absoluteStrokeWidth />
						) : (
							<ChevronDown size={20} strokeWidth={1} absoluteStrokeWidth />
						)}
					</button>
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
