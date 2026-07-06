import path from 'path';
import * as dotenv from 'dotenv';

// Determine which env file to load. CI can set ENV_FILE or ENV_NAME (staging/prod).
const envFile = process.env.ENV_FILE || (process.env.ENV_NAME === 'prod' ? '.env.production' : process.env.ENV_NAME === 'staging' ? '.env.staging' : '.env.local');
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

// exports base URL for tests (can be overridden by CI via BASE_URL env var)
export const BASE_URL = process.env.BASE_URL || 'https://www.pluralsight.com';
