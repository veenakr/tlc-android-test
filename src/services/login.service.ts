import {Injectable} from "@angular/core";
import {  AlertController } from "ionic-angular";
@Injectable()
export class LoginService{
    usertype : string = "visitor";
    constructor(
        public alertCtrl: AlertController){}
  
    

    
    onWrongCredentials() {
        let alert = this.alertCtrl.create({
          message:
            "We do not recognize your mobile number or email ID. Please Sign Up.",
          buttons: [
            {
              text: "Sign Up",
              role: "cancel",
              handler: () => {
                console.log("Sign up clicked");
              }
            }
          ],
          cssClass: "alertCustomCss"
        });
        alert.present();
      }
}