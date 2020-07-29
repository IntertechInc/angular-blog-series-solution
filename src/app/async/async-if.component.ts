import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleService } from './sample.service';

@Component({
	selector: 'app-async-if',
	template: `
		<h3>Async Data Load With If</h3>
		<div *ngIf="counter$ | async as result else spinner">Time since subscribe: {{result}}</div>
		<div *ngIf="message$ | async as result else spinner">Promise result: {{result}}</div>
		<ng-template #spinner>
			<div class="spinner-border"></div>
		</ng-template>`
})
export class AsyncIfComponent implements OnInit {
	public counter$: Observable<number>;
	public message$: Promise<string>;

	constructor(private sampleService: SampleService) { }

	ngOnInit(): void {
		this.counter$ = this.sampleService.sampleObservable();
		this.message$ = this.sampleService.samplePromise();
	}
}
