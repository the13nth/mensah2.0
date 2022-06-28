import { Scan } from './scan';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScanService {
    scanCollection: AngularFirestoreCollection <Scan>;

    constructor(private afs: AngularFirestore) {
        this.scanCollection = this.afs.collection<Scan>('scans');
    }

    addScan(item: Scan) {
        item.createdAt = serverTimestamp();
        return this.scanCollection.add(item);
    }

    updateScanById(id, item: Scan) {
        return this.scanCollection.doc(id).set(item);
    }

    getScans(): Observable<Scan[]> {
        return this.scanCollection.valueChanges({idField: 'id'});
    }

    getScanById(id): Observable<Scan>{
        return this.scanCollection.doc<Scan>(id).valueChanges().pipe(take(1));
    }

    deleteScanById(id) {
        return this.afs.doc<Scan>(`scans/${id}`).delete();
    }
}

