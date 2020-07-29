import { Component } from '@angular/core';
import { MasterComponent } from './master';

@Component({
	selector: 'app-search',
	template: `
		<h1>Search Component</h1>
		<ul class="nav nav-pills flex-column">
			<li class="nav-item" *ngFor="let random of randoms">
				<a class="nav-link" [routerLink]="['detail', random]" routerLinkActive="active">Go to {{random}}</a>
			</li>
		</ul>
	`
})
export class SearchComponent extends MasterComponent {
	displayName = 'SearchComponent';
}
