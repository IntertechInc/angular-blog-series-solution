import { Component } from '@angular/core';

@Component({
	selector: 'app-async',
	template: `
		<div class="row">
			<app-manual-subscribe class="col"></app-manual-subscribe>
			<app-async-load class="col"></app-async-load>
			<app-async-if class="col"></app-async-if>
		</div>`
})
export class AsyncComponent {}
