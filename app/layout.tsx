import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Montserrat_Alternates } from "next/font/google";

import Providers from "@/components/Providers";
import ServerProviders from "@/components/ServerProviders";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import TopBar from "@/components/TopBar/TopBar";
import { Main } from "./layout.css";

export const metadata: Metadata = {
	title: "Shop",
};

const montserrat = Montserrat_Alternates({
	weight: ["400", "500"],
	subsets: ["cyrillic", "latin"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();

	return (
		<html lang={locale}>
			{/* <Analytics /> */}
			<body className={montserrat.className}>
				<ServerProviders>
					<StyledComponentsRegistry>
						<Providers>
							<Main>
								<TopBar />
								{children}
							</Main>
						</Providers>
					</StyledComponentsRegistry>
				</ServerProviders>
			</body>
		</html>
	);
}
