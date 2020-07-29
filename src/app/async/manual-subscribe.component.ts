import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SampleService } from './sample.service';

@Component({
	selector: 'app-manual-subscribe',
	template: `
		<h3>Manual Subscribe Data Load</h3>
		<div>Seconds since subscribe: {{counter}}</div>
		<div>Time at update: {{updateTime | date:'medium'}}</div>
		<div>Promise result: {{message}}</div>`
})
export class ManualSubscribeComponent implements OnInit, OnDestroy {
	public counter: number;
	public message: string;
	public updateTime: Date;
	private unsubscribe = new Subject<void>();

	constructor(private sampleService: SampleService) { }

	ngOnInit(): void {
		this.sampleService.sampleObservable()
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(data => this.counter = data);

		this.sampleService.sampleObservable()
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(() => this.updateTime = new Date());

		this.sampleService.samplePromise()
			.then(data => this.message = data);
	}

	ngOnDestroy(): void {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
