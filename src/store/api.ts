import axios from "axios";
import {User, UserResponse, UserSubmit} from "@/store/models";

export const API = axios.create({
    baseURL: "https://conduit.productionready.io/api"
});

export function setJWT(jwt: string) {
    API.defaults.headers.common.Authorization = `Token ${jwt}`;
}

export function createJWT() {
    delete API.defaults.headers.common.Authorization;
}

export async function loginUser(user: UserSubmit): Promise<UserResponse> {
    const res = await API.post("/users/login", {user});
    return res.data as UserResponse;
}
