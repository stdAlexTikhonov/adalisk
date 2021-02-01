import { makeAutoObservable } from "mobx";
import { getData } from "../utils/api";
import { TCase } from "../utils/types";

class CasesData {
  cases: TCase[] = [];
  selected: TCase | undefined;
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
    const case_ = this.cases.find((c: TCase) => c.caseUid === id);
    if (case_) this.selected = case_;
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
      (c: TCase) =>
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

export default new CasesData();
