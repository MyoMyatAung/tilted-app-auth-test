import { string } from "zod";

export const usernameValidator = string({ required_error: "Username is required" })
  .min(6, "Username should have at least 6 characters")
  .max(20, "Username should be maximum 20 characters");

export const emailValidator = string({ required_error: "Email is required" })
  .min(1, { message: "Email is required" })
  .email("Invalid E-mail format");

export const passwordValidator = string({ required_error: "Password is required" })
  .min(1, { message: "Password is required" })
  .min(6, "Password must be at least 6 characters long")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character");