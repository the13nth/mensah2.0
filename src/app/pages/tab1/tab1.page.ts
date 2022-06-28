import { Component, OnInit } from '@angular/core';

import { Storage } from '@capacitor/storage';
import { INTRO_KEY } from '../introduction/introduction.page';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  livedemopassengers: AngularFireList<any>;
  pdata: void;
  
  constructor(private http: HttpClient, private db: AngularFireDatabase) { }
  ngOnInit() {
    console.log("on init loaded")
    this.getMessages()
  }

  

  

  async resetIntro() {
    await Storage.remove({key: INTRO_KEY});
  }
  getMessages(): Observable<any> {
    this.livedemopassengers = this.db.list('current-passengers');
    
    console.log(this.livedemopassengers)
    return this.livedemopassengers.valueChanges();
  }
}
