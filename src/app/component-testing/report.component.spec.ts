import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { ReportComponent } from './report.component';
import { SearchService } from '../shared/search.service';
import { ItemInterface } from '../shared/item.interface';
import { of } from 'rxjs';
import { ReportInputComponent } from './report-input.component';
import { By } from '@angular/platform-browser';
import { ReportCriteriaFormInterface } from './report-criteria-form.interface';
import { SearchInterface } from '../shared/search.interface';

@Component({
	selector: 'app-report-criteria',
	template: ''
})
export class MockReportCriteriaComponent implements ReportCriteriaFormInterface<SearchInterface> {
	public isFormValid = true;
	public searchData: SearchInterface;

	validateCriteria(): boolean {
		return this.isFormValid;
	}

	getSearchCriteria(): SearchInterface {
		return this.searchData;
	}
}

describe('ReportComponent', () => {
	let component: ReportComponent;
	let fixture: ComponentFixture<ReportComponent>;
	let searchService: jasmine.SpyObj<SearchService>;

	const testData: ItemInterface[] = [
		{ name: 'Apples', description: 'Juicy, red, and delicious' },
		{ name: 'Socks', description: 'So your feet don\'t get cold' },
		{ name: 'Tires', description: 'Because we sell everything' }];

	beforeEach(() => {
		searchService = jasmine.createSpyObj(['search']);
		searchService.search.and.returnValue(of(testData));

		TestBed.configureTestingModule({
			declarations: [ReportComponent, ReportInputComponent, MockReportCriteriaComponent],
			providers: [
				{ provide: SearchService, useValue: searchService }
			],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();
		fixture = TestBed.createComponent(ReportComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should run a search', () => {
		const mock = component.criteriaComponent as MockReportCriteriaComponent;
		mock.isFormValid = true;
		const testSearch = { searchTerm: 'foo' };
		mock.searchData = testSearch;

		fixture.debugElement.query(By.css('button')).triggerEventHandler('click', {});
		expect(searchService.search).toHaveBeenCalledWith(testSearch);
	});

	it('should not run a search for invalid criteria', () => {
		const mock = component.criteriaComponent as MockReportCriteriaComponent;
		mock.isFormValid = false;

		fixture.debugElement.query(By.css('button')).triggerEventHandler('click', {});
		expect(searchService.search).not.toHaveBeenCalled();
	});
});
