import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private store: AngularFirestore) { 
    
  }

  getAllAvailableExercises(){
    //this.store.collection ('availableExercises').snapshotChanges()
  }

  
}