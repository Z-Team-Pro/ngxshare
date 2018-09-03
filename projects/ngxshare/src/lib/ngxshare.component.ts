import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngxshare',
  template: `
    <p>
      ngxshare works!
    </p>
  `,
  styles: []
})
export class NgxshareComponent implements OnInit {

  constructor() { 
    console.log('from service');
  }

  ngOnInit() {
  }

}
