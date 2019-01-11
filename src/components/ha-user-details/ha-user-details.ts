import { Component, Input } from "@angular/core";
import {
  NavController,
  NavParams,
  ViewController,
  AlertController
} from "ionic-angular";
import { CommonDetails } from "../../services/commondetails.service";


/**
 * Generated class for the UserdetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "ha-user-details",
  templateUrl: "ha-user-details.html"
})
export class HaUserDetailsComponent {

  @Input() type: string;
  @Input() nextshowblock: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public comdet: CommonDetails
  ) {
  }

  setClasses(val) {
    let classes: string = "common-card memberActivation_Card ";
    classes += this.comdet.showBlock === val ? "expandheight" : "shrinkheight";
    return classes;
  }
  verifyMemberId() {
    if (
      this.comdet.memberId.toString().length === 8 &&
      this.comdet.memberId === this.comdet.jsonmemberId
    ) {
      this.comdet.memberIdVerified = true;
      this.comdet.showBlock = "mobile";
    } else {
      alert("please enter valid memberId");
    }
  }
  updateMessage(messageText) {
    this.comdet.message = messageText;
  }
  push(prevobj, obj, nextobj, type) {
    if (obj.value) {
      if (nextobj === null) {
        this.verifyOtp(type);
      } else {
        nextobj.focus();
      }
    } else {
      prevobj.value = "";
      prevobj.focus();
    }
  }
  verifyOtp(otpVerifyType) {
    switch (otpVerifyType) {
      case "mobile":
        this.comdet.mobileVerified = true;
        this.comdet.showBlock = this.nextshowblock;
        this.comdet.message = "";
        this.comdet.otpButton = "Request OTP";
        this.comdet.OtpRequested = false;
        break;
      case "email":
        this.comdet.emailVerified = true;
        this.comdet.showBlock = this.nextshowblock;
        this.comdet.showPasswordBlock = true;
    }
  }

  onRequestOtp(otpObj, otpVerifyType) {
    console.log(otpObj);
    switch (otpVerifyType) {
      case "mobile":
        if (this.comdet.OtpRequested) {
          this.comdet.message = this.comdet.mobileResendOtpMessage;
        } else {
          this.comdet.message = this.comdet.mobileRequestOtpMessage;
          this.comdet.otpButton = " Resend OTP";
          this.comdet.OtpRequested = true;
        }
        break;
      case "email":
        this.comdet.otpButton = " Resend OTP";
        this.comdet.message = this.comdet.emailOtpMessage;
    }
    this.push(otpObj, otpObj, null, otpVerifyType);
  }

  
}
