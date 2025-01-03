import * as yup from "yup";

// Login

export const loginSchema = {
  request: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),
  response: yup.object({
    access_token: yup.string().required(),
  }),
};

export type LoginRequest = yup.InferType<(typeof loginSchema)["request"]>;
export type LoginResponse = yup.InferType<(typeof loginSchema)["response"]>;

// Register

export const registerSchema = {
  request: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    password_confirmation: yup.string().required(),
  }),
};

export type RegisterRequest = yup.InferType<(typeof registerSchema)["request"]>;
