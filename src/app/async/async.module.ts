import { NgModule } from '@angular/core';
import { AsyncComponent } from './async.component';
import { CommonModule } from '@angular/common';
import { ManualSubscribeComponent } from './manual-subscribe.component';
import { AsyncLoadComponent } from './async-load.component';
import { AsyncIfComponent } from './async-if.component';

@NgModule({
	declarations: [
		AsyncComponent,
		ManualSubscribeComponent,
		AsyncLoadComponent,
		AsyncIfComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		AsyncComponent
	]
})
export class AsyncModule { }
