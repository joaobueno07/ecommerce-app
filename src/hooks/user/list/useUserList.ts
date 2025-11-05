import { IUser } from "@/@Types/user/IUser";
import { getUser } from "@/utils/users/getUser";
import useSWR from "swr";

export function useUserList() {
    const { data, mutate, isValidating, isLoading, error } = useSWR<IUser[]>("/api/users", getUser);

    return {
        users: data,
        mutate,
        isValidating, 
        isLoading,
        error
    };
}