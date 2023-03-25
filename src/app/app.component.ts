import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'nipamTechnology';
  constructor() { }

  modalshow:boolean=false;
  show(){
      this.modalshow=!this.modalshow;
  }

  profileShow:boolean=false;

  pshow()
  {
    this.profileShow=!this.profileShow;

  }
}
