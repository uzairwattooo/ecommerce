import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";
import { Resend } from "resend";
import { db, schema } from "./db";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

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
        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: email,
          subject: "Your Login OTP",
          html: `
      <h2>Your OTP is: ${otp}</h2>
      <p>This OTP will expire in 5 minutes.</p>
    `,
        });
      }
    }),
  ],

  trustedOrigins: ["http://localhost:3000",
    "https://ecommerce-smoky-chi-57.vercel.app",
  ],

});