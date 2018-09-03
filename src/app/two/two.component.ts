import { NgxshareService } from './../../../projects/ngxshare/src/lib/ngxshare.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor( private myshare: NgxshareService) {

    console.log('from tow',this.myshare.getItem('test1'));
    console.log('from tow',this.myshare.getItem('test'));

    this.myshare.setItem('test2',{'name':'ramy','id':'3049'})
    }
 
   ngOnInit() {
   }

}
