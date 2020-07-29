import { NgModule } from '@angular/core';
import { ComponentScopeComponent } from './component-scope.component';
import { CommonModule } from '@angular/common';
import { LoadingCardGlobalComponent } from './loading-card/loading-card-global.component';
import { LoadingCardLocalComponent } from './loading-card/loading-card-local.component';
import { LoadingButtonComponent } from './loading-card/loading-button.component';

@NgModule({
	declarations: [
		ComponentScopeComponent,
		LoadingCardGlobalComponent,
		LoadingCardLocalComponent,
		LoadingButtonComponent
	],
	imports: [
		CommonModule
	],
	entryComponents: [
		LoadingCardGlobalComponent,
		LoadingCardLocalComponent
	],
	exports: [
		ComponentScopeComponent
	]
})
export class ComponentScopeModule { }
