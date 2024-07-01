import { PrismaClient } from "@prisma/client";
import { CreateUserRequest, UserResponse, toUserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import { ResponseError } from "../eror/response-eror";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class UserService {
    static async register(request: CreateUserRequest): Promise<UserResponse> {
        const registerRequest = Validation.validate(UserValidation.REGISTER, request);

        const totalUserWithSameUsername = await prisma.user.count({
            where: {
                Username: registerRequest.username as string
            }
        });

        if (totalUserWithSameUsername > 0) {
            throw new ResponseError(400, "Username already exists");
        }

        registerRequest.password = await bcrypt.hash(registerRequest.password as string, 10);

        const user = await prisma.user.create({
            data: {
                Username: registerRequest.username as string,
                Password: registerRequest.password as string,
                Name: registerRequest.name as string,
            }            
            });
     
        return toUserResponse(user);
    
    }
}
    
