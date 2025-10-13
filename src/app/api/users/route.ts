import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.json();

        const newUser = await prisma.user.create({
            data: {
                name: body.username,
                email: body.email,
                password: await bcrypt.hash(body.password, 10)
            }
        });

        return NextResponse.json({ success: true, data: newUser });
    } catch (error: unknown) {
        return NextResponse.json({success: false, error});
    }
}