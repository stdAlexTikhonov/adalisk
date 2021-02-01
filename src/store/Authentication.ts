import { makeAutoObservable } from "mobx";
import { userLogin } from "../utils/api";

class Auth {
  token: string | boolean = false;
  login: string = "";
  password: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async loginUser() {
    const res = await userLogin(this.login, this.password);
    if (res) {
      this.token = res;
      localStorage.setItem(res.toString(), this.login);
      localStorage.setItem("token", res.toString());
    } else {
      this.login = "";
      this.password = "";
    }
  }

  setLogin(login: string) {
    this.login = login;
  }

  setPassword(pass: string) {
    this.password = pass;
  }

  logout() {
    this.login = "";
    this.password = "";
    localStorage.removeItem(this.token as string);
    localStorage.removeItem("token");
    this.token = false;
  }

  checkLocalStorage() {
    const token = localStorage.getItem("token");
    if (token) {
      this.token = token;
      const login = localStorage.getItem(token) || "";
      this.login = login;
    }
  }
}

export default new Auth();
