import { Injectable } from '@angular/core';
import { SearchInterface } from './search.interface';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ItemInterface } from './item.interface';

const searchResults: ItemInterface[] = [
	{ name: 'Apples', description: 'Juicy, red, and delicious' },
	{ name: 'Socks', description: 'So your feet don\'t get cold' },
	{ name: 'Tires', description: 'Because we sell everything' }
];

@Injectable({
	providedIn: 'root'
})
export class SearchService {
	public search(criteria: SearchInterface): Observable<ItemInterface[]> {
		return of(searchResults).pipe(delay(2000));
	}

	public listItems(): Observable<ItemInterface[]> {
		return of(searchResults).pipe(delay(2000));
	}
}
