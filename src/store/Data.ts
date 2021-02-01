import { makeAutoObservable } from "mobx";
import { getData } from "../utils/api";
import { TUser } from "../utils/types";

class Data {
  cases: TUser[] = [];
  selected: TUser | undefined;
  page: number = 0;
  rowsPerPage: number = 10;
  searchField: string = "";

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

  setSearchField(str: string) {
    this.searchField = str;
  }

  get filtered() {
    return this.cases.filter(
      (c: TUser) =>
        new RegExp(this.searchField, "i").test(c.status) ||
        new RegExp(this.searchField, "i").test(c.reference) ||
        new RegExp(this.searchField, "i").test(c.accountId) ||
        new RegExp(this.searchField, "i").test(c.publicId) ||
        new RegExp(this.searchField, "i").test(c.creationDate) ||
        new RegExp(this.searchField, "i").test(c.caseUid)
    );
  }

  get keys() {
    return this.selected ? Object.keys(this.selected) : [];
  }
}

export default new Data();
