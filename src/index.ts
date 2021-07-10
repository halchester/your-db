import { DB } from './db';

const data = [
	{
		id: 1,
		data: {
			name: 'asdf',
		},
	},
	{
		id: 2,
		data: {
			name: 'asdfasdf',
		},
	},
];

const myDB = new DB(data);

console.log(myDB.getAll());
console.log(myDB.getById(1));
