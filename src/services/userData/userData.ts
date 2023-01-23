import { IPublicClientApplication } from "@azure/msal-browser";
import axios, { AxiosResponse } from "axios";
import { graphConfig, loginRequest } from "../../authConfig";
import { IUserDataResponse } from "./userData.d";

export const getUserData = async (
  instance: IPublicClientApplication,
  signal: AbortSignal
): Promise<AxiosResponse<IUserDataResponse>> => {
  const account = instance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  try {
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });

    return axios.get(graphConfig.graphMeEndpoint, {
      signal,
      headers: {
        Authorization: `Bearer ${response.accessToken}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
