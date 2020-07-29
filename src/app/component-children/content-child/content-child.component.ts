import { Component } from '@angular/core';

@Component({
	selector: 'app-content-child',
	template: `
		<app-control-formatter>
			<div class="form-group">
				<label for="exampleInput" appLabel>A field label</label>
				<input type="text" class="form-control" id="exampleInput">
			</div>
		</app-control-formatter>`
})
export class ContentChildComponent { }
