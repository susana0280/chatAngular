import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
userData:any

constructor(private _userService:UserService, private router:Router,private _userData:UserDataService){
  this.getUserData()

}
login(){
  this.router.navigate(['/login'])
}

  logout(){

    this._userService.logout()
    .then(response=>{
      console.log(response)
      alert("ha salido de la aplicacion")
      this.router.navigate(['/login'])
    })
    .catch(error=>console.log(error))
  
  }

  getUserData(){
   this.userData=this._userData.getUserData()
   console.log(this.userData.user.email)
  }



}
