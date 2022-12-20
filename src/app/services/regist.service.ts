import { Observable } from './../../../node_modules/@firebase/util/dist/node-esm/src/subscribe.d';
import { collection, Firestore, addDoc, collectionData, doc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Registro } from '../model/registro';
import { deleteDoc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistService {

  constructor(private firestore: Firestore) { }

  addRegist(regist:Registro){
    const registRef = collection(this.firestore,'regist');
    return addDoc(registRef,regist);
  }

  getRegist(): Observable<Registro[]>{
    const registRef = collection(this.firestore,'regist');
    return collectionData(registRef, { idField: 'id' }) as unknown as Observable<Registro[]>;
  }

  deleteRegist(regist:Registro){
    const registDelRef=doc(this.firestore,`regist/${regist.id}`)
    return deleteDoc(registDelRef);
  }

  editRegist(id:string,regist:Registro){
    const registDelRef=doc(this.firestore,`regist/${id}`)
    return updateDoc(registDelRef,{idR: regist.idR, name: regist.name});
  }
}


