import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    constructor(
        private clientFs: AngularFirestore
    ){
        this.clientFs.collection('clients').valueChanges();
    }
   
}