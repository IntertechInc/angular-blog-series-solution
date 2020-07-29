import { Input, Component } from '@angular/core';

@Component({
	selector: 'app-input-title-card',
	template: `
        <div class="card">
            <h5 class="card-header">
                {{headerText}}
            </h5>
            <div class="card-body">
                {{bodyText}}
            </div>
        </div>`
})
export class InputTitleCardComponent {
	@Input() bodyText: string;
	@Input() headerText: string;
}
