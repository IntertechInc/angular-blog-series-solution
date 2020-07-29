import { Input, Component } from '@angular/core';
import { ItemInterface } from '../shared/item.interface';

@Component({
	selector: 'app-report-results',
	template: `<div style="white-space: pre">{{data | json}}</div>`
})
export class ReportResultsComponent {
	@Input() data: ItemInterface[];
}
