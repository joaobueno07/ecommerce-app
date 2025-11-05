import { IUser } from "@/@Types/user/IUser";

export async  function createUser(url: string, { arg }: { arg: IUser }) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(arg)
    });

    return response.json();
}