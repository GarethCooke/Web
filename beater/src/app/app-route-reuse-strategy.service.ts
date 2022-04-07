import { Injectable } from '@angular/core';
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppRouteReuseStrategyService implements RouteReuseStrategy {
  storedRouteHandles = new Map<string, DetachedRouteHandle>();
  excludedRoutes: string[] = ["bb-colour"]; // these routes will not be cached

  private isCachableRoute(route: ActivatedRouteSnapshot): boolean {
    return !this.excludedRoutes.find(excl => excl == route.routeConfig.path);
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.isCachableRoute(route);
  }

  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    this.storedRouteHandles.set(this.getPath(route), detachedTree);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.isCachableRoute(route) && this.storedRouteHandles.has(this.getPath(route));
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.storedRouteHandles.get(this.getPath(route)) as DetachedRouteHandle;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    if (route.routeConfig !== null && route.routeConfig.path !== null) {
      return route.routeConfig.path;
    }
    return '';
  }
}

