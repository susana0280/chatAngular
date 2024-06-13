import { Injectable } from '@angular/core';
// import { Auth,createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _auth:Auth) { }

  register({email,password}:any){
    return createUserWithEmailAndPassword(this._auth,email,password)
  
  }


  login({email,password}:any){

    return signInWithEmailAndPassword(this._auth,email,password)
  }

  loginWhitGoogle(){

    return signInWithPopup(this._auth,new GoogleAuthProvider)
  }

  logout(){
    return signOut(this._auth);
  }
}
