import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo:"/login"},
  {path:"main", pathMatch:'full', component:MainComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:"register", pathMatch:'full', component:RegisterComponent},
  {path:"login", pathMatch:'full', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
