import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";
import { db } from "./db";
import * as authSchema from "../auth-schema";
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
    schema:authSchema,
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
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
      sendVerificationOnSignUp: true,
      overrideDefaultEmailVerification: true,

      async sendVerificationOTP({ email, otp, type }) {
        console.log("OTP FUNCTION CALLED:", email, otp, type);

        const info = await transporter.sendMail({
          from: `"Exclusive" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: "Verify your email",
          html: `<h2>Your OTP is: ${otp}</h2>`,
        });

        console.log("MAIL SENT:", info.messageId);
      },
    }),
  ],

  trustedOrigins: ["http://localhost:3000",
    "https://ecommerce-smoky-chi-57.vercel.app",
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});