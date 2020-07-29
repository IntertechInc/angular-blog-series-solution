import { Component, ViewChild } from '@angular/core';
import { ItemInterface } from '../shared/item.interface';
import { SearchService } from '../shared/search.service';
import { ReportCriteriaFormInterface } from './report-criteria-form.interface';
import { SearchInterface } from '../shared/search.interface';

@Component({
	selector: 'app-report',
	template: `
        <app-report-criteria #criteria></app-report-criteria>
        <app-report-input (runReport)="refresh()"></app-report-input>
        <app-report-results [data]="reportResults"></app-report-results>`
})
export class ReportComponent {
	public reportResults: ItemInterface[];
	@ViewChild('criteria') criteriaComponent: ReportCriteriaFormInterface<SearchInterface>;

	constructor(private searchService: SearchService) { }

	public refresh() {
		this.reportResults = null;
		if (this.criteriaComponent.validateCriteria()) {
			const criteria = this.criteriaComponent.getSearchCriteria();
			this.searchService.search(criteria).subscribe(data => this.reportResults = data);
		}
	}
}
