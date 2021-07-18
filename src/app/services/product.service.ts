import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private af:AngularFirestore) { }

  getAllProducts(){
   return this.af.collection('Products').valueChanges();
  }
}
