import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Auth, getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  

    
  ],
  providers: [
    
    provideFirebaseApp(() => initializeApp({"projectId":"chat-auth-1fb02","appId":"1:994154386260:web:aaea118a7a95ada7592ec1","storageBucket":"chat-auth-1fb02.appspot.com","apiKey":"AIzaSyCD9IlyqNzbSnoE-vgxbyYu07_qRMv7Q2I","authDomain":"chat-auth-1fb02.firebaseapp.com","messagingSenderId":"994154386260"})),
    provideAuth(() => getAuth()),
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
