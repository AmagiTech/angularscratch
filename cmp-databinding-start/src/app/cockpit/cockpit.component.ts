import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ type: string, name: string, content: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ type: string, name: string, content: string }>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'server',
      name: serverNameInput.value,
      // content: this.newServerContent
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'blueprint',
      name: serverNameInput.value,
      // content: this.newServerContent
      content: this.serverContentInput.nativeElement.value
    });
  }
}
