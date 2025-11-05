import { createUser } from "@/utils/users/createUser";
import useSWRMutation from "swr/mutation";

export function useCreateUser() {
    const { trigger } = useSWRMutation("/api/users", createUser);

    return {
        createTrigger: trigger
    };
}