import { ensureError } from "@/lib/fetch/response";

// Database
import { db } from "@/lib/db/drizzle";

// Types & Interfaces
import type { NextRequest } from "next/server";
type Context = RouteContext<"/api/about/[year]">;



export async function GET(req: NextRequest, ctx: Context) {
	const year = Number((await ctx.params).year);
	const summaryOnly = req.nextUrl.searchParams.get("summary_only") || undefined;

	try {
		if (!Number.isInteger(year)) throw new Error("Invalid year.");

		const aboutData = await db.query.abouts.findFirst({
			where: (abouts, { eq }) => eq(abouts.year, year),
			columns: summaryOnly ? {
				year: true,
				summary: true,
				bannerUrl: true,
			} : undefined,
		});

		return Response.json(aboutData, { status: 200 });
	} catch (err) {
		const error = ensureError(err);
		const { message, status } = error;
		console.error("ERR::ABOUT::GET:", message);

		return Response.json({
			title: `Failed to read about of year ${year}`,
			detail: message,
			status,
		}, { status });
	}
}