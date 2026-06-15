import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";
import { Resend } from "resend";
import { db, schema } from "./db";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false,
      },
    },
  },
  rateLimit: {
    enabled: true,
    window: 60 * 10,
    max: 3,
  },
  plugins: [
    emailOTP({
      expiresIn: 300,
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject: "Your login OTP",
          html: `<h2>Your OTP is ${otp}</h2>`,
        });
      },
    }),
  ],

  trustedOrigins: ["http://localhost:3000",
    "https://ecommerce-smoky-chi-57.vercel.app",
  ],

});