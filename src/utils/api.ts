import { _getData, _getToken } from "./_data_";

export const getData = async () => await _getData();

export const userLogin: (
  login: string,
  pass: string
) => Promise<string | boolean> = async (login, pass) =>
  await _getToken(login, pass);
