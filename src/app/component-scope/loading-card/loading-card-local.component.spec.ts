import { LoadingCardService } from '../providers/loading-card.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoadingCardLocalComponent } from './loading-card-local.component';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('LoadingCardLocalComponent', () => {
	let component: LoadingCardLocalComponent;
	let fixture: ComponentFixture<LoadingCardLocalComponent>;
	let loadingCardService: jasmine.SpyObj<LoadingCardService>;

	beforeEach(() => {
		loadingCardService = jasmine.createSpyObj(['runSomething', 'randomValue']);
		loadingCardService.randomValue.and.returnValue(of(5));

		TestBed.configureTestingModule({
			declarations: [LoadingCardLocalComponent],
			providers: [
				{ provide: LoadingCardService, useValue: loadingCardService }
			],
			schemas: [NO_ERRORS_SCHEMA]
		});

		TestBed.overrideComponent(LoadingCardLocalComponent, {
			set: {
				providers: [
					{ provide: LoadingCardService, useValue: loadingCardService }
				]
			}
		});

		TestBed.compileComponents();
		fixture = TestBed.createComponent(LoadingCardLocalComponent);
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
