import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ParentComponent } from './parent.component';
import { RouteReuseStrategy } from '@angular/router';
import { RouterReuseComponent } from './router-reuse.component';
import { RouterReuseRouting } from './router-reuse.routing';
import { SearchComponent } from './search.component';
import { CustomReuseStrategy } from './custom-reuse-strategy';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		RouterReuseComponent,
		ParentComponent,
		DetailComponent,
		SearchComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterReuseRouting
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
	]
})
export class RouterReuseModule {}
