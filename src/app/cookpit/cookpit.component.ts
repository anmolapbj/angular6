import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  
   @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
   @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
    // newServerName = '';
    // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  onAddServer(nameInput: HTMLInputElement) {
    //console.log(nameInput);
    this.serverCreated.emit({ 
      serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
       });

  }
  
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ 
      serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value
    });

}
}
