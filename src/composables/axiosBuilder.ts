import axios, { AxiosError, type AxiosResponse } from "axios";
import uuid from "react-native-uuid";
import type { ErrorBackend } from "@/types/error.type";

export default function axiosBuilder() {
  /**
   * axios setup to use mock service
   */

  const baseURL = (process.env.EXPO_PUBLIC_API_BASE_URL ?? "")
    .replace(/"/g, "")
    .trim();

  if (!baseURL) {
    console.error("EXPO_PUBLIC_API_BASE_URL is not defined");
  }

  const api = axios.create({
    baseURL: baseURL,
    method: "get",
  });

  /**
   * Se produit juste avant l'envoi de la requête
   */
  api.interceptors.request.use((config) => {
    const requestId = config.headers["x-request-id"] ?? uuid.v4();

    if (!config.headers["x-request-id"]) {
      config.headers["x-request-id"] = requestId;
      config.headers["ngrok-skip-browser-warning"] = requestId;
    }

    if (config.headers && config.headers["Content-Type"]) {
      delete config.headers["Content-Type"];
    }

    console.log(`[${requestId}] api-request send -->`, config);

    return config;
  });

  /**
   *  Se produit juste après que le serveur distant a repondu
   */
  api.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      const response = error.response as AxiosResponse;
      const errorParticularity = response.data as ErrorBackend;

      const requestId = response.config.headers["X-Request-Id"];

      console.log(`[${requestId}] api-response-error  -->`, response);
      console.log(
        `[${requestId}] api-response-error  -->`,
        errorParticularity.details,
      );

      throw error.response;

      //   return error;
    },
  );

  return {
    api,
  };
}
