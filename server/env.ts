// Using zod to parse env variables once, so it gives intellisense thorughout the app
import { z } from 'zod';

const envVariables = z.object({
  NODE_ENV: z.string(),

  PORT: z.number(),

  MONGO_URI: z.string(),

  REFRESH_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_EXPIRY: z.string(),

  ACCESS_TOKEN_SECRET: z.string(),
  ACCESS_TOKEN_EXPIRY: z.string(),

  SMTP_HOST: z.string(),
  SMTP_MAIL: z.string(),
  SMTP_PASS: z.string(),
  SMTP_FROM_EMAIL: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
