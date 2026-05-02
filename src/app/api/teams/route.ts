import { ensureError } from "@/lib/fetch/response";

// Database
import { db } from "@/lib/db/drizzle";



export async function GET() {
	try {
		const teamData = await db.query.teams.findMany({
			orderBy: (teams, { desc }) => desc(teams.index),
			columns: {
				id: true,
				year: true,
				group: true,
				teamName: true,
				title: true,
				introduction: true,
				coverImgUrl: true,
			},
		});

		return Response.json(teamData, { status: 200 });
	} catch (err) {
		const error = ensureError(err);
		const { message, status } = error;
		console.error("ERR::TEAMS::GET:", message);

		return Response.json({
			title: `Failed to read teams`,
			detail: message,
			status,
		}, { status });
	}
}