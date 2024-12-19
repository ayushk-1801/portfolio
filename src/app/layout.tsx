import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: {
		default: "Ayush Kumar Anand",
		template: "",
	},
	description: "",
	openGraph: {
		title: "Ayush Kumar Anand",
		description: "",
		url: "",
		siteName: "Ayush Kumar Anand",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "",
		card: "summary_large_image",
	},
	verification: {
		google: "",
		yandex: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body
				className={cn(
					"min-h-screen bg-background antialiased max-w-7xl mx-auto py-12 sm:py-24 px-6",
					poppins.className,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
						<Analytics />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
