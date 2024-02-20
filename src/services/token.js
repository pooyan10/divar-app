import api from "../configs/api";
import { getCookie } from "../utils/cookie";

export const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await api.post("auth/check-refresh-token", {
      refreshToken,
    });
    console.log(response);
    return { response };
  } catch (error) {
    return { error };
  }
};
