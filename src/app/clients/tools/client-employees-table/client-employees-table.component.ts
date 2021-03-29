import { Component, OnInit } from '@angular/core';


export interface employees {
  tin: string;
  name: string;
  philhealthNo: string;
  sssNo: string;
  pagibigNo: string;
  isActive: boolean;
}

const ELEMENT_DATA: employees[] = [
  {tin:'123-456-789', name:'joseph ortega', philhealthNo:'ph12345678', sssNo:'ss124515', pagibigNo:'pi1232131', isActive: true},
  {tin:'123-111-789', name:'mark ortega', philhealthNo:'ph13531351', sssNo:'ss21541851', pagibigNo:'pi150202', isActive: true},
  {tin:'123-222-789', name:'john ortega', philhealthNo:'ph2158151', sssNo:'ss1215815', pagibigNo:'pi51510', isActive: true},
  {tin:'123-333-789', name:'michael ortega', philhealthNo:'ph465154', sssNo:'ss8481851', pagibigNo:'pi97845', isActive: true},
  {tin:'123-444-789', name:'vincent ortega', philhealthNo:'ph545181', sssNo:'ss818188', pagibigNo:'pi003215', isActive: true},
  {tin:'123-000-789', name:'gelvin ortega', philhealthNo:'ph818816', sssNo:'ss949219', pagibigNo:'pi501854185', isActive: false}
];



@Component({
  selector: 'app-client-employees-table',
  templateUrl: './client-employees-table.component.html',
  styleUrls: ['./client-employees-table.component.scss']
})
export class ClientEmployeesTableComponent implements OnInit {
  displayedColumns: string[] = ['tin', 'name', 'philhealthNo', 'sssNo', 'pagibigNo', 'isActive'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
