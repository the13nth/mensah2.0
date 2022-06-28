import { Passenger } from './passenger';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PassengerService {
    passengerCollection: AngularFirestoreCollection <Passenger>;

    constructor(private afs: AngularFirestore) {
        this.passengerCollection = this.afs.collection<Passenger>('passengers');
    }

    addPassenger(item: Passenger) {
        item.createdAt = serverTimestamp();
        return this.passengerCollection.add(item);
    }

    updatePassengerById(id, item: Passenger) {
        return this.passengerCollection.doc(id).set(item);
    }

    getPassengers(): Observable<Passenger[]> {
        return this.passengerCollection.valueChanges({idField: 'id'});
    }

    getPassengerById(id): Observable<Passenger>{
        return this.passengerCollection.doc<Passenger>(id).valueChanges().pipe(take(1));
    }

    deletePassengerById(id) {
        return this.afs.doc<Passenger>(`passengers/${id}`).delete();
    }
}

