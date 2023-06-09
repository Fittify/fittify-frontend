export interface User {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	_id: string;
}

export interface LoggedInUser {
	firstName: string;
	lastName: string;
	email: string;
	token: string;
	_id: string;
}