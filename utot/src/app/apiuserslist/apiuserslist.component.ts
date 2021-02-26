import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiuserslist',
  templateUrl: './apiuserslist.component.html',
  styleUrls: ['./apiuserslist.component.css']
})
export class ApiuserslistComponent implements OnInit {

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  api = "https://jsonplaceholder.typicode.com/users";
  users:any = [];
  search = "";
  
  getUsers(){
    this.http.get(this.api).subscribe(user => {
      console.log(user);
      this.users = user;
    })
  }

  getNames(){
    console.log('test');
    return this.users.filter((user:any) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
    })
  }

}
