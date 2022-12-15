import { Navigate } from "react-router-dom";

export const Loggedin = () => {
  const url = new URL(window.location.href.replace("#", "?"));
  const code = url.searchParams.get("access_token");
  code && window.localStorage.setItem("code", code);

  return <Navigate to={code ? "/discover" : "login"} />;
};
