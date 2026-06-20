import { db } from "../../../../lib/db";
import { user } from "../../../../auth-schema";
import { auth } from "../../../../lib/auth";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";

export async function GET() {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const currentUser = await db.query.user.findFirst({
            where: eq(user.id, session.user.id),
        });

        let address = {
            firstName: "",
            companyName: "",
            streetAddress: "",
            apartment: "",
            city: "",
            phone: "",
            email: currentUser?.email || "",
        };

        if (currentUser?.address) {
            try {
                address = {
                    ...address,
                    ...JSON.parse(currentUser.address),
                };
            } catch {
                address.streetAddress = currentUser.address;
            }
        }

        return Response.json({ address });
    } catch (error) {
        console.log("GET_ADDRESS_ERROR:", error);

        return Response.json(
            { error: "Failed to get address" },
            { status: 500 }
        );
    }
}

export async function PATCH(req) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();

        const addressData = {
            firstName: body.firstName || "",
            companyName: body.companyName || "",
            streetAddress: body.streetAddress || "",
            apartment: body.apartment || "",
            city: body.city || "",
            phone: body.phone || "",
            email: body.email || "",
        };

        await db
            .update(user)
            .set({
                address: JSON.stringify(addressData),
                updatedAt: new Date(),
            })
            .where(eq(user.id, session.user.id));

        return Response.json({
            success: true,
            address: addressData,
        });
    } catch (error) {
        console.log("SAVE_ADDRESS_ERROR:", error);

        return Response.json(
            { error: "Failed to save address" },
            { status: 500 }
        );
    }
}