import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Renderer2, Type } from '@angular/core';
import { LoadingCardGlobalComponent } from './loading-card/loading-card-global.component';
import { LoadingCardLocalComponent } from './loading-card/loading-card-local.component';

@Component({
	selector: 'app-component-scope',
	template: `
	<button class="btn btn-info" (click)="addGlobalCard()">Add Global Card</button>
	<button class="btn btn-info" (click)="addLocalCard()">Add Local Card</button>
		<div class="card-group pt-5">
			<ng-template #content></ng-template>
		</div>`
})
export class ComponentScopeComponent {
	@ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	addGlobalCard(): void {
		this.addCard(LoadingCardGlobalComponent);
	}

	addLocalCard(): void {
		this.addCard(LoadingCardLocalComponent);
	}

	addCard(type: Type<unknown>): void {
		const factory = this.componentFactoryResolver.resolveComponentFactory(type);
		this.content.createComponent(factory);
	}
}
