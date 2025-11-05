import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import  Jwt  from "jsonwebtoken";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
        const passwordValid = await bcrypt.compare(password, user.password);

        if (passwordValid) {
            const tokenJWT = Jwt.sign({email, name: user.name},
                process.env.SECRET_JWT_KEY!, {expiresIn: "7d"});

            const response = NextResponse.json({success: true, user, token: tokenJWT});

            response.cookies.set({ 
                name: "login_token",
                value: tokenJWT,
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });

            return response;
        }

        return NextResponse.json({success: false, message: "incorrect password!"});
    }

    return NextResponse.json({success: false, message: "User does not exist!"});
}