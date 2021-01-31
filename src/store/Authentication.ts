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
    if (res) this.token = res;
    else {
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
    this.token = false;
    this.login = "";
    this.password = "";
  }
}

export default new Auth();
