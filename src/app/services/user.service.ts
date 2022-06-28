import { User } from './user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userCollection: AngularFirestoreCollection <User>;

    constructor(private afs: AngularFirestore) {
        this.userCollection = this.afs.collection<User>('users');
    }

    addUser(item: User) {
        item.createdAt = serverTimestamp();
        return this.userCollection.add(item);
    }

    updateUserById(id, item: User) {
        return this.userCollection.doc(id).set(item);
    }

    getUsers(): Observable<User[]> {
        return this.userCollection.valueChanges({idField: 'id'});
    }

    getUserById(id): Observable<User>{
        return this.userCollection.doc<User>(id).valueChanges().pipe(take(1));
    }

    deleteUserById(id) {
        return this.afs.doc<User>(`users/${id}`).delete();
    }
}

