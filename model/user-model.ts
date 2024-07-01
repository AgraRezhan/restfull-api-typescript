import { User } from "@prisma/client";

export type UserResponse = {
    id:       String;
    username: String;
    name:     String;
    token?:   String;
}

export type CreateUserRequest = {
    username: String;
    name:     String;
    password: String;
}

export function toUserResponse(user: User): UserResponse{
    return{ 
        id: user.id,
        name:user.Name,
        username: user.Username
    }
}