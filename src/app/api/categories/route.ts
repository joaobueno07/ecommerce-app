import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(): Promise<NextResponse> {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.json();

        const newCategory = await prisma.category.create({
            data: {
                name: body.name,
                slug: slugify(body.slug)
            }
        });

        return NextResponse.json({success: true, category: newCategory});
    } catch (error: unknown) {
        return NextResponse.json({success: false, error});
    }
}