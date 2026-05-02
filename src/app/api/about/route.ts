import { ensureError } from "@/lib/fetch/response";

// Database
import { db } from "@/lib/db/drizzle";



export async function GET() {
	try {
		const aboutData = await db.query.abouts.findMany({
			orderBy: (abouts, { desc }) => desc(abouts.year),
			columns: {
				year: true,
				summary: true,
			},
		});

		return Response.json(aboutData, { status: 200 });
	} catch (err) {
		const error = ensureError(err);
		const { message, status } = error;
		console.error("ERR::ABOUTS::GET:", message);

		return Response.json({
			title: `Failed to read abouts`,
			detail: message,
			status,
		}, { status });
	}
}