import {Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../eror/response-eror";

export const erorMiddleware = async (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    if(error instanceof ZodError){
        res.status(400).json({
            errors: `Validation Error : ${JSON.stringify(error)}`
        })
    } else if (error instanceof ResponseError){
        res.status(error.status).json({
            erros: error.message
        });
    } else {
        res.status(500).json({
            errors: error.message
        });
    }
}