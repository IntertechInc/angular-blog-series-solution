import { NgModule } from '@angular/core';
import { DynamicComponentCreationComponent } from './dynamic-component-creation.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { AlertComponent } from './alert.component';
import { FormsModule } from '@angular/forms';
import { CreateRequestComponent } from './create-request.component';

@NgModule({
	declarations: [
		DynamicComponentCreationComponent,
		CreateRequestComponent,
		ButtonComponent,
		AlertComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	entryComponents: [
		ButtonComponent,
		AlertComponent
	],
	exports: [
		DynamicComponentCreationComponent
	]
})
export class DynamicComponentCreationModule {}
