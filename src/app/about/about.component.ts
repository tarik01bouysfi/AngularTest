import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{
  info={  nom:"Mohamed",
          email:"med@youssfi.net",
          tel:"0661326837"
        };
  comments : any[]=[]; 

  comment={id:0,message:''};

  newComment=false;
  
    addComment() {
        if(this.comment.message!=''){
          this.comment.id=this.comments.length+1;
          this.comments.push({
                            id:this.comment.id,
                            message:this.comment.message } );
          this.comment.message='';
      }
  }
}
