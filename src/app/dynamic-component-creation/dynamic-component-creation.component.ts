import {
	Component,
	ComponentFactoryResolver,
	OnInit,
	ComponentFactory,
	ViewChildren,
	ViewContainerRef,
	QueryList,
	ComponentRef
} from '@angular/core';
import { ButtonComponent } from './button.component';
import { AlertComponent } from './alert.component';
import { ComponentRequest } from './create-request.component';

@Component({
	selector: 'app-dynamic-component-creation',
	template: `
		<div class="container-fluid">
			<div class="row">
				<app-create-request class="col" [viewPorts]="viewPorts" (createComponent)="addToViewport($event)"></app-create-request>
			</div>
			<div class="row card-deck justify-content-between">
				<div class="col-6" *ngFor="let port of viewPorts">
					<div class="card mt-3">
						<div class="card-header">
							<h3>View Port #{{port}}</h3>
						</div>
						<div class="card-body">
							<ng-template #componentTarget></ng-template>
						</div>
					</div>
				</div>
			</div>
		</div>`
})
export class DynamicComponentCreationComponent implements OnInit {
	public viewPorts: number[] = [1, 2, 3, 4];
	private buttonFactory: ComponentFactory<ButtonComponent>;
	private alertFactory: ComponentFactory<AlertComponent>;
	private components: ComponentRef<any>[] = [];
	@ViewChildren('componentTarget', {read: ViewContainerRef}) targets: QueryList<ViewContainerRef>;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	ngOnInit(): void {
		this.buttonFactory = this.componentFactoryResolver.resolveComponentFactory(ButtonComponent);
		this.alertFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
	}

	public addToViewport(request: ComponentRequest): void {
		const factory = request.componentType === 'button' ? this.buttonFactory : this.alertFactory;
		const target = this.targets.toArray()[request.viewPort];
		const componentRef = target.createComponent(factory);
		componentRef.instance.type = request.contextType;
		componentRef.instance.remove.subscribe(() => componentRef.destroy());
		this.components.push(componentRef);
	}
 }
