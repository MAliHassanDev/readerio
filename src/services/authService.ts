import { axios } from "@/lib/axiso";
import logger from "@/lib/logger";

class AuthService {
  async registerUser<T>(userData: unknown) {
    try {
      const response = await axios.post<T>("/users", userData);
      console.log(response);
      return response.data;
    } catch (err) {
      logger.error(err);
    }
  }
}

export const authService = new AuthService();
