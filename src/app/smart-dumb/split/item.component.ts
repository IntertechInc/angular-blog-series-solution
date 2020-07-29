import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../shared/item.interface';

@Component({
	selector: 'app-item',
	template: `
        <h2>{{item.name}}</h2>
        <p>{{item.description}}</p>`
})
export class ItemComponent {
	@Input() item: ItemInterface;
}
