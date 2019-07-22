import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus = 'No server was created';
  serverName = "";
  serverCreated = false;
  servers = ['Server 1', 'Server 2']


  canAddServer = false;
  constructor() { 
    setTimeout(() => {
      this.canAddServer = true;
    }, 2000);
  }

  

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreationStatus = 'Server created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onServerNameChanged(event:Event){
     this.serverName = (<HTMLInputElement>event.target).value;
  }
}
