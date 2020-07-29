import { Component } from '@angular/core';
import { LoadingCardService } from '../providers/loading-card.service';

@Component({
	selector: 'app-loading-card',
	templateUrl: './loading-card.component.html',
	providers: [LoadingCardService]
})
export class LoadingCardLocalComponent {
	public type = 'Local';
	constructor(public loadingCardService: LoadingCardService) { }
 }
