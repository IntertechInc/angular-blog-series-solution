import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
	name: string;
}

const names: string[] = [
	'Charlie Brown',
	'Darth Vader',
	'James Bond',
	'Mickey Mouse',
	'Indiana Jones',
	'Batman',
	'Superman',
	'Bugs Bunny',
	'Homer J. Simpson',
	'Spock',
	'E.T.',
	'Godzilla',
	'Yoda',
	'Fred Flinstone',
	'Gandalf',
	'Optimus Prime',
	'Albus Percival Wulfric Brian Dumbledore'
];

@Injectable({
	providedIn: 'root'
})
export class UserService {
	currentUser(): Observable<User> {
		return interval(2000).pipe(map(this.getRandomUser));
	}

	getRandomUser(): User {
		const index = Math.floor(Math.random() * names.length);
		return {
			name: names[index]
		};
	}
}
