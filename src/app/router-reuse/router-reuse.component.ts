import { Component } from '@angular/core';

@Component({
	selector: 'app-router-reuse',
	template: `
		<div class="card">
			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<a class="nav-link" [routerLink]="['/router-reuse','parent']" routerLinkActive="active">Parent-Child</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" [routerLink]="['/router-reuse','search']" routerLinkActive="active">Search-Result</a>
					</li>
				</ul>
			</div>
			<div class="card-body">
				<router-outlet></router-outlet>
			</div>
		</div>
	`
})
export class RouterReuseComponent {}
