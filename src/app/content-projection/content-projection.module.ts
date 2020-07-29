import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample.component';
import { InputCardComponent } from './input-card.component';
import { InputTitleCardComponent } from './input-title-card.component';
import { ProjectBodyCardComponent } from './project-body-card.component';
import { ProjectMultipleCardComponent } from './project-multiple-card.component';
import { ProjectComponentCardComponent } from './project-component-card.component';
import { CardHeadingComponent } from './card-heading.component';
import { CardBodyComponent } from './card-body.component';
import { MultipleLocationsCardComponent } from './multiple-locations-card.component';

@NgModule({
	declarations: [
		SampleComponent,
		InputCardComponent,
		InputTitleCardComponent,
		ProjectBodyCardComponent,
		ProjectMultipleCardComponent,
		ProjectComponentCardComponent,
		CardHeadingComponent,
		CardBodyComponent,
		MultipleLocationsCardComponent
	],
	imports: [
		BrowserModule
	],
	exports: [
		SampleComponent
	],
	providers: []
})
export class ContentProjectionModule { }
