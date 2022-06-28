import { Mistscan } from './mistscan';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MistscanService {
    mistscanCollection: AngularFirestoreCollection <Mistscan>;

    constructor(private afs: AngularFirestore) {
        this.mistscanCollection = this.afs.collection<Mistscan>('mistscans');
    }

    addMistscan(item: Mistscan) {
        item.createdAt = serverTimestamp();
        return this.mistscanCollection.add(item);
    }

    updateMistscanById(id, item: Mistscan) {
        return this.mistscanCollection.doc(id).set(item);
    }

    getMistscans(): Observable<Mistscan[]> {
        return this.mistscanCollection.valueChanges({idField: 'id'});
    }

    getMistscanById(id): Observable<Mistscan>{
        return this.mistscanCollection.doc<Mistscan>(id).valueChanges().pipe(take(1));
    }

    deleteMistscanById(id) {
        return this.afs.doc<Mistscan>(`mistscans/${id}`).delete();
    }
}

