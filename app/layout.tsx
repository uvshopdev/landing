import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Montserrat_Alternates, Gabriela } from "next/font/google";

import Providers from "@/components/Providers";
import ServerProviders from "@/components/ServerProviders";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import { Main } from "./layout.css";

export const metadata: Metadata = {
    title: "Shop",
};

const montserrat = Montserrat_Alternates({
    weight: ["400", "500", "600", "700"],
    subsets: ["cyrillic", "latin"],
    variable: "--font-montserrat",
});

const gabriela = Gabriela({
    weight: ["400"],
    subsets: ["cyrillic", "latin"],
    variable: "--font-gabriela",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <body className={`${montserrat.className} ${montserrat.variable} ${gabriela.variable}`}>
                <ServerProviders>
                    <StyledComponentsRegistry>
                        <Providers>
                            <Main>
                                <TopBar />
                                {children}
                                <Footer />
                            </Main>
                        </Providers>
                    </StyledComponentsRegistry>
                </ServerProviders>
            </body>
        </html>
    );
}