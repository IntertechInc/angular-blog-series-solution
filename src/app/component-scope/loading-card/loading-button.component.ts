import { Component } from '@angular/core';
import { LoadingCardService } from '../providers/loading-card.service';

@Component({
	selector: 'app-loading-button',
	template: `
	<button id="load-button" class="btn btn-primary" (click)="loadingCardService.runSomething()" [disabled]="loadingCardService.isLoading">
		<span class="spinner-border spinner-border-sm" *ngIf="loadingCardService.isLoading"></span>
		Click Me!
	</button>`
})
export class LoadingButtonComponent {
	constructor(public loadingCardService: LoadingCardService) { }
}
