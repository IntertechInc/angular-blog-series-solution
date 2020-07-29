import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-alert',
	template: `
		<span class="alert d-flex align-items-center justify-content-between my-2 p-1" [ngClass]="getClass()">
			{{created | date:'medium'}}
			<button type="button" class="close" (click)="remove.emit()">
			  <span aria-hidden="true">&times;</span>
			</button>
		</span>`
})
export class AlertComponent implements OnInit {
	@Input() type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	@Output() remove = new EventEmitter<any>();

	public created: Date;

	ngOnInit(): void {
		this.created = new Date();
	}

	getClass(): string {
		return !this.type ? null : `badge-${this.type}`;
	}
}
