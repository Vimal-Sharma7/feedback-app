import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast two characters")
  .max(20, "username must be less than 20 characters")
  .regex(/^[a-zA-Z0-9_]+s/, "username must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z.string().min(6, { message: "Password must be min 6 character" }),
});
