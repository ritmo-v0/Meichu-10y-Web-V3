import "@/app/styles/globals.scss";
import { cn, getBaseUrl } from "@/lib/utils";

// Components & UI
import Providers from "@/lib/providers";
import Navbar from "@/components/main/common/navbar";
import Footer from "@/components/main/common/footer";

// Fonts
import { Noto_Sans_TC, Space_Grotesk } from "next/font/google";
const NotoSansTC = Noto_Sans_TC({
	weight: "variable",
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-noto-sans-tc",
});
const SpaceGrotesk = Space_Grotesk({
	weight: "variable",
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

// FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Metadata
const title = "梅竹黑客松成果存放平台";
const description = "在梅竹黑客松邁向十週年之際，我們決定以一個嶄新的方式，紀念過去十年走過的足跡。透過存放往年的優秀作品，我們能夠回顧並學習，同時讓未來的參與者能夠在此找尋與迸發創意。";
const url = "/";
export const metadata = {
	metadataBase: getBaseUrl(),
	title: {
		default: title,
		template: "%s | 成果存放平台",
	},
	description,
	applicationName: title,
	category: "technology",
	// keywords: [],  // TODO: SEO keywords
	openGraph: {
		title,
		description,
		url,
		siteName: title,
		type: "website",
		locale: "zh_TW",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		site: "@ritmo_v0",
		siteId: "904003428262723584",
		creator: "@ritmo_v0",
		creatorId: "904003428262723584",
	},
	robots: {
		index: false,
		follow: false,
	}
};



export default function RootLayout({ children }) {
	return (
		<html
			lang="zh-Hant-TW"
			data-scroll-behavior="smooth"
			className={cn(
				NotoSansTC.variable,
				SpaceGrotesk.variable,
			)}
			suppressHydrationWarning
		>
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}