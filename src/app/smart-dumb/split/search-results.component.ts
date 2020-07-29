import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../shared/item.interface';

@Component({
	selector: 'app-search-results',
	template: `
            <ul class="list-group" *ngFor="let item of items">
                <li class="list-group-item">
                    <app-item [item]="item"></app-item>
                </li>
			</ul>`
})
export class SearchResultsComponent {
	@Input() items: ItemInterface[];
}
