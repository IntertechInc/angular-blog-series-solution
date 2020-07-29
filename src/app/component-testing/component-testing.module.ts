import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './report.component';
import { ReportCriteriaComponent } from './report-criteria.component';
import { ReportInputComponent } from './report-input.component';
import { ReportResultsComponent } from './report-results.component';

@NgModule({
	declarations: [
		ReportComponent,
		ReportCriteriaComponent,
		ReportInputComponent,
		ReportResultsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule
	],
	exports: [
		ReportComponent,
		BrowserModule,
		FormsModule,
		NgbModule
	],
	providers: []
})
export class ComponentTestingModule { }
