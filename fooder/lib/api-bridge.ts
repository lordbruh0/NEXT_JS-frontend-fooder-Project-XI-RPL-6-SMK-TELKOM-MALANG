import axios, { AxiosError } from "axios";
import { BASE_API_URL } from "@/global";
import { url } from "inspector";
import { stat } from "fs";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

export const get = async (url: string, token: string) => {
  try {
    let headers: any = {
      Authorization: `Bearer ${token}` || "",
    };
    let result = await axiosInstance.get(url, {
      headers,
    });

    return {
      status: true,
      data: result.data,
    };
  } catch (error) {
    const err = error as AxiosError<{ message: string; code: number }>;
    if (err.response) {
      console.log(err.response.data);
      return {
        status: false,
        data: `${err.code}: something wrong`,
      };
    }
    console.log(err.response);
    return {
      status: false,
      data: `Something were wrong ${error}`,
    };
  }
};
