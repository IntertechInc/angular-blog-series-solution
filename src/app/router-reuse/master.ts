import { OnDestroy, OnInit } from '@angular/core';

export abstract class MasterComponent implements OnInit, OnDestroy {
	public randoms: number[];
	public abstract displayName: string;

	ngOnInit(): void {
		this.randoms = [];
		const numberOfLinks = this.getRandom(10);
		for (let i = 0; i < numberOfLinks; i++) {
			this.randoms.push(this.getRandom(100));
		}
	}

	getRandom(max: number): number {
		return Math.floor(Math.random() * max);
	}

	ngOnDestroy(): void {
		console.log(`Destroy ${this.displayName}`);
	}
}
