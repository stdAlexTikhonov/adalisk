import { makeAutoObservable } from "mobx";
import { getData } from "../utils/api";
import { TUser } from "../utils/types";

class Data {
  cases: TUser[] = [];
  selected: TUser | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchData() {
    const data = await getData();
    this.cases = data;
  }

  getCase(id: string) {
    this.selected = this.cases.find((c: TUser) => c.caseUid === id);
  }
}

export default new Data();
