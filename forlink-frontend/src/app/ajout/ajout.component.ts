import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  task : Task=new Task();
  constructor(private apiService: ApiService,
    private router : Router) { }

  ngOnInit(): void {
  }

  createTask(f){

    console.log("form value: ", f.value); console.log("task : " +this.task);

    this.apiService.createTask(this.task).subscribe((result)=>{
      console.log(result);
 
    });
    this.router.navigate(['tasks']);
  }
}
