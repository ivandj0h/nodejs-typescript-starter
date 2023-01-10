import * as dotenv from 'dotenv';
dotenv.config();

const userName: string = 'John Doe';
const port: string = process.env.APP_PORT;
const server: string = process.env.APP_SERVER;

console.log(`This ${userName} running on ${server}:${port}`);