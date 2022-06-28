import { Busstop } from './busstop';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BusstopService {
    busstopCollection: AngularFirestoreCollection <Busstop>;

    constructor(private afs: AngularFirestore) {
        this.busstopCollection = this.afs.collection<Busstop>('busstops');
    }

    addBusstop(item: Busstop) {
        item.createdAt = serverTimestamp();
        return this.busstopCollection.add(item);
    }

    updateBusstopById(id, item: Busstop) {
        return this.busstopCollection.doc(id).set(item);
    }

    getBusstops(): Observable<Busstop[]> {
        return this.busstopCollection.valueChanges({idField: 'id'});
    }

    getBusstopById(id): Observable<Busstop>{
        return this.busstopCollection.doc<Busstop>(id).valueChanges().pipe(take(1));
    }

    deleteBusstopById(id) {
        return this.afs.doc<Busstop>(`busstops/${id}`).delete();
    }
}

