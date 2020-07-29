import { Component } from '@angular/core';
import { MasterComponent } from './master';

@Component({
	selector: 'app-parent',
	template: `
		<h1>Parent Component</h1>
		<ul class="nav nav-tabs">
			<li class="nav-item" *ngFor="let random of randoms">
				<a class="nav-link" [routerLink]="['detail', random]" routerLinkActive="active">Go to {{random}}</a>
			</li>
		</ul>

		<router-outlet></router-outlet>`
})
export class ParentComponent extends MasterComponent {
	displayName = 'ParentComponent';
}
