import { Input, Component } from '@angular/core';
import { ListItemInterface } from '../models/list-item.interface';
import { ListComponent } from '../models/list-component.interface';

@Component({
	selector: 'app-child-table',
	template: `
		<table class="table table-hover table-sm">
			<thead>
			<tr>
				<th>#</th>
				<th>Item</th>
			</tr>
			</thead>
			<tbody>
			<tr	*ngFor="let item of items; let i = index" [ngClass]="{'bg-success': item.isSelected}" (click)="toggleItem(i)">
				<td>{{i}}</td>
				<td>{{item.display}}</td>
			</tr>
			<tbody>
		</table>
		`
})
export class ChildTableComponent implements ListComponent {
	@Input() items: ListItemInterface[];

	public toggleItem(i: number): void {
		this.items[i].isSelected = !this.items[i].isSelected;
	}
}
