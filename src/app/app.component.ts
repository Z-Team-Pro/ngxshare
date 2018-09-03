import { Component } from '@angular/core';
import { NgxshareService } from 'ngxshare';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharedata';

constructor(public myshare:NgxshareService ){
 this.myshare.setItem('test','teeeeeeeeeeeeest');
 console.log(this.myshare.getItem('test7'));
}

}
