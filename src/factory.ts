import { DB } from "./db";
import { Data } from "./types";

export const generateDB = <T>(data: Data<T>[]) => {
  return new DB(data);
};
