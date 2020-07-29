import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-reuse-strategy';

@Component({
	selector: 'app-detail',
	template: `
		<div class="alert alert-primary" role="alert">
			<strong>Detail ID:</strong> {{routeParam}}
		</div>

		<div>
			<strong>Random value:</strong> {{randomVal}}
		</div>

		<button class="btn btn-danger" (click)="clearStoredRoute()">Clear Search</button>
	`
})
export class DetailComponent implements OnInit, OnDestroy {
	public routeParam;
	public randomVal: number;

	constructor(private route: ActivatedRoute, private routeReuseStrategy: RouteReuseStrategy) { }

	ngOnInit(): void {
		this.route.params.subscribe(p => this.routeParam = p.detailId);

		this.randomVal = Math.floor(Math.random() * 100);
	}

	clearStoredRoute(): void {
		(this.routeReuseStrategy as CustomReuseStrategy).clearSavedHandle('/router-reuse/search/');
	}

	ngOnDestroy(): void {
		console.log(`Destroy detail: ${this.routeParam}`);
	}
}
