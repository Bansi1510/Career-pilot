import type { CreateUserPayload } from "@/types/auth.types";
import api from "./baseUri";

export const createUserAPI = async (payload: CreateUserPayload) => {
  const response = await api.post("/auth/signup", payload);
  return response.data;
};
