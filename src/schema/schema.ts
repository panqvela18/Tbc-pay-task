import { z } from "zod";

export const registrationSchema = z
  .object({
    username: z
      .string()
      .min(1, "მომხმარებლის სახელი სავალდებულოა")
      .max(30, "მომხმარებლის სახელი არ უნდა აღემატებოდეს 30 სიმბოლოს"),
    email: z
      .string()
      .min(1,"ელ-ფოსტა სავალდებულოა")
      .email("არასწორია ელ-ფოსტის ფორმატი"),
    password: z
      .string()
      .min(8, "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან")
      .max(20, "პაროლი არ უნდა აღემატებოდეს 20 სიმბოლოს"),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "პაროლები არ ემთხვევა",
      });
    }
  });
