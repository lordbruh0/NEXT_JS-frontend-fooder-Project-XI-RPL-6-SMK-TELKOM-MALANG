import axios, { AxiosError } from "axios";
import { BASE_API_URL } from "@/global";
import { url } from "inspector";
import { stat } from "fs";
import { Fence } from "lucide-react";

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
export const post = async (url: string, data: string | FormData, token: string) => {
  try {
    let headers: any = {
      "Authorization": `Bearer ${token}` || ''
    }

    // Hanya set Content-Type jika data adalah string (JSON)
    if (typeof data === 'string') {
      headers["Content-Type"] = "application/json"
    }
    // Jika FormData, biarkan browser mengatur Content-Type dan boundary

    let result = await axiosInstance.post(url, data, { headers })

    return {
      status: true,
      data: result.data
    }
  } catch (error) {
    const err = error as AxiosError<{ message: string; code: number }>;
    if (err.response) {
      console.log(err.response.data.message);
      return {
        status: false,
        message: `${err.response.data.message}`
      }
    }
    console.log(err.response);
    return {
      status: false,
      message: `Something were wrong`
    }
  }
};

export const put = async (url: string, data: string | FormData, token: string) => {
  try {
    const Type: string = (typeof data === 'string') ? "application/json" : "multipart/form-data"
    let result = await axiosInstance.put(url, data, {
      headers: {
        "Authorization": `Bearer ${token}` || '',
        "Content-Type": Type
      }
    })
    return {
      status: true,
      data: result.data
    }
  } catch (error) {
    const err = error as AxiosError<{ message: string, code: number }>
    if (err.response) {
      console.log(err.response.data.message);
      return {
        status: false,
        message: `${err.code}: something wrong`
      }
    }
    console.log(err.code);
    return {
      status: false,
      message: `Something were wrong`
    }
  }
}