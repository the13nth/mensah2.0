import { Route } from './route';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteService {
    routeCollection: AngularFirestoreCollection <Route>;

    constructor(private afs: AngularFirestore) {
        this.routeCollection = this.afs.collection<Route>('routes');
    }

    addRoute(item: Route) {
        item.createdAt = serverTimestamp();
        return this.routeCollection.add(item);
    }

    updateRouteById(id, item: Route) {
        return this.routeCollection.doc(id).set(item);
    }

    getRoutes(): Observable<Route[]> {
        return this.routeCollection.valueChanges({idField: 'id'});
    }

    getRouteById(id): Observable<Route>{
        return this.routeCollection.doc<Route>(id).valueChanges().pipe(take(1));
    }

    deleteRouteById(id) {
        return this.afs.doc<Route>(`routes/${id}`).delete();
    }
}

