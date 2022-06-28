import { Activities } from './activities';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {
    activitiesCollection: AngularFirestoreCollection <Activities>;

    constructor(private afs: AngularFirestore) {
        this.activitiesCollection = this.afs.collection<Activities>('activitieses');
    }

    addActivities(item: Activities) {
        item.createdAt = serverTimestamp();
        return this.activitiesCollection.add(item);
    }

    updateActivitiesById(id, item: Activities) {
        return this.activitiesCollection.doc(id).set(item);
    }

    getActivitiess(): Observable<Activities[]> {
        return this.activitiesCollection.valueChanges({idField: 'id'});
    }

    getActivitiesById(id): Observable<Activities>{
        return this.activitiesCollection.doc<Activities>(id).valueChanges().pipe(take(1));
    }

    deleteActivitiesById(id) {
        return this.afs.doc<Activities>(`activitieses/${id}`).delete();
    }
}

