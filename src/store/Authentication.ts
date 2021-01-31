import { AutorenewSharp } from "@material-ui/icons";
import { makeAutoObservable } from "mobx";
import { userLogin } from "../utils/api";

class Auth {
  token: string | boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(login: string, password: string) {
    this.token = await userLogin(login, password);
  }
}

export default new Auth();
