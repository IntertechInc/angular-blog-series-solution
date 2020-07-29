import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SampleService {
	public sampleObservable(): Observable<number> {
		return interval(1000);
	}

	public samplePromise(): Promise<string> {
		return new Promise(resolve => {
			setTimeout(() => resolve('Hello from promise!'), 1500);
		});
	}
}
