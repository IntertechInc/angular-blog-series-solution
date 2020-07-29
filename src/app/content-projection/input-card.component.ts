import { Input, Component } from '@angular/core';

@Component({
	selector: 'app-input-card',
	template: `
        <div class="card">
            <div class="card-body">
                {{bodyText}}
            </div>
        </div>`
})
export class InputCardComponent {
	@Input() bodyText: string;
}
