import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  tinNo: string;
  rdo: string;
  city: string;
}


//tin,name,rdo,city
const ELEMENT_DATA: PeriodicElement[] = [
  {tinNo: "123-456-789", name: 'Jireh Padua', rdo: "32b", city: 'Obando'},
  {tinNo: "154-545-986", name: 'Good Samaritan', rdo: "32A", city: 'Sta. Maria'},
  {tinNo: "531-456-512", name: 'Kyle Bicycle', rdo: "24", city: 'Valenzuela City'}
];


@Component({
  selector: 'app-client-datatable',
  templateUrl: './client-datatable.component.html',
  styleUrls: ['./client-datatable.component.scss']
})
export class ClientDatatableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
