import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleService } from './sample.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-async-load',
	template: `
		<h3>Async Data Load</h3>
		<div>Time since subscribe: {{counter$ | async}}</div>
		<div>Time at update: {{updateTime$ | async | date:'medium'}}</div>
		<div>Promise result: {{message$ | async}}</div>`
})
export class AsyncLoadComponent implements OnInit {
	public counter$: Observable<number>;
	public updateTime$: Observable<Date>;
	public message$: Promise<string>;

	constructor(private sampleService: SampleService) { }

	ngOnInit(): void {
		this.counter$ = this.sampleService.sampleObservable();
		this.updateTime$ = this.sampleService.sampleObservable().pipe(map(() => new Date()));
		this.message$ = this.sampleService.samplePromise();
	}
}
