import { db } from "../../../lib/db";
import { siteSettings } from "../../../db/schema";

export async function GET() {
    try {
        const setting = await db.select().from(siteSettings);

        return Response.json(setting[0]);
    } catch (error) {
        console.log(error);

        return Response.json(
            { error: "Failed to fetch settings" },
            { status: 500 }
        );
    }
}