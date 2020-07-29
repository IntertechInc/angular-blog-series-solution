import { OnInit, Component, forwardRef } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	ControlValueAccessor,
	NG_VALUE_ACCESSOR,
	FormGroupDirective,
	Validator,
	NG_VALIDATORS,
	AbstractControl,
	ValidationErrors
} from '@angular/forms';

@Component({
	selector: 'app-user-form',
	template: `
		<ng-container [formGroup]="userForm">
			<div class="form-group">
				<label for="firstName">First Name</label>
				<input id="firstName" type="text" class="form-control" formControlName="firstName" (blur)="formTouchFn()">
			</div>
			<div class="form-group">
				<label for="lastName">Last Name</label>
				<input id="lastName" type="text" class="form-control" formControlName="lastName" required (blur)="formTouchFn()">
				<div class="invalid-feedback">
          			Last Name is required
        		</div>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input id="email" type="email" class="form-control" formControlName="email" (blur)="formTouchFn()">
				<div class="invalid-feedback">
          			Not a valid email address
        		</div>
			</div>
		</ng-container>`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UserFormComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => UserFormComponent),
			multi: true
		}
	]
})
export class UserFormComponent implements OnInit, ControlValueAccessor, Validator {
	public userForm: FormGroup;
	public formTouchFn;

	constructor(private formBuilder: FormBuilder, private ngForm: FormGroupDirective) { }

	ngOnInit(): void {
		this.userForm = this.formBuilder.group({
			firstName: null,
			lastName: [null, Validators.required],
			email: [null, Validators.email]
		});

		console.log(this.ngForm);
	}

	writeValue(obj: any): void {
		const emtptyForm = {
			firstName: null,
			lastName: null,
			email: null
		};

		const data = Object.assign(emtptyForm, obj);
		this.userForm.patchValue(data);
	}

	registerOnChange(fn: any): void {
		this.userForm.valueChanges.subscribe(fn);
	}

	registerOnTouched(fn: any): void {
		this.formTouchFn = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		if (isDisabled) {
			this.userForm.disable();
		} else {
			this.userForm.enable();
		}
	}

	validate(control: AbstractControl): ValidationErrors {
		const form = this.userForm;
		if (form.valid) {
			return null;
		}

		const errors = {};
		Object.keys(form.controls).forEach(k => {
			if (form.controls[k].invalid) {
				errors[k] = form.controls[k].errors;
			}
		});

		return errors;
	}

	registerOnValidatorChange?(fn: () => void): void { }
}
