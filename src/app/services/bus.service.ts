import { Bus } from './bus';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BusService {
    busCollection: AngularFirestoreCollection <Bus>;

    constructor(private afs: AngularFirestore) {
        this.busCollection = this.afs.collection<Bus>('buses');
    }

    addBus(item: Bus) {
        item.createdAt = serverTimestamp();
        return this.busCollection.add(item);
    }

    updateBusById(id, item: Bus) {
        return this.busCollection.doc(id).set(item);
    }

    getBuss(): Observable<Bus[]> {
        return this.busCollection.valueChanges({idField: 'id'});
    }

    getBusById(id): Observable<Bus>{
        return this.busCollection.doc<Bus>(id).valueChanges().pipe(take(1));
    }

    deleteBusById(id) {
        return this.afs.doc<Bus>(`buses/${id}`).delete();
    }
}

