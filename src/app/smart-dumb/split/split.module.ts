import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './split-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form.component';
import { SearchResultsComponent } from './search-results.component';
import { ItemComponent } from './item.component';

@NgModule({
	declarations: [
		SearchComponent,
		SearchFormComponent,
		SearchResultsComponent,
		ItemComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		NgbModule
	],
	exports: [
		SearchComponent
	],
	providers: []
})
export class SmartDumbSplitModule { }
