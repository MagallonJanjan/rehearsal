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

  myTask:any[] = [{
    task : "Wash clothes",
    description : "Wash my super clean clothes",
    date : "2021-03-26"
  }] ;

  onSubmit(){
    console.log(this.task.value)
    this.myTask.push(this.task.value);
    console.log(this.myTask);
    this.task.reset();
   
  }

  removeTask(item : any){
    this.myTask.splice(this.myTask.indexOf(item),1)
  }


}
