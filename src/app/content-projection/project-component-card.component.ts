import { Component } from '@angular/core';

@Component({
	selector: 'app-project-component-card',
	template: `
        <div class="card">
            <h5 class="card-header">
                <ng-content select="app-card-heading"></ng-content>
            </h5>
            <div class="card-body">
                <ng-content select="app-card-body"></ng-content>
            </div>
        </div>`
})
export class ProjectComponentCardComponent { }
