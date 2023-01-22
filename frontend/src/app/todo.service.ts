import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  url='http://127.0.0.1:3000/todo/';
  
  create(todo:any){
    return this.http.post(this.url+'add', todo)
  }
  
  getAll(){
    return this.http.get(this.url+'getall')
  }

  delete(id:any){
    return this.http.delete(this.url+'delete/'+id)
  }

  update(id:any){
    return this.http.put(this.url+'update/'+id, null)
  }
}
