"use client";

import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: false,
		},
	},
});
declare global {
	interface Window {
		__TANSTACK_QUERY_CLIENT__: import("@tanstack/react-query").QueryClient;
	}
}

export default function Providers({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		window.__TANSTACK_QUERY_CLIENT__ = queryClient;
	}, []);

	const [localStoragePersister] = useState(() =>
		createAsyncStoragePersister({
			storage: typeof window !== "undefined" ? window.localStorage : undefined,
		}),
	);

	return (
		<PersistQueryClientProvider client={queryClient} persistOptions={{ persister: localStoragePersister }}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
			<ReactQueryDevtools />
		</PersistQueryClientProvider>
	);
}
