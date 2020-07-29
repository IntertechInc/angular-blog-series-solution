import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';
import { RouterReuseComponent } from './router-reuse.component';
import { DetailComponent } from './detail.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
	{
		path: 'router-reuse',
		component: RouterReuseComponent,
		children: [
			{
				path: 'parent',
				component: ParentComponent,
				children: [
					{
						path: 'detail/:detailId',
						component: DetailComponent,
						data: {
							alwaysRefresh: true
						}
					}
				]
			},
			{
				path: 'search',
				children: [
					{
						path: '',
						component: SearchComponent,
						data: {
							saveComponent: true
						}
					},
					{
						path: 'detail/:detailId',
						component: DetailComponent
					}
				]
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class RouterReuseRouting {}
