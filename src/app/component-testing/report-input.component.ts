import { Output, EventEmitter, Component } from '@angular/core';

@Component({
	selector: 'app-report-input',
	template: `<button class="btn btn-primary" (click)="run()">Run</button>`
})
export class ReportInputComponent {
	@Output() runReport: EventEmitter<any> = new EventEmitter<any>();
	run() {
		this.runReport.emit();
	}
}
