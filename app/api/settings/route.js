import { db } from "../../../lib/db";
import { siteSettings } from "../../../db/schema";

export async function GET() {
    const settings = await db.select().from(siteSettings);

    return Response.json(settings[0]);
}