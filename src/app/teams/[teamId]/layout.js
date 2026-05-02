import { getBaseUrl } from "@/lib/utils";

// Metadata
export async function generateMetadata({ params }) {
	const teamId = (await params).teamId;
	const baseUrl = getBaseUrl().origin;

	const res = await fetch(`${baseUrl}/api/teams/${teamId}?summary_only=true`);
	const teamData = await res.json();

	const title = teamData?.title ?? "";
	const description = teamData?.introduction ?? "";
	const url = `${baseUrl}/teams/${teamId}`;

	return {
		title,
		description,
		openGraph: {
			title: `${title} | 歷屆作品`,
			description,
			url,
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | 歷屆作品`,
			description,
		},
	};
}



export default function TeamLayout({ children }) {
	return children;
}