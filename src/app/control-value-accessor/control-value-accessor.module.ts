import { ControlValueAccessorComponent } from './control-value-accessor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingControlComponent } from './rating-control.component';
import { UserFormComponent } from './user-form.component';

@NgModule({
	declarations: [
		ControlValueAccessorComponent,
		RatingControlComponent,
		UserFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		FontAwesomeModule
	],
	exports: [
		ControlValueAccessorComponent
	]
})
export class ControlValueAccessorModule { }
