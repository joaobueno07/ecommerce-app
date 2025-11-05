import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    try {
        const id = parseInt(params.id);
        const product = await prisma.product.findUnique({ where: {id} });
        return NextResponse.json(product);
    } catch (e: unknown) {
        return NextResponse.json({success: false, error: e});
    }
}