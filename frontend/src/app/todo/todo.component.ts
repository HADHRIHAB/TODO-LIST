import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todo={
  text:'',
};
todos:any
  constructor(private _todo:TodoService) { }

  ngOnInit(): void {
    this.getall()
  }


add(){
  this._todo.create(this.todo).subscribe({
    next:(res)=>{
      this.ngOnInit();
      this.todo={
        text:''
      }
      
      
    },
    error:(err)=> {
      console.log(err);
      
    }
  })
}
getall(){
  this._todo.getAll().subscribe({
    next:(res)=>{
       this.todos=res
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

delete(id:any){
  this._todo.delete(id).subscribe({
    next:(res)=>{
      this.ngOnInit()
    },
    error:(err)=>{
      console.log(err);
      
    }

  })
}
done(id:any){
  this._todo.update(id).subscribe({
    next:(res)=>{
      this.ngOnInit()
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
