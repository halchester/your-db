import { DB } from "./db";

const data = [
  {
    id: 1,
    data: {
      name: "Chester",
      age: 18,
    },
  },
  {
    id: 2,
    data: {
      name: "Another person",
      age: 21,
    },
  },
];

const myDB = new DB(data);

// Getting all data
myDB.getAll();

// Getting data by id
myDB.getById(1);

// Removing data
myDB.remove(1);

// Edit data
myDB.update(2, { name: "Another Another person", age: 21 });

// Adding data
myDB.add({ id: 3, data: { name: "Another next person", age: 12 } });
