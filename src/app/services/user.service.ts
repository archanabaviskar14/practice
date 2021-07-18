import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private af:AngularFirestore) { }

  addNewUser(id,name,address){
    return this.af.doc('users/' + id).set({
      name,
      address
    })
  }
}
