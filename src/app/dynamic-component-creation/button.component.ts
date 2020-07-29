import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	template: `
		<button class="btn" [ngClass]="getClass()" (click)="remove.emit()">
			Created: {{created | date:'medium'}}
		</button>`
})
export class ButtonComponent implements OnInit {
	@Input() type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	@Output() remove = new EventEmitter<any>();

	public created: Date;

	ngOnInit(): void {
		this.created = new Date();
	}

	getClass(): string {
		return !this.type ? null : `btn-${this.type}`;
	}
}
