
import { RegistrationData } from "./interface";

export const pageFieldGroups: Array<(keyof RegistrationData)[]> = [
    ["username"],
    ["email"],
    ["password"],
  ];