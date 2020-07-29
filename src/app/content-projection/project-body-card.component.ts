import { Input, Component } from '@angular/core';

@Component({
	selector: 'app-project-body-card',
	template: `
        <div class="card">
            <h5 class="card-header">
                {{headerText}}
            </h5>
            <div class="card-body">
                <ng-content></ng-content>
            </div>
        </div>`
})
export class ProjectBodyCardComponent {
	@Input() headerText: string;
}
