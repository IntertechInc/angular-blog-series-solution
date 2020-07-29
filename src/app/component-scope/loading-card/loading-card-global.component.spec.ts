import { LoadingCardService } from '../providers/loading-card.service';
import { LoadingCardGlobalComponent } from './loading-card-global.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LoadingButtonComponent } from './loading-button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('LoadingCardGlobalComponent', () => {
	let component: LoadingCardGlobalComponent;
	let fixture: ComponentFixture<LoadingCardGlobalComponent>;
	let loadingCardService: jasmine.SpyObj<LoadingCardService>;

	beforeEach(() => {
		loadingCardService = jasmine.createSpyObj(['runSomething', 'randomValue']);
		loadingCardService.randomValue.and.returnValue(of(5));

		TestBed.configureTestingModule({
			declarations: [LoadingCardGlobalComponent, LoadingButtonComponent],
			providers: [
				{ provide: LoadingCardService, useValue: loadingCardService }
			],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();
		fixture = TestBed.createComponent(LoadingCardGlobalComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should show the random number', () => {
		const valElement = fixture.debugElement.query(By.css('#random-val')).nativeElement;
		expect(valElement.innerText).toContain(5);
	});
});
