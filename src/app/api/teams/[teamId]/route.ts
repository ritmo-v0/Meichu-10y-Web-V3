import { ensureError } from "@/lib/fetch/response";

// Database
import { db } from "@/lib/db/drizzle";

// Types & Interfaces
import type { NextRequest } from "next/server";
type Context = RouteContext<"/api/teams/[teamId]">;



export async function GET(req: NextRequest, ctx: Context) {
	const teamId = (await ctx.params).teamId;
	const summaryOnly = req.nextUrl.searchParams.get("summary_only") || undefined;

	try {
		const teamData = await db.query.teams.findFirst({
			where: (teams, { eq }) => eq(teams.id, teamId),
			columns: summaryOnly ? {
				id: true,
				teamName: true,
				title: true,
				introduction: true,
				coverImgUrl: true,
			} : undefined,
		});

		return Response.json(teamData, { status: 200 });
	} catch (err) {
		const error = ensureError(err);
		const { message, status } = error;
		console.error("ERR::TEAM::GET:", message);

		return Response.json({
			title: `Failed to read team \`${teamId}\``,
			detail: message,
			status,
		}, { status });
	}
}