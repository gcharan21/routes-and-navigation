import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <ul  class="items">
  <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge"> {{department.id}} {{department.name}</span>
  </li>
  </ul>`,
  
styles: []
})
export class DepartmentListComponent implements OnInit {

  departments=[
{ "id":1 ,"name":"angular"},
{ "id":2 ,"name":"html"},
{ "id":3 ,"name":"bootstrap"},
{ "id":4 ,"name":"java"},
{ "id":5 ,"name":"mongodb"},
{ "id":6 ,"name":"mssql"}
]
 constructor(private router:Router) { }

  ngOnInit(): void {
  }

onSelect(department){

  this.router.navigate(['/departments',department.id]);
}

    
}
