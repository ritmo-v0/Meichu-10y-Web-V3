import { getBaseUrl } from "@/lib/utils";

// Metadata
export async function generateMetadata({ params }) {
	const year = (await params).year;
	const baseUrl = getBaseUrl().origin;

	const res = await fetch(`${baseUrl}/api/about/${year}?summary_only=true`);
	const aboutData = await res.json();

	const title = `${year}`;
	const description = aboutData?.summary ?? "";
	const url = `${baseUrl}/about/${year}`;

	return {
		title,
		description,
		openGraph: {
			title: `關於 ${title} 梅竹黑客松`,
			description,
			url,
		},
		twitter: {
			card: "summary_large_image",
			title: `關於 ${title} 梅竹黑客松`,
			description,
		},
	};
}



export default function YearLayout({ children }) {
	return children;
}