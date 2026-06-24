import { z } from "zod";

export const signupSchema = z
  .object({
    first_name: z
      .string()
      .min(2, "First name must be at least 2 characters"),

    last_name: z
      .string()
      .min(2, "Last name must be at least 2 characters"),

    email: z.string().email("Invalid email address"),

    mobile_no: z
      .string()
      .min(10, "Mobile number must be 10 digits")
      .max(10, "Mobile number must be 10 digits")
      .regex(/^\d+$/, "Only numbers are allowed"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

export type SignupFormData = z.infer<typeof signupSchema>;

