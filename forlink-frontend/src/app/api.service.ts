import { Task } from './task/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_SERVER = "http://localhost:3000";

  public readTasks(){
    return this.httpClient.get<Task[]>(`${this.API_SERVER}/tasks`);
  }

  public createTask(task: Task){
    return this.httpClient.post<Task>(`${this.API_SERVER}/tasks`, task);
  }

  public updateTask(task: Task){
    return this.httpClient.put<Task>(`${this.API_SERVER}/tasks/${task.id}`, task);
  }

  public deleteTask(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/tasks/${id}`);
  }

  public getTaskById(id: number){
    return this.httpClient.get<Task>(`${this.API_SERVER}/tasks/${id}`);
  }
}
