import { NgModule } from '@angular/core';
import { ComponentChildrenComponent } from './component-children.component';
import { ChildListComponent } from './child-list/child-list.component';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child/view-child.component';
import { ComponentChildrenRoutingModule } from './component-children.routing';
import { ContentChildComponent } from './content-child/content-child.component';
import { ControlFormatterComponent } from './control-formatter/control-formatter.component';
import { ControlLabelDirective } from './control-formatter/control-label.directive';
import { ChildTableComponent } from './child-table/child-table.component';

@NgModule({
	declarations: [
		ComponentChildrenComponent,
		ViewChildComponent,
		ChildListComponent,
		ChildTableComponent,
		ContentChildComponent,
		ControlFormatterComponent,
		ControlLabelDirective
	],
	imports: [
		CommonModule,
		ComponentChildrenRoutingModule
	],
	exports: [
		ComponentChildrenComponent
	]
})
export class ComponentChilrenModule { }
