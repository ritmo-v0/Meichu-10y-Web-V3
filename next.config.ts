// Types & Interfaces
import type { NextConfig } from "next";

// Config
export default {
	compiler: {
		removeConsole: process.env.NODE_ENV === "production"
			? { exclude: ["error"] }
			: false,
	},
	devIndicators: false,
	images: {
		remotePatterns: [
			new URL("https://mch.img.ritmo.dev/**"),
		],
	},
	typedRoutes: true,
} satisfies NextConfig;