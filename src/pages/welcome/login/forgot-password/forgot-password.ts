import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ViewController,
  AlertController,
  ModalController
} from "ionic-angular";


import { CommonDetails } from "../../../../services/commondetails.service";


@Component({
  selector: "page-forgot-password",
  templateUrl: "forgot-password.html"
})
export class ForgotPasswordPage {
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public comdet: CommonDetails,
    public modalCtrl: ModalController
  ) {}
  
  ionViewWillEnter() {
    this.comdet.showBlock = "mobile";
  }
  
  onPasswordChanged() {
    let alert = this.alertCtrl.create({
      message:'<div><img src="../assets/imgs/check-image.png"/><div class="password-change-success">You have successfully changed your password. Login with your new password.</div></div>',
      buttons: [
        {
          text: "Login",
          role: "cancel",
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          role: "cancel",
          cssClass: "close-btn",
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ],
      cssClass: "alertCustomCss"
    });
    alert.present();
  }
  ionViewDidLeave(){
   this.comdet.resetdata();
  }
}
