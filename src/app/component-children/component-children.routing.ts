import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentChildrenComponent } from './component-children.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ContentChildComponent } from './content-child/content-child.component';

const routes: Routes = [
	{
		path: 'component-children',
		component: ComponentChildrenComponent,
		children: [
			{
				path: 'view-child',
				component: ViewChildComponent
			},
			{
				path: 'content-child',
				component: ContentChildComponent
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ComponentChildrenRoutingModule {}
