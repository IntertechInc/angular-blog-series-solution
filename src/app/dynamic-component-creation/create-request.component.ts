import { Component, Output, EventEmitter, Input } from '@angular/core';

export interface ComponentRequest {
	contextType: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	componentType: 'button' | 'alert';
	viewPort: number;
}

@Component({
	selector: 'app-create-request',
	template: `
	<form>
		<div class="row">
			<div class="form-group col-4">
				<label for="contextType">Context Color</label>
				<select class="form-control" id="contextType" name="contextType" [(ngModel)]="contextType">
					<option value="primary">Primary</option>
					<option value="secondary">Secondary</option>
					<option value="success">Success</option>
					<option value="warning">Warning</option>
					<option value="danger">Danger</option>
				</select>
			</div>
			<div class="form-group col-4">
				<label>Component Type</label>
				<div class="form-check">
					<input class="form-check-input" type="radio" name="componentType" id="buttonSelect" value="button" [(ngModel)]="componentType">
					<label class="form-check-label" for="buttonSelect">Button</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="radio" name="componentType" id="alertSelect" value="alert" [(ngModel)]="componentType">
					<label class="form-check-label" for="alertSelect">Alert</label>
				</div>
			</div>
			<div class="form-group col-4">
				<label>View Port</label>
				<div class="form-check" *ngFor="let port of viewPorts; let i = index">
					<input class="form-check-input" type="radio" name="viewPort" [id]="'viewPort' + port" [value]="i" [(ngModel)]="viewPort">
					<label class="form-check-label" [for]="'viewPort' + port">{{port}}</label>
				</div>
			</div>
		</div>
		<div class="row">
			<button class="btn btn-primary btn-block" (click)="createRequest()">Create Component</button>
		</div>
	</form>`
})
export class CreateRequestComponent {
	@Input() viewPorts: number[];
	@Output() createComponent = new EventEmitter<ComponentRequest>();
	public viewPort = 0;
	public componentType: 'button' | 'alert' = 'button';
	public contextType: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';

	public createRequest() {
		this.createComponent.emit({
			viewPort: this.viewPort,
			componentType: this.componentType,
			contextType: this.contextType
		});
	}
}
