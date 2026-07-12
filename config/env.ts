import * as dotenv from 'dotenv';

dotenv.config();

const requiredEnvVariables = [
  'BASE_URL',
  'USERNAME',
  'PASSWORD',
];

requiredEnvVariables.forEach(envVariable => {
  if (!process.env[envVariable]) {
    throw new Error(
      `Environment variable "${envVariable}" is missing.`
    );
  }
});

export const env = Object.freeze({
  baseUrl: process.env.BASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});