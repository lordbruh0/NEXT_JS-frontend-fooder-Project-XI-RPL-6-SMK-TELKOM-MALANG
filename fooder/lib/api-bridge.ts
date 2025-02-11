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

export const post = async (url: string, data: string | FormData, token: string) => {
  try {
    const typed: string = (typeof data == 'string') ?
    "application/json" : "multipart/form-data"
    let headers: any = {
      "Authorization": `Bearer ${token}` || '',
      "Content-Type": typed
    }
    let result = await axiosInstance.post(url, data, {
      headers
    })

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

//npm install --save-dev @types/axios