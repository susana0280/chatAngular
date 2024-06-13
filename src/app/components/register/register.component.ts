import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

dates?:{};
formReg:FormGroup 



constructor(private builder:FormBuilder,private _userService:UserService,private router:Router){

  
    this.formReg=this.builder.group({

      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/)]]
    })


  


}

enviar(){

console.log(this.formReg.value.email)
this._userService.register(this.formReg.value)
.then(respone=>{
  console.log(respone)
  this.router.navigate(["/login"])
})
.catch(error=>console.log(error))

}

volver(){

  this.router.navigate(["/login"])
}

}
