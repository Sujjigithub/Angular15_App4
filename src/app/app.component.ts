import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bname:string="";
bisbn:string="";
bauthor:string="";

msg:string="";
onSubmitClick(){
  // alert("Book Name "+ this.bname);
  // alert("Book ISBN "+ this.bisbn);
  // alert("Book Author "+ this.bauthor);
  console.log(this.bname);
  console.log(this.bisbn);
  console.log(this.bauthor);
  this.msg="Form Submitted......";

}

}
