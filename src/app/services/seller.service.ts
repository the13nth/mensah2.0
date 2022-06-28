import { Seller } from './seller';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SellerService {
    sellerCollection: AngularFirestoreCollection <Seller>;

    constructor(private afs: AngularFirestore) {
        this.sellerCollection = this.afs.collection<Seller>('sellers');
    }

    addSeller(item: Seller) {
        item.createdAt = serverTimestamp();
        return this.sellerCollection.add(item);
    }

    updateSellerById(id, item: Seller) {
        return this.sellerCollection.doc(id).set(item);
    }

    getSellers(): Observable<Seller[]> {
        return this.sellerCollection.valueChanges({idField: 'id'});
    }

    getSellerById(id): Observable<Seller>{
        return this.sellerCollection.doc<Seller>(id).valueChanges().pipe(take(1));
    }

    deleteSellerById(id) {
        return this.afs.doc<Seller>(`sellers/${id}`).delete();
    }
}

