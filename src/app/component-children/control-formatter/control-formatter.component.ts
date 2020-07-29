import { Component, ContentChild, ElementRef, AfterContentInit, Renderer2 } from '@angular/core';
import { ControlLabelDirective } from './control-label.directive';

@Component({
	selector: 'app-control-formatter',
	template: `<ng-content></ng-content>`
})
export class ControlFormatterComponent implements AfterContentInit {
	@ContentChild(ControlLabelDirective, {read: ElementRef}) labelRef: ElementRef;

	constructor(private renderer: Renderer2) { }

	ngAfterContentInit(): void {
		this.renderer.addClass(this.labelRef.nativeElement, 'text-info');
	}
}
