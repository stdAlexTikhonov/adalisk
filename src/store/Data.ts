import { makeAutoObservable } from "mobx";
import { getData } from "../utils/api";
import { TUser } from "../utils/types";

class Data {
  cases: TUser[] = [];
  selected: TUser | undefined;
  page: number = 0;
  rowsPerPage: number = 10;

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

  setPage(page: number) {
    this.page = page;
  }

  setRowsPerPage(rpp: number) {
    this.rowsPerPage = rpp;
  }
}

export default new Data();
