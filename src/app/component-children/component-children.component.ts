import { Component } from '@angular/core';

@Component({
	selector: 'app-component-children',
	template: `
		<div class="card">
			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<a class="nav-link" [routerLink]="['/component-children','view-child']" routerLinkActive="active">ViewChild</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" [routerLink]="['/component-children','content-child']" routerLinkActive="active">ContentChild</a>
					</li>
				</ul>
			</div>
			<div class="card-body">
				<router-outlet></router-outlet>
			</div>
		</div>`
})
export class ComponentChildrenComponent { }
