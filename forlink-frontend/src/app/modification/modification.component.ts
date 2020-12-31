import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Task } from '../task/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
   taskId : number;
  task : Task=new Task();
  constructor(private apiService: ApiService,
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.taskId = this.activatedRoute.snapshot.params['id'];
    this.apiService.getTaskById(this.taskId).subscribe((result)=>{
    this.task=result;
  })
  }

  updateTask(f){
    console.log("Update", f.value)
    f.value.id = this.task['id'];
    this.apiService.updateTask(f.value).subscribe((result)=>{
      console.log(result);
      this.ngOnInit();
    });

    this.router.navigate(['tasks']);
  }

}
