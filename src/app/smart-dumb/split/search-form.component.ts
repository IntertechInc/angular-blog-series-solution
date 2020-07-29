import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchInterface } from '../../shared/search.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-search-form',
	template: `
		<form [formGroup]="searchForm" [ngClass]="{'was-validated': attemptSearch}">
			<div class="form-group">
				<label for="searchTerm">Search</label>
				<input type="text" class="form-control" id="searchTerm" formControlName="searchTerm" required />
			</div>

			<<button class="btn btn-primary" type="submit" (click)="searchClick()">Search</button>>
		</form>`
})
export class SearchFormComponent implements OnInit {
	@Input() default: SearchInterface;
	@Output() search: EventEmitter<SearchInterface> = new EventEmitter<SearchInterface>();
	public searchForm: FormGroup;
	public attemptSearch: boolean;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.attemptSearch = false;
		this.searchForm = this.formBuilder.group({
			searchTerm: [this.default.searchTerm, Validators.required]
		});
	}

	searchClick() {
		this.attemptSearch = true;
		if (this.searchForm.valid) {
			this.search.emit(this.searchForm.value);
		}
	}
}
