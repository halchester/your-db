export type Data<T> = {
	id: number;
	data: T;
};

export type database<T, K> = {
	getAll: () => T[];
	getById: (id: number) => T;
	remove: (id: number) => void;
	update: (id: number, data: K) => void;
	add: (data: T) => void;
};
