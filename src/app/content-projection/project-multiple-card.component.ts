import { Component } from '@angular/core';

@Component({
	selector: 'app-project-multiple-card',
	template: `
        <div class="card">
            <h5 class="card-header">
                <ng-content select="[header]"></ng-content>
            </h5>
            <div class="card-body">
                <ng-content select="[body]"></ng-content>
            </div>
        </div>`
})
export class ProjectMultipleCardComponent { }
