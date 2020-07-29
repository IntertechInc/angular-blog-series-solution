import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-multiple-locations-card',
	template: `
        <ng-template #content>
            <ng-content select="app-card-heading"></ng-content>
        </ng-template>
        <div class="card">
            <h5 class="card-header">
                <ng-container *ngTemplateOutlet="isHeader ? content : null"></ng-container>
            </h5>
            <div class="card-body">
                <ng-content select="app-card-body"></ng-content>
            </div>
            <div class="card-footer">
                <ng-container *ngTemplateOutlet="!isHeader ? content : null"></ng-container>
            </div>
        </div>`
})
export class MultipleLocationsCardComponent {
	@Input() isHeader: boolean;
}
