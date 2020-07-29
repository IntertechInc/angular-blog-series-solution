import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingCardService {
	public isLoading = false;
	public randomValueSubject = new BehaviorSubject<number>(null);

	public randomValue(): Observable<number> {
		return this.randomValueSubject.asObservable();
	}

	public runSomething(): void {
		this.isLoading = true;

		setTimeout(() => {
			const randomNumber = Math.floor(Math.random() * 100);
			this.randomValueSubject.next(randomNumber);
			this.isLoading = false;
		}, 2000);
	}
}
