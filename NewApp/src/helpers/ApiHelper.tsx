import { BASE_URL } from "../config";
import { Actions } from "react-native-router-flux";
import { deleteUserInfo } from "./SessionHelper";

const API_URL = BASE_URL;

class ApiHelper {
    private accessToken?: string;

  constructor() {
    this.accessToken = undefined;
  }

  setAccessToken = (accessToken: string) => {
    this.accessToken = accessToken;
  };

  getAccessToken = () => {
    return this.accessToken;
  };


  getRequest = async (endpoint: string) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "x-access-token": `${this.accessToken}`
        }
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  postRequest = async (endpoint: string, body: any) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${this.accessToken}`
        },
        body: JSON.stringify(body)
      });
      
      const responseJson = await response.json();
      const finalResponse = { data: responseJson, status: response.status };

      if (response.status === 401) {
        deleteUserInfo();
        this.accessToken = undefined;
        Actions.auth();
      }

      return finalResponse;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  patchRequest = async (endpoint: string, body: any) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${this.accessToken}`
        },
        body: JSON.stringify(body)
      });
      const responseJson = await response.json();
      const finalResponse = { data: responseJson, status: response.status };

      if (response.status === 401) {
        deleteUserInfo();
        this.accessToken = undefined;
        Actions.auth();
      }

      return finalResponse;
    } catch (error) {
      console.error(error);
    }
  };

  deleteRequest = async (endpoint: string, body: any) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${this.accessToken}`
        },
        body: JSON.stringify(body)
      });
      const responseJson = await response.json();
      const finalResponse = { data: responseJson, status: response.status };

      if (response.status === 401) {
        deleteUserInfo();
        this.accessToken = undefined;
        Actions.auth();
      }

      return finalResponse;
    } catch (error) {
      console.error(error);
    }
  };
}

export const APIHelper = new ApiHelper();
