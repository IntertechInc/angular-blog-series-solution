import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-heading',
	template: `<div [ngClass]="headingClass()"><ng-content></ng-content></div>`
})
export class CardHeadingComponent {
	@Input() textStyle: string;

	public headingClass() {
		return `text-${this.textStyle}`;
	}
}
