import { Component } from '@angular/core';
import { SearchInterface } from '../shared/search.interface';
import { ReportCriteriaFormInterface } from './report-criteria-form.interface';

@Component({
	selector: 'app-report-criteria',
	template: `
        <div class="form-group">
            <label for="keyword">Keyword</label>
            <input class="form-control" id="keyword" [(ngModel)]="keyword" />
            <small id="keywordError" class="form-text text-muted" *ngIf="invalid">Not a valid value!</small>
        </div>`
})
export class ReportCriteriaComponent implements ReportCriteriaFormInterface<SearchInterface> {
	public invalid = false;
	public keyword: string;

	public validateCriteria() {
		if (Math.random() > 0.5) {
			this.invalid = true;
			return false;
		}

		return true;
	}

	public getSearchCriteria(): SearchInterface {
		return {
			searchTerm: this.keyword
		};
	}
}
