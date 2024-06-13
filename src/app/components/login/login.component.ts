import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  dateForm:FormGroup;
  loggedUser=false;
  userDate:any;

  constructor(private builder:FormBuilder,private _userService:UserService, private router:Router, private _userData:UserDataService){

    this.dateForm=builder.group({

      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/)]]

    })

  }


  enviar(){
    console.log(this.dateForm.value)
    this._userService.login(this.dateForm.value)
    .then(response=>{
      console.log(response)
      this.loggedUser=true;
      this._userData.setUserdata(response)
      this.router.navigate(["/main"])
    })
    .catch(error=>console.log(error))
    
  }

  enviarGoogle(){
    this._userService.loginWhitGoogle()
    .then(response=>{
      console.log(response)
      this.loggedUser=true;
      this._userData.setUserdata(response)
      this.router.navigate(["/main"])
    })
    .catch(error=>console.log(error))
  }

  volver(){
  this.router.navigate(['/main'])
  }
}


