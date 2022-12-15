import { FC, useEffect } from "react";
import { authService } from "../../../service";
import "./Login.scss";

export const Login: FC = () => {
  useEffect(() => {
    window.localStorage.removeItem("code");
  });
  return (
    <div className="login-wrapper">
      <h1 className="login_wrapper__title">Login Here</h1>
      <a className="login-wrapper__button" href={authService.getAuthLink()}>
        Login
      </a>
    </div>
  );
};
