import { Component } from '@angular/core';
import { CommonDetails } from '../../services/commondetails.service';

/**
 * Generated class for the PasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ha-password',
  templateUrl: 'ha-password.html'
})
export class PasswordComponent {

  

  constructor( public comdet: CommonDetails) {
    
  }
  showPassword(val) {
    if (val === "createpassword") {
      this.comdet.showPassCreatePassword = !this.comdet.showPassCreatePassword;
      if (this.comdet.showPassCreatePassword) {
        this.comdet.eyeIconCreatePassword = "ios-eye-outline";
        this.comdet.typeCreatePassword = "password";
      } else {
        this.comdet.eyeIconCreatePassword = "ios-eye-off-outline";
        this.comdet.typeCreatePassword = "text";
      }
    } else {
      this.comdet.showPassRenamePassword = !this.comdet.showPassRenamePassword;
      if (this.comdet.showPassRenamePassword) {
        this.comdet.eyeIconRenamePassword = "ios-eye-outline";
        this.comdet.typeRenamePassword = "password";
      } else {
        this.comdet.eyeIconRenamePassword = "ios-eye-off-outline";
        this.comdet.typeRenamePassword = "text";
      }
    }
  }

  isPasswordMatch() {
    if (this.comdet.createdPassword == this.comdet.reEnteredPassword) {
      var element = document.getElementById("setUpProfileProceed");
      element.classList.add("button--proceed--active");
      this.comdet.matched = true;
    } else {
      alert("Passwords don't match");
      this.comdet.matched = false;
    }
  }
}
