import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  newMessage:string=""
  loggedUsed:any;
  monstrarChat=false

  messages:any=[
    {
      transmitter:"mLBIBgUShRT2QNpEdH0MPsJLSPC2",
      text:"Hola que tal"
    },
 
    {
      transmitter:"7SRx2P3AkthpAfL3FDEZ0dcv6PK2",
      text:"Yo bien y tu?"
    },
    {
      transmitter:"mLBIBgUShRT2QNpEdH0MPsJLSPC2",
      text:"Bien gracias"
    },
    {
      transmitter:"7SRx2P3AkthpAfL3FDEZ0dcv6PK2",
      text:"Donce vas?"
    },
    {
      transmitter:"mLBIBgUShRT2QNpEdH0MPsJLSPC2",
      text:"Al mercado"
    },
    {
      transmitter:"7SRx2P3AkthpAfL3FDEZ0dcv6PK2",
      text:"yo estuve esta mañana"
    }
 
 

  ];
// send: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;


  constructor(private _userData:UserDataService){
  this.getDataUser()
  }

  ngOnInit(): void {
  this.getDataUser()


  }


  sendMessage(){
   
    let message= {
      transmitter:this.loggedUsed.user.uid,
      text:this.newMessage
    }
  this.messages.push(message)
  
  this.scrollToTheLastElementByClassName()
  }

  getDataUser(){
    this.loggedUsed=this._userData.getUserData()
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo = elements[elements.length-1] as HTMLElement;
    let toppos = ultimo.offsetTop;
    let contenedorMensajes = document.getElementById("contenedorMensajes");

    if(contenedorMensajes){
        contenedorMensajes.scrollTop = toppos;
    }
  }
}
