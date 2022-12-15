import axios from "axios";
import { config } from "../../utils";

class AuthService {
  private getUri() {
    return `https://accounts.spotify.com/authorize`;
  }

  getAuthLink() {
    return `${this.getUri()}?client_id=${config.clientId}&redirect_uri=${
      config.redirectUrl
    }&response_type=token`;
  }

  auth() {
    axios.get(this.getUri(), {
      params: {
        client_id: config.clientId,
        redirect_uri: "http://localhost:3000",
        response_type: "token",
      },
    });
  }
}

export const authService = new AuthService();
