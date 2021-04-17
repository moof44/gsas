import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  balance: number;
  cashIn: number;
  cashOut: number;
  description: string;
  dateTime: Date;
  employeeName: string;
  isCheque: boolean;
}

//tin,name,rdo,city
const ELEMENT_DATA: PeriodicElement[] = [
  {balance: 5800.00, cashIn: 800.00, cashOut: 0.00, description: "Customer Payment", dateTime: new Date(),  employeeName:"Jireh", isCheque: false},
  {balance: 5600.00, cashIn: 0.00, cashOut: 200.00, description: "Food", dateTime: new Date(),  employeeName:"Jireh", isCheque: false},
  {balance: 6000.00, cashIn: 400.00, cashOut: 0.00, description: "Customer Payment", dateTime: new Date(),  employeeName:"Jireh", isCheque: true},
  {balance: 7200, cashIn: 1200.00, cashOut: 0.00, description: "Customer Payment", dateTime: new Date(),  employeeName:"Jireh", isCheque: false},
  {balance: 7000.00, cashIn: 0.00, cashOut: 200.00, description: "Transpo", dateTime: new Date(),  employeeName:"Jireh", isCheque: false}
];

@Component({
  selector: 'app-cash-in-out-datatable',
  templateUrl: './cash-in-out-datatable.component.html',
  styleUrls: ['./cash-in-out-datatable.component.scss']
})
export class CashInOutDatatableComponent implements OnInit {
  displayedColumns: string[] = ['balance', 'cashIn', 'cashOut', 'description','dateTime','employeeName', 'isCheque'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
