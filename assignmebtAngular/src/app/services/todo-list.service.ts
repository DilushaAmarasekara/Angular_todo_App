import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  apiEndPoint  = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getTasks() {
    return this.http.get(this.apiEndPoint+'/tasks');
  }

  addTask(newTask: any) {
    return this.http.post(this.apiEndPoint+'/tasks', newTask);
  }
  
  updateTask(updatedTask: any) {
    return this.http.put(this.apiEndPoint+'/tasks/'+updatedTask._id, updatedTask);
  }
  
  deleteTask(taskId: any) {
    return this.http.delete(this.apiEndPoint+'/tasks/'+taskId);
  }
}
