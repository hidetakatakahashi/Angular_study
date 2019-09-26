import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './new.component.html',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: '<p>{{title}}</p>'
})
export class AppComponent {
  title = 'project1';
  image = {
    src : '../image/neko.png'
  };
  flag = "true";
  bcolor = "green"
  if(flag = "true"){
    flag2 = "true";
  }
  show(){
    console.log("test");
  }
}
