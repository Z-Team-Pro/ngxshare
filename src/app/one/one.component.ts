import { Component, OnInit } from '@angular/core';
import { NgxshareService } from 'ngxshare';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor( private myshare: NgxshareService) {

   console.log('from one',this.myshare.getItem('test'));
   console.log('from one',this.myshare.getItem('test2'));

   this.myshare.setItem('test1',{'name':'ahmed','id':'3023'})
   }

  ngOnInit() {
  }

}
