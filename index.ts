import { generateDB } from "./src/factory";
import { data } from "./src/sampledata";

export default generateDB;

// Use case
interface dataSchema {
  name: string;
  email: string;
  age: number;
}

const myDB = generateDB<dataSchema>(data);
