import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData:any;
  constructor() { }


  setUserdata(userData:any){
    this.userData=userData

  }



  getUserData(){
    return this.userData
  }
}
