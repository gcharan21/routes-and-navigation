import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template:`<h3> you have selected the id={{departmentId}}</h3>`,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {


  public departmentId;
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(){let id =parseInt(this.route.snapshot.paramMap.get('id'));
  this.departmentId=id;



  }

}
