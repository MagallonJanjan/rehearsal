import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder
  ) { }

  task:any = FormGroup;

  ngOnInit(): void {


    this.task = this.formBuilder.group({
      task : ['', [Validators.required, Validators.minLength(4)]],
      description : ['', [Validators.required , Validators.minLength(10)]],
      date : ['', Validators.required]
    })
  }

  myTask:any[] = [] ;

  onSubmit(){
    this.myTask.push(this.task);
    console.log(this.myTask);
    this.task.reset();
   
    
  }

}
