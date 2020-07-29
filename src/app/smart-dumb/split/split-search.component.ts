import { Component, OnInit } from '@angular/core';
import { SearchInterface } from '../../shared/search.interface';
import { ItemInterface } from '../../shared/item.interface';
import { SearchService } from '../../shared/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-search',
	template: `
        <div class="row">
            <div class="col">
                <app-search-form [default]="init" (search)="search($event)"></app-search-form>
            </div>

            <div class="col">
                <div *ngIf="items">
                    <app-search-results [items]="items"></app-search-results>
                <div>

                <div *ngIf="searching" class="spinner-border"></div>
            </div>
        </div>`
})
export class SearchComponent implements OnInit {
	public init: SearchInterface;
	public items: ItemInterface[];
	public searching = false;

	constructor(private searchService: SearchService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.init = params as SearchInterface;
		});
	}

	search(criteria: SearchInterface) {
		this.searching = true;
		this.searchService.search(criteria).subscribe(data => {
			this.items = data;
			this.searching = false;
		});
	}
}
