import { generateDB } from "../src/factory";
import { data } from "./data";

interface dataSchema {
  name: string;
  age: number;
}

const myDb = generateDB<dataSchema>(data);

// Get all your data in your db
myDb.getAll();

// Get a particular item with id
let id = 1;
myDb.getById(id);

// Remove an entry with id
myDb.remove(id);

// Update an entry with id and new data for that
myDb.update(id, {
  name: "Chester",
  age: 19,
});

// Adding new data
myDb.add({
  id: 2,
  data: {
    name: "Another",
    age: 18,
  },
});
