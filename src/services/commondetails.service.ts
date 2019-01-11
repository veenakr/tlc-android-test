import { Injectable } from "@angular/core";

@Injectable()
export class CommonDetails {
  username: string;
  showBlock: string;
  memberIdVerified: boolean = false;
  mobileVerified: boolean = false;
  emailVerified: boolean = false;
  memberId: number;
  jsonmemberId: number = 12345678;
  mobileNumber: string = "+91 *******456";
  emailId: string = "v*********@gmail.com";
  message: string;
  mobileInfoMessage: string =
    "You can change your mobile number after activating the membership ";
  emailInfoMessage: string =
    "You can change your email ID after activating the membership ";
  mobileRequestOtpMessage: string = "OTP will auto-populate in 3 seconds";
  mobileResendOtpMessage: string = "An OTP has been sent to your mobile number";
  emailOtpMessage: string = "Enter OTP in the section below";
  OtpRequested: boolean = false;
  otpButton: string = "Request OTP";
  isPasswordChange = false;
  //Set New Password
  eyeIconCreatePassword = "ios-eye-outline";
  showPassCreatePassword = true;
  eyeIconRenamePassword = "ios-eye-outline";
  showPassRenamePassword = true;
  typeCreatePassword = "password";
  typeRenamePassword = "password";
  showPasswordBlock = false;
  createdPassword: string;
  reEnteredPassword: string;
  matched: boolean = false;


  resetdata(){
    this.showBlock= "";
    this.emailVerified = false;
    this.mobileVerified = false;
    this.memberIdVerified = false;
    this.memberId = null;
    this.message = "";
    this.OtpRequested = false;
    this.otpButton = "Request OTP";
    this.isPasswordChange = false;
    this.showPassCreatePassword = true;
    this.showPassRenamePassword = true;
    this.showPasswordBlock = false;
    this.createdPassword = "";
    this.reEnteredPassword = "";
    this.matched = false;
  }
}
