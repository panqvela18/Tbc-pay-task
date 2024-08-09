
import { z } from "zod";
import { RegistrationData } from "./interface";



// reg schema
export const registrationSchema = z.object({
    username: z.string().min(2, "მომხმარებლის შეყვანა აუცილებელია").max(20,"მომხმარებლის სახელი არ უნდა აღემატებოდეს 20 სიმბოლოს"),
    email: z.string().email("არასწორია ელ-ფოსტის ფორატი"),
    password: z.string().min(8, "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან"),
});



export const pageFieldGroups: Array<(keyof RegistrationData)[]> = [
    ["username"],
    ["email"],
    ["password"],
  ];