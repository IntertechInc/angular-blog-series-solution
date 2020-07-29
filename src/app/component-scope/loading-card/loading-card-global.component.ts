import { Component } from '@angular/core';
import { LoadingCardService } from '../providers/loading-card.service';

@Component({
	selector: 'app-loading-card-global',
	templateUrl: './loading-card.component.html'
})
export class LoadingCardGlobalComponent {
	public type = 'Global';
	constructor(public loadingCardService: LoadingCardService) { }
 }
