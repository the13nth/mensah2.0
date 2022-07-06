import { Component, OnInit } from '@angular/core';

import { Storage } from '@capacitor/storage';
import { INTRO_KEY } from '../introduction/introduction.page';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import internal from 'stream';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  livedemopassengers: AngularFireList<any>;
  pdata: any[];
  livepassengercount: any;
  livepassengercounttime: any;
  livepassengercountlocation: any;
  firestorepassengers: any;
  testvalueholder: any;
  constructor(private http: HttpClient, private db: AngularFireDatabase, private afs: AngularFirestore) { }
  ngOnInit() {
    console.log("on init loaded")
    this.getpassengers()
     this.getfirestorepassengers()
  }

  

  

  async resetIntro() {
    await Storage.remove({key: INTRO_KEY});
  }
  

  
  getpassengers() {
    //run function every 10 seconds
    setInterval(() => {10}, 10000);

    this.livedemopassengers = this.db.list('current-passengers');
    this.livedemopassengers.valueChanges().subscribe(data => {
      this.pdata = data;
      this.livepassengercount = this.pdata[this.pdata.length - 1][0];
      this.livepassengercounttime = this.pdata[this.pdata.length - 1][1];
      this.livepassengercountlocation = this.pdata[this.pdata.length - 1][2];
      console.log('Number of passengers last sub:',this.livepassengercount)
    //return this.livedemopassengers.valueChanges();

    
  });
}
getfirestorepassengers() {
  console.log("get firestore passengers")
  return this.afs.collection("busstops").snapshotChanges().subscribe(res => {
    this.firestorepassengers = res[res.length - 1].payload.doc.data();
    this.testvalueholder = this.firestorepassengers.passengercount;
    console.log("firestore:",this.testvalueholder)
  });

}




}
