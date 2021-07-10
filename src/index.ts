import { generateDB } from "./factory";
import { data } from "./sampledata";

export default generateDB;

// Use case
interface dataSchema {
  name: string;
  email: string;
  age: number;
}

const myDB = generateDB<dataSchema>(data);
