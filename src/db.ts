import { Data, database } from "./types";

export class DB<T> implements database<Data<T>, T> {
  constructor(private collection: Data<T>[]) {}

  getAll() {
    return this.collection;
  }

  getById(id: number): Data<T> {
    const data = this.collection.find((item) => item.id === id);
    if (data) {
      return data;
    }
    throw new Error(`Cannot find id : ${id}`);
  }

  remove(id: number): void {
    if (id) {
      this.collection.splice(id, 1);
    }
    throw new Error(`Cannot find id : ${id}`);
  }

  update(id: number, newData: T) {
    if (!newData) {
      throw new Error("Must provide new data!");
    }

    if (id) {
      let currentData = this.collection.find((item: Data<T>) => item.id === id);
      if (currentData) {
        currentData.data = newData;
      }
    }
    throw new Error("No id provided!");
  }

  add(data: Data<T>) {
    if (!data) {
      throw new Error("Data must be provided!");
    }
    this.collection.push(data);
  }
}
