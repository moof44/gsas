import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  employeeId: string;
  contactNo: string;
  privileges: string;
}

//tin,name,rdo,city
const ELEMENT_DATA: PeriodicElement[] = [
  {employeeId: "123-456-789", name: 'Jireh Padua', contactNo: "32b", privileges: 'Staff'},
  {employeeId: "154-545-986", name: 'Blessed Padua', contactNo: "32A", privileges: 'Admin'},
  {employeeId: "531-456-512", name: 'Israel Padua', contactNo: "24", privileges: 'Accounting'}
];

@Component({
  selector: 'app-users-datatable',
  templateUrl: './users-datatable.component.html',
  styleUrls: ['./users-datatable.component.scss']
})
export class UsersDatatableComponent implements OnInit {
  displayedColumns: string[] = ['employeeId', 'name', 'contactNo', 'privileges'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
