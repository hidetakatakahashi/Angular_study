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
  flagON = "true";
  bcolor = "green"
  size = "200";
  // if(flag = "true"){
  //   flag2 = "true";
  // }
  which = "aaa";
  entervalue: String = "a";
  showevent(e: String){
    console.log(e);
  }
  show(e: String){
    console.log(e);
  }
  key(e: any){
    this.which = e.which;
  }
  mask(e: any){
    let k = e.which;
    if(!(k >= 48 && k <= 57)){
      //数字以外の場合、入力を無視
      e.preventDefault();
    }
  }
  outer(){
    console.log("outer");
  }
  inner(e: any){
    e.stopPropagation();
    console.log("inner");
  }
  enter(str: String){
    this.entervalue = str;
  }
}
