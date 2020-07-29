import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchInterface } from '../../shared/search.interface';
import { ItemInterface } from '../../shared/item.interface';
import { SearchService } from '../../shared/search.service';

@Component({
	selector: 'app-search',
	template: `
        <div class="row">
            <div class="col">
                <form [formGroup]="searchForm" [ngClass]="{'was-validated': attemptSearch}">
                    <div class="form-group">
                        <label for="searchTerm">Search</label>
                        <input type="text" class="form-control" id="searchTerm" formControlName="searchTerm" required />
                    </div>

                    <button class="btn btn-primary" type="submit" (click)="search()">Search</button>
                </form>
            </div>
            <div class="col">
                <ul class="list-group" *ngIf="items">
                    <li class="list-group-item" *ngFor="let item of items">
                        <h2>{{item.name}}</h2>
                        <p>{{item.description}}</p>
                    </li>
                </ul>
                <div *ngIf="searching" class="spinner-border"></div>
            </div>
        </div>`
})
export class SearchComponent implements OnInit {
	public items: ItemInterface[];
	public searching = false;
	public searchForm: FormGroup;
	public attemptSearch: boolean;

	constructor(private formBuilder: FormBuilder, private searchService: SearchService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.attemptSearch = false;
		this.route.queryParams.subscribe(params => {
			this.buildForm(params as SearchInterface);
		});
	}


	private buildForm(init: SearchInterface) {
		this.searchForm = this.formBuilder.group({
			searchTerm: [init.searchTerm, Validators.required]
		});
	}

	search() {
		this.attemptSearch = true;
		if (this.searchForm.valid) {
			this.searching = true;
			this.searchService.search(this.searchForm.value).subscribe(data => {
				this.items = data;
				this.searching = false;
			});
		}
	}
}
