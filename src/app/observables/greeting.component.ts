import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-greeting',
	template: '<div>Hello, {{user?.name}}</div>'
})
export class GreetingComponent implements OnInit, OnDestroy {
	public user;
	public unsubscribe = new Subject<any>();

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.userService.currentUser()
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(newUser => {
				this.user = newUser;
				console.log(newUser);
			});
	}

	ngOnDestroy(): void {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
