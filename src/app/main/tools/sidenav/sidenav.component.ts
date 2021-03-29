import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    trigger('showNavbar',[
      state('open',style({
        width:'130px'
      })),
      state('closed', style({
        width:'50px'
      })),
      transition('open<=>closed', [
        animate('0.2s')
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  isShowNavbar:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSidenav(isOpen:boolean){
    this.isShowNavbar=isOpen;
  }
}
