import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class CustomReuseStrategy extends RouteReuseStrategy {
	private savedHandles = new Map<string, DetachedRouteHandle>();

	retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
		return this.savedHandles.get(this.getRouteKey(route));
	}

	shouldAttach(route: ActivatedRouteSnapshot): boolean {
		return this.savedHandles.has(this.getRouteKey(route));
	}

	shouldDetach(route: ActivatedRouteSnapshot): boolean {
		return route.data.saveComponent;
	}

	shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
		return future.routeConfig === curr.routeConfig;
		/*if (future.routeConfig === curr.routeConfig) {
		 return !future.data.alwaysRefresh;
		 } else {
		 return false;
		 }*/
	}

	store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
		const key = this.getRouteKey(route);
		this.savedHandles.set(key, handle);
	}

	private getRouteKey(route: ActivatedRouteSnapshot): string {
		return route.pathFromRoot.filter(u => u.url).map(u => u.url).join('/');
	}

	public clearSavedHandle(key: string): void {
		const handle = this.savedHandles.get(key);
		if (handle) {
			(handle as any).componentRef.destroy();
		}

		this.savedHandles.delete(key);
	}
}
