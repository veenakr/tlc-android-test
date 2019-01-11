import { Component, OnInit } from '@angular/core';
import { testService } from '../../services/testService';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit {
  constructor( private testService: testService) {

  }

  ngOnInit(){
    this.testService.serviceSetSuccess();
  }
  
}
