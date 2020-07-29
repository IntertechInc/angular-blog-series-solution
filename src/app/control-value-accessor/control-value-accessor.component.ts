import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-control-value-accessor',
	template: `
		<form [formGroup]="testForm" autocomplete="off" class="w-25 was-validated">
			<div class="form-group">
				<label>Test Input</label>
				<input class="form-control" type="text" formControlName="testInput">
			</div>

			<div class="form-group">
				<label>Rating</label>
				<app-rating-control [maxRating]="5" [minRating]="minRating" formControlName="rating"></app-rating-control>
			</div>

			<app-user-form formControlName="user"></app-user-form>
		</form>
		<button class="btn btn-secondary" (click)="testForm.disable()">Disable Form</button>
		<button class="btn btn-success" (click)="testForm.enable()">Enable Form</button>
		<button class="btn btn-danger" (click)="testForm.reset()">Reset Form</button>
		<div class="form-group">
			<label>Min Rating</label>
			<input name="minRating" class="form-control" type="number" [(ngModel)]="minRating">
		</div>
		<div style="white-space: pre">
			{{testForm.value | json}}<br/>
			Touched: {{testForm.touched | json}}<br/>
			Valid: {{testForm.valid}}<br/>
			Errors: {{testForm.controls['user'].errors | json}}<br/>
		</div>`,
	styles: [`
		app-rating-control.ng-invalid {
			color: red;
		}`]
})
export class ControlValueAccessorComponent implements OnInit {
	public testForm: FormGroup;
	public minRating = 3;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.testForm = this.formBuilder.group({
			testInput: 'abc',
			rating: [3, Validators.required],
			user: {firstName: 'Steve', email: 'steve@test.com'}
		});
	}
}
