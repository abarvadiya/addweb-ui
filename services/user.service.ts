import axios, { AxiosResponse } from "axios";

export const signUpRequest = (data: any) =>
  axios.post<null, AxiosResponse<[]>>(
    `${process.env.NEXT_PUBLIC_API_END_POINT}/user/signup`,
    data
  );

export const signInRequest = (data: any) =>
  axios.post<null, AxiosResponse<[]>>(
    `${process.env.NEXT_PUBLIC_API_END_POINT}/user/signin`,
    data
  );
