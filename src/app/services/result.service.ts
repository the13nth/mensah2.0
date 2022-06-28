import { Result } from './result';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResultService {
    resultCollection: AngularFirestoreCollection <Result>;

    constructor(private afs: AngularFirestore) {
        this.resultCollection = this.afs.collection<Result>('results');
    }

    addResult(item: Result) {
        item.createdAt = serverTimestamp();
        return this.resultCollection.add(item);
    }

    updateResultById(id, item: Result) {
        return this.resultCollection.doc(id).set(item);
    }

    getResults(): Observable<Result[]> {
        return this.resultCollection.valueChanges({idField: 'id'});
    }

    getResultById(id): Observable<Result>{
        return this.resultCollection.doc<Result>(id).valueChanges().pipe(take(1));
    }

    deleteResultById(id) {
        return this.afs.doc<Result>(`results/${id}`).delete();
    }
}

