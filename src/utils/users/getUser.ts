import { IUser } from "@/@Types/user/IUser";

export async function getUser(url: string): Promise<IUser[]> {
    const response = await fetch(url, {
        method: "GET"
    });

    return response.json();
}