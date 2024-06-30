import winston, { format, createLogger } from "winston";

export const logger = createLogger({
    level: 'debug',
    format: format.json(),
    transports: [
    new winston.transports.Console({})
    ],
})