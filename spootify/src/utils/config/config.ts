interface IConfigProps {
  clientId: string;
  redirectUrl: string;
}

export const config: Record<keyof IConfigProps, string> = {
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID || "",
  redirectUrl:
    process.env.REACT_APP_SPOTIFY_REDIRECT_URL ||
    "http://localhost:3000/loggedin",
};
