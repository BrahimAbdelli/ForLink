import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from './task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  displayedColumns  :  string[] = ['title', 'description','actions'];
  dataSource  : Task[]=[];
  task : Task=new Task();

  constructor(private apiService: ApiService,
    private router : Router) { }

  ngOnInit(): void {
    this.apiService.readTasks().subscribe((result)=>{ 
      console.log(result)  
      this.dataSource  =  result;
     })
  }

  selectTask(task){
    this.task = task;
    console.log("selected: ", this.task);
    this.router.navigate(['/modification',task.id]);
  }

/*   newTask(){
    this.task = new Task();
  } */



  deleteTask(id){
    this.apiService.deleteTask(id).subscribe((result)=>{
      console.log(result);
      this.ngOnInit();
    });
  }

}
