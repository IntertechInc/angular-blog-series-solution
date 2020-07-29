import { Component } from '@angular/core';

@Component({
	template: `
        <app-input-card bodyText="This is some text within a card body."></app-input-card>
        <div class="m-3"></div>
        <app-input-title-card bodyText="This is some text within a card body." headerText="A sample card"></app-input-title-card>
        <div class="m-3"></div>
        <app-project-body-card headerText="A sample card">This is some text within a card body.</app-project-body-card>
        <div class="m-3"></div>
        <app-project-body-card headerText="A sample card">
            Now I <strong>can</strong> add <em>markup!</em >
            <span class="badge badge-info">And Other Elements</span>
        </app-project-body-card>
        <div class="m-3"></div>
        <app-project-body-card>
            <div header>Projected Heading <button class="btn btn-primary">With buttons!</button></div>
            <div body>
                Now I <strong>can</strong> add <em>markup!</em >
                <span class="badge badge-info">And Other Elements</span>
            </div>
        </app-project-body-card>
        <div class="m-3"></div>
        <app-project-multiple-card>
            <div header>Projected Heading <button class="btn btn-primary">With buttons!</button></div>
            <div body>
                Now I <strong>can</strong> add <em>markup!</em >
                <span class="badge badge-info">And Other Elements</span>
            </div>
        </app-project-multiple-card>
        <div class="m-3"></div>
        <app-project-component-card>
			<app-card-heading textStyle="primary">
				Projected Heading <button class="btn btn-primary">With buttons!</button>
			</app-card-heading>
            <app-card-body>
                Now I <strong>can</strong> add <em>markup!</em >
                <span class="badge badge-info">And Other Elements</span>
            </app-card-body>
        </app-project-component-card>
        <div class="m-3"></div>
        <button class="btn btn-info" (click)="contentLocation = !contentLocation">Toggle</button>
        <div class="m-3"></div>
        <app-multiple-locations-card [isHeader]="contentLocation">
            <app-card-heading>My Title</app-card-heading>
            <app-card-body>Some content</app-card-body>
        </app-multiple-locations-card>
    `
})
export class SampleComponent { }
