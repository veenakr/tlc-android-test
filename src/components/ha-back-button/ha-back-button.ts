import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the BackButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ha-back-button',
  templateUrl: 'ha-back-button.html'
})
export class BackButtonComponent {
  @Input() enroll : boolean = false;

  constructor(public navCtrl: NavController) {
    
  }
  goBack(){
    this.navCtrl.pop();
  }
}
