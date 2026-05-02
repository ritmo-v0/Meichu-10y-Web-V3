// shadcn
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";



// # Metadata Functions
export function getBaseUrl() {
	const PRODUCTION_URL = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
	const baseUrl = PRODUCTION_URL
		? `https://${PRODUCTION_URL}`
		: `https://localhost:${process.env.PORT || 2023}`;
	return new URL(baseUrl);
}

// # Utility Functions
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}