import { IUserLogin } from "@/@Types/user/IUserLogin";

export async function userLogin(user: IUserLogin) {
    const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(user)
    });

    return response.json();
}