import { Component, Input, OnChanges, forwardRef } from '@angular/core';
import { IconDefinition, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

class RatingStar {
	icon: IconDefinition;
	index: number;
	selected: boolean;

	constructor(index: number, rating: number) {
		this.index = index;
		this.selected = index < rating;
		this.icon = this.selected ? faStarSolid : faStarEmpty;
	}
}

@Component({
	selector: 'app-rating-control',
	template: `
		<div (mouseleave)="onTouchFn()">
			<fa-icon
				*ngFor="let star of ratingStars; let i = index"
				[icon]="star.icon"
				(click)="setRating(i)"
				size="lg"
				[ngClass]="{'selected': star.selected, 'disabled': isDisabled}">
			</fa-icon>
		</div>`,
	styles: [`
		fa-icon {
			cursor: pointer;
		}

		fa-icon.selected {
			color: GoldenRod;
		}

		.disabled {
			color: gray !important;
			cursor: default;
		}`],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RatingControlComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => RatingControlComponent),
			multi: true
		}
	]
})
export class RatingControlComponent implements OnChanges, ControlValueAccessor, Validator {
	@Input() maxRating = 10;
	@Input() minRating = 1;

	public rating: number;
	public ratingStars: RatingStar[] = [];
	public onChangeFn;
	public onTouchFn;
	public onValidatorChangeFn;
	public isDisabled: boolean;

	ngOnChanges(): void {
		this.calculateRating();
		if (this.onValidatorChangeFn) {
			this.onValidatorChangeFn();
		}
	}

	private calculateRating(): void {
		this.ratingStars = [];
		for (let i = 0; i < this.maxRating; i++) {
			this.ratingStars.push(new RatingStar(i, this.rating));
		}
	}

	setRating(index: number): void {
		if (!this.isDisabled) {
			this.rating = index + 1;
			this.calculateRating();
			this.onChangeFn(this.rating);
		}
	}

	writeValue(obj: any): void {
		this.rating = obj;
		this.calculateRating();
	}

	registerOnChange(fn: any): void {
		this.onChangeFn = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouchFn = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.isDisabled = isDisabled;
	}

	validate(control: AbstractControl): ValidationErrors {
		return control.value >= this.minRating ? null : { tooLow: 'It\'s not that bad...'};
	}

	registerOnValidatorChange?(fn: () => void): void {
		this.onValidatorChangeFn = fn;
	}
}
