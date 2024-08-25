import { object, TypeOf } from "zod";
import { emailValidator, passwordValidator, usernameValidator } from "./common.schema";

export const signUpSchema = object({
  name: usernameValidator,
  email: emailValidator,
});

export const passwordSchema = object({
  password: passwordValidator,
  confirmPassword: passwordValidator,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const signInSchema = object({
  email: emailValidator,
  password: passwordValidator,
});

export type SignUpInput = TypeOf<typeof signUpSchema>;
export type PasswordInput = TypeOf<typeof passwordSchema>;
export type SignInInput = TypeOf<typeof signInSchema>;