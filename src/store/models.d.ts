export interface Article {
    title: string;
    slug: string;
    body: string;
    created_at: string;
    updated_at: string;
}

export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: null;
}

export interface Profile {
    username: string;
    bio?: string;
    image?: string;
    following: boolean;
}


export interface UserSubmit {
    email: string;
    password: string;
}


export interface UserResponse {
    user: User
}
