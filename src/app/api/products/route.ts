import prisma from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    const body = await request.json();
    
    try {
        const newProduct = await prisma.product.create({
            data: {
                title: body.title,
                description: body.description,
                price: new Prisma.Decimal(body.price),
                quantityStock: body.quantityStock,
                categoryId: body.categoryId,
                isActivated: body.isActivated,
            },
        });

        return NextResponse.json({ sucess: true, data: newProduct });
    } catch (error) {
        return NextResponse.json({ sucess: false, error });
    }
}