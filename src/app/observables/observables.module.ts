import { NgModule } from '@angular/core';
import { ObservablesComponent } from './observables.component';
import { GreetingComponent } from './greeting.component';

@NgModule({
	declarations: [
		GreetingComponent,
		ObservablesComponent
	],
	imports: [],
	exports: [
		ObservablesComponent
	]
})
export class ObservablesModule { }
